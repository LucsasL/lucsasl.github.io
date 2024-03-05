iframeContent.addEventListener("load", () => {
  loadingScreen.style.display = "none";
})

const loadingScreen = document.querySelector(".loading");
const iframe = document.querySelector("iframe#room3d");
const iframeContent = iframe.contentDocument;