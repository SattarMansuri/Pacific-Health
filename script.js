
let hamDivs = document.querySelectorAll('.ham-menu div')
let navs = document.querySelector('nav')
let anchor = document.querySelectorAll('a')

function myFunction(x) {
  x.classList.toggle("ham");
  navs.classList.toggle("navigations")
}

// Array.from(anchor).forEach((a)=>{
//   a.addEventListener('click', ()=>{
//     navs.classList.toggle("navigations")
//   })
// })

