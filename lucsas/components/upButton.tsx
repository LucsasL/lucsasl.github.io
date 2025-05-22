"use client";

// Hooks Import
import { useEffect, useRef, useState } from "react";

// Icons
import { FaArrowUp } from "react-icons/fa";

function UpButton() {
  // States
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Refs
  const topButt = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    // Checks the size of the screen and readjust the menu element to the proper location
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1200) {
        topButt.current!.style.left = "90%";
      } 

      if (window.innerWidth < 1200) {
        topButt.current!.style.left = "80%";
      }
      
      if (window.innerWidth <= 425) {
        topButt.current!.style.left = "70%";
      }

    });

    // It checks the position the user is in the site, if it's higher than 0, the "scrolled" state turns true, and the "Scroll up" button appears
    window.addEventListener("scroll", () => {
      const posY = window.scrollY;

      if (posY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, [topButt]);

  return (
    <>
      {/* Scroll top button */}
      <button
        className="backUp"
        ref={topButt}
        style={
          window.innerWidth >= 1200
            ? {
                opacity: scrolled ? "1" : "0",
                pointerEvents: scrolled ? "" : "none",
                left: "90%",
              }
            : {
                opacity: scrolled ? "1" : "0",
                pointerEvents: scrolled ? "" : "none",
                left: "70%",
              }
        }
        onClick={() => window.scrollTo(0, 0)}
      >
        <FaArrowUp />
      </button>
    </>
  );
}

export default UpButton;
