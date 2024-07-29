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

  useEffect(() => {
    // Checks the size of the screen and reajust the menu element to the proper location
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1200) {
        topButt.current.style.left = "83%";
      }
    })

    // It checks the position the user is in the site, if it's higher than 0, the "scrolled" state turns true, and the "Scroll up" button appears
    window.addEventListener("scroll", () => {
      const posY = window.scrollY;
  
      if (posY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, [topButt])

  // Context Destructuring
  const { setLang } = useContext(PageLang);

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
          <abbr title={"Translate to Portugues"}>
            <select name="Translate" id="changeLang">
              <option value="English" onSelect={() => setLang("English")}>
                English
              </option>
              <option value="Portuguese" onSelect={() => setLang("Portuguese")}>
                Portuguese
              </option>
            </select>
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
                MSG ME
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
                left: menuShown ? "66%" : "83%",
              }
            : {
                opacity: scrolled ? "1" : "0",
                pointerEvents: scrolled ? "" : "none",
                left: menuShown ? "5%" : "62%",
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
