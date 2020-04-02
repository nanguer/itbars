import gsap from "gsap"
import ScrollToPlugin from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollToPlugin)

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

export const fadeTo = (target, opacity, delay) => {
  gsap.to(target, {
    duration: 0.5,
    opacity,
    delay: delay || 0,
  })
}

export const fadeIn = (target, duration) => {
  gsap.from(target, {
    duration: duration,
    opacity: 0,
    delay: 0.5,
  })
}

export const animateTitle = target => {
  const title = target[0].firstElementChild
  const subtitle = target[0].children[1]
  const button1 = target[0].children[2].firstElementChild
  const button2 = target[0].children[2].children[1].firstElementChild

  gsap.from([title, subtitle, button1, button2], {
    autoAlpha: 0,
    y: 50,
    stagger: {
      ease: "power3.inOut",
      amount: 0.7,
    },
    duration: 0.3,
    delay: 0.6,
  })
}

// window.addEventListener("load", () => {
//   animateTitle()
// })
