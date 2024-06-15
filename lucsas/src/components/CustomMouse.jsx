import { useRef } from "react";

function CustomMouse() {
  const mouse = useRef();

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

export default CustomMouse;