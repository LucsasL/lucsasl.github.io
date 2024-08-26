// Hooks Import
import { useContext, useEffect, useRef, useState } from "react";

// Icons
import { CgMenuRightAlt } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa";

// Context
import { PageLang } from "../App";

function MsgMe() {
  // States
  const [menuShown, setMenuShown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Refs
  const topButt = useRef();
  const langButt = useRef();

  useEffect(() => {
    // Checks the size of the screen and reajust the menu element to the proper location
    window.addEventListener("resize", () => {
      // For some reason, the only way to position the menu elements properly after a resize event is to set the "menuShown" state to the same value it has in a resize event listener (BRUH)
      setMenuShown(menuShown);

      if (window.innerWidth >= 1200) {
        topButt.current.style.left = "83%";
      } else {
        topButt.current.style.left = "60%";
      }

      if (menuShown && window.innerWidth < 1200) {
        topButt.current.style.left = "1%";
      } else {
        topButt.current.style.left = "54%";
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
  }, [topButt, menuShown]);

  // Context Destructuring
  const { lang, setLang } = useContext(PageLang);

  return (
    <>
      {/* Menu Button */}
      <div id="msgMe">
        <button onClick={() => setMenuShown(!menuShown)}>
          {menuShown ? (
            <IoMdClose className="menuIcon" />
          ) : (
            <CgMenuRightAlt className="menuIcon" />
          )}
        </button>
      </div>

      {/* Menu Container */}
      <div
        className="settingsMenu"
        style={{
          opacity: menuShown ? "1" : "0",
          pointerEvents: menuShown ? "" : "none",
        }}
      >
        {/* Language selection */}
        <div>
          <abbr title={lang === "English" ? "Português" : "English"}>
            <div className="langSelect" onClick={() => console.log()}>
              <div
                onClick={() => setLang(lang === "English" ? "Português" : "English")}
                className="langButt"
                ref={langButt}
              >
                {lang === "English" ? "Português" : "English"}
              </div>
            </div>
          </abbr>
        </div>

        {/* Redirect Button */}
        <div className="socials">
          <abbr title="MSG ME">
            <button>
              <a
                href="https://www.linkedin.com/in/lucsas"
                target="_blank"
                rel="noopener noreferrer"
              >
                {lang === "English" ? "Msg me" : "Chama aí"}
              </a>
            </button>
          </abbr>
        </div>
      </div>

      {/* Scroll top button */}
      <button
        className="backUp"
        ref={topButt}
        style={
          window.innerWidth >= 1200
            ? {
                opacity: scrolled ? "1" : "0",
                pointerEvents: scrolled ? "" : "none",
                left: menuShown ? "64%" : "83%",
              }
            : {
                opacity: scrolled ? "1" : "0",
                pointerEvents: scrolled ? "" : "none",
                left: menuShown ? "1%" : "54%",
              }
        }
        onClick={() => window.scrollTo(0, 0)}
      >
        <FaArrowUp />
      </button>
    </>
  );
}

export default MsgMe;
