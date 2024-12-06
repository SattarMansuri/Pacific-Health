
let hamDivs = document.querySelectorAll('.ham-menu div')
let navs = document.querySelector('nav')
let anchor = document.querySelectorAll('a')
let prescription = document.querySelector('.prescriptions')
let prescriptionArrow = document.querySelector('.prescriptions i')
let prescriptionDropDown = document.querySelector('.pres')
let promotions = document.querySelector('.promotions')
let promotionsArrow = document.querySelector('.promotions i')
let promotionsDropDown = document.querySelector('.prom')
let emailInput = document.querySelector('input')

function myFunction(x) {
  x.classList.toggle("ham");
  navs.classList.toggle("navigations")
}

promotions.addEventListener('click', ()=>{
  promotionsArrow.classList.toggle('rotate-arrow')
  promotionsDropDown.classList.toggle('active')
})

prescription.addEventListener('click', ()=>{
  prescriptionDropDown.classList.toggle('active')
  prescriptionArrow.classList.toggle('rotate-arrow')
})

gsap.registerPlugin(MotionPathPlugin);

    gsap.to(".dot1", {
      duration: 3,
      repeat: -1,
      ease: "power1.inOut",
      motionPath: {
        path: ".dot1pf",
        align: ".dot1pf",
        start: 1,
        end: .5,
        alignOrigin: [0.5, 0.5],
        autoRotate: true
      }
    });

    gsap.to(".dot2", {
      duration: 3,
      repeat: -1,
      ease: "power1.inOut",
      motionPath: {
        path: ".dot1pf",
        align: ".dot1pf",
        start: .5,
        end: 0,
        alignOrigin: [0.5, 0.5],
        autoRotate: true
      }
    });

    gsap.to(".dot3", {
      duration: 3,
      repeat: -1,
      ease: "power1.inOut",
      motionPath: {
        path: ".dot2pf",
        align: ".dot2pf",
        start: 1,
        end: .5,
        alignOrigin: [0.5, 0.5],
        autoRotate: true
      }
    });

    gsap.to(".dot4", {
      duration: 3,
      repeat: -1,
      ease: "power1.inOut",
      motionPath: {
        path: ".dot2pf",
        align: ".dot2pf",
        start: .5,
        end: 0,
        alignOrigin: [0.5, 0.5],
        autoRotate: true
      }
    });
