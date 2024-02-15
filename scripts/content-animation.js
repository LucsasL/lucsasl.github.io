const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)

    if (entry.isIntersecting) {
      entry.target.classList.add("show");

    } else {
      entry.target.classList.remove("show");

    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden1");
const hiddenSlideElements = document.querySelectorAll(".hidden");
const hiddenSlideReverseElements = document.querySelectorAll(".hidden2");

hiddenElements.forEach((el) => observer.observe(el));
hiddenSlideElements.forEach((el) => observer.observe(el));
hiddenSlideReverseElements.forEach((el) => observer.observe(el));