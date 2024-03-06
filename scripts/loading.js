function checkIframeLoad() {
  const loadingScreen = document.querySelector(".loading");
  const iframe = document.querySelector("iframe#room3d");
  const iframeContent = iframe.contentDocument;

  if (iframeContent.readyState == "complete") {
    iframe.contentWindow.onload = () => {
      alert("I'm loading");
    }

    loaded();
    return;
  }
}

function loaded() {
  alert("It's working :D")
}