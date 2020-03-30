import gsap from "gsap"
import ScrollToPlugin from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollToPlugin)

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

export const animateScroll = anchor => {
  gsap.to(window, {
    duration: 1,
    ease: "power3.inOut",
    scrollTo: { y: anchor },
  })
}

export const animate = target => {
  gsap.from(target, {
    duration: 0.5,
    x: -100,
    ease: "power3.in",
    opacity: 0,
    delay: 0.5,
  })
}

export const fadeExit = target => {
  gsap.to(target, {
    duration: 0.5,
    opacity: 0,
  })
}

export const fadeIn = target => {
  gsap.from(target, {
    duration: 0.5,
    opacity: 0,
  })
}

export const master = gsap.timeline({ repeat: -1 })
