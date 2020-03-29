import React from "react"
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
        name="contact-form"
        className={ContactoStyles.form}
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input
          type="hidden"
          name="contact-form"
          value="contact"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        />
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
    resetForm()
    setSubmitting(false)
  },
})(Contacto)

export default FormikContacto
