document.addEventListener("click", () => {
  while (loadingScreen.style.display == "flex") {
    document.style.overflow = "clip";
  }

  // if (loadPerc != document.wind) {

  // }

  loadingScreen.style.display = "none";
})

loadingScreen = document.querySelector(".loading");