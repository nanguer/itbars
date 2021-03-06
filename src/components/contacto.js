import React from "react"
import { navigate } from "gatsby"
import { withFormik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

import ContactoStyles from "./contacto.module.scss"

const Error = ({ children }) => (
  <div className={ContactoStyles.error}>
    <p>{children}</p>
  </div>
)

const Contacto = ({ values, errors, touched, isSubmitting }) => {
  return (
    <div>
      <h4>
        <span className={ContactoStyles.span}></span>Escribenos un mensaje
      </h4>

      <Form
        name="contactForm"
        className={ContactoStyles.form}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <div className={ContactoStyles.formField}>
          <Field type="text" name="name" placeholder="Nombre" />
          <ErrorMessage component={Error} name="name" />
        </div>
        <div className={ContactoStyles.formField}>
          <Field type="email" name="email" placeholder="Email" />
          <ErrorMessage component={Error} name="email" />
        </div>
        <div className={ContactoStyles.formField}>
          <Field name="comments" component="textarea" />
          <ErrorMessage component={Error} name="comments" />
        </div>

        <button
          className={ContactoStyles.button}
          type="submit"
          disabled={isSubmitting}
        >
          Enviar
        </button>
      </Form>
    </div>
  )
}

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const FormikContacto = withFormik({
  mapPropsToValues({ name, email, comments }) {
    return {
      name: name || "",
      email: email || "",
      comments:
        comments ||
        "Me gustaria que me contacten para tener mas informacion acerca de vuestros productos.",
    }
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email no valido")
      .required("Por favor introduzca su email."),
    name: Yup.string()
      .min(3, "El nombre debe contener al menos 3 caracteres.")
      .max(20, "El campo nombre no puede exceder los 20 caracteres!")
      .required("Por favor introduzca su nombre."),
    comments: Yup.string()
      .min(10, "El mensaje debe contener al menos 10 caracteres.")
      .max(500, "El mensaje no puede exceder de 500 caracteres!")
      .required("Por favor introduzca su mensaje"),
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    const encodedBody = encode({ "form-name": "contactForm", ...values })

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodedBody,
    })
      .then(() => {
        resetForm()
        setSubmitting(false)
        navigate("/gracias")
      })
      .catch(error => console.log(error))
  },
})(Contacto)

export default FormikContacto
