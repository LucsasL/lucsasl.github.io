const body = document.querySelector("body");
const scrollAnimation = document.querySelector("div.scroll-anim");
let scrollPos = window.scrollY;
let scrolled = false;

body.addEventListener("scroll", () => {
  scrollPos = window.scrollY;

  if (scrollPos > 0) {
    scrolled = true;
  }

  if (scrolled) {
    scrollAnimation.style.display = "none";
  }
})