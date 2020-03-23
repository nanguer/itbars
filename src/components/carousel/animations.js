import gsap from "gsap"

export const firstPart = (tar1, tar2, tar3, tar4) => {
  const tl = animateProducts(tar1, tar2, tar3, tar4)
  return tl
}

export const secondPart = (tar1, tar2, tar3, tar4) => {
  const tl = animateProducts(tar1, tar2, tar3, tar4)
  return tl
}

export const animateProducts = (tar1, tar2, tar3, tar4) => {
  const tlProducts = gsap.timeline()
  tlProducts.from(
    tar1,
    {
      opacity: 0,
      x: "-100px",
      duration: 0.5,
    },
    1
  )
  tlProducts.from(
    tar2,
    {
      opacity: 0,
      x: "-50px",
      duration: 1,
    },
    2
  )
  tlProducts.from(
    tar3,
    {
      opacity: 0,
      x: "100px",
      duration: 0.5,
    },
    3
  )
  tlProducts.from(
    tar4,
    {
      opacity: 0,
      x: "50px",
      duration: 1,
    },
    4
  )
  tlProducts.to(
    [tar1, tar2, tar3, tar4],
    {
      opacity: 0,
      stagger: { each: 0.2, from: "random" },
    },
    6
  )

  return tlProducts
}

export const master = gsap.timeline({ repeat: -1 })
