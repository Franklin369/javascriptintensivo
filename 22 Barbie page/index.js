//TOGGLE
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((item) => item.addEventListener("click", linkAction));


//SCROLL REVEAL
const sr =ScrollReveal({
    origin:"top",
    distance:"60px",
    duration:2500,
    delay:400
});
sr.reveal(`.button,.newsletter__container`)
sr.reveal(`.category__data,.footer__content`,{interval:100})
sr.reveal(`.swiper-slide`,{origin:"left"})

//SCROLL UP
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
   
    if(this.scrollY >= 60) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
  }
  window.addEventListener('scroll', scrollUp)