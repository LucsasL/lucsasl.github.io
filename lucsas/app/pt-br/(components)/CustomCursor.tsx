import { useRef, useEffect } from "react";

function CustomCursor() {
  const mouse = useRef();
  
  useEffect(() => {
    console.log("The cursor hovered a button.");
  }, [mouse]);

  window.addEventListener("mouseout", () => {
    mouse.current.style.opacity = 0;
  });

  window.addEventListener("mouseover", () => {
    mouse.current.style.opacity = 1;
  });

  window.addEventListener("mousemove", e => {
    const posX = e.clientX;
    const posY = e.clientY;

    mouse.current.style.top = `${posY - 5}px`;
    mouse.current.style.left = `${posX - 5}px`;
  });
  
  return <div className="mouseCursor" ref={mouse}></div>;
}

export default CustomCursor;