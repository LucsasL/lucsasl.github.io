import { useRef, useContext } from "react";
import { cursorInteraction } from "../App";

function CustomCursor() {
  let { buttons } = useContext(cursorInteraction);
  const bruh = useRef([]);

  const mouse = useRef();

  buttons.forEach(btn => {
    btn.addEventListener("mouseover", () => {
      mouse.current.style.width = "25px";
      mouse.current.style.height = "25px";
    })
  });  

  window.addEventListener("mouseout", () => {
    mouse.current.style.opacity = 0;
  })

  window.addEventListener("mouseover", () => {
    mouse.current.style.opacity = 1;
  })

  window.addEventListener("mousemove", e => {
    const posX = e.clientX;
    const posY = e.clientY;

    mouse.current.style.top = `${posY - 5}px`;
    mouse.current.style.left = `${posX - 5}px`;
  });
  
  return <div className="mouseCursor" ref={mouse}></div>;
}

export default CustomCursor;