const cursor = document.querySelector("div#cursorCircle");

window.addEventListener("mousemove", function (e) {

  const posX = e.clientX;
  const posY = e.clientY;

  /* Adding the position to the cursor */
  cursor.style.left = `${posX}px`;
  cursor.style.top = `${posY}px`;
})