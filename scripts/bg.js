const checkBox = document.querySelector("input#bgButton");

checkBox.onclick = function () {
  document.body.classList.toggle("light-theme");
}