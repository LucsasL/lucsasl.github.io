const container = document.querySelector("div#platforms");

container.addEventListener("wheel", (e) => {
  e.preventDefault();
  container.scrollLeft += e.deltaY;
})