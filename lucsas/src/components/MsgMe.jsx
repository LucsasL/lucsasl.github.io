// Hooks
import { useContext, useState } from "react";

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

  window.addEventListener("scroll", (e) => {
    const posY = window.scrollY;

    if (posY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const pageToTop = () => {
    window.scrollTo(0, 0);
  }

  // Context
  const { setLang } = useContext(PageLang);

  return (
    <>
      <div id="msgMe">
        <button onClick={() => setMenuShown(!menuShown)}>
          {menuShown ? (
            <IoMdClose className="menuIcon" />
          ) : (
            <CgMenuRightAlt className="menuIcon" />
          )}
        </button>
      </div>

      <div
        className="settingsMenu"
        style={{
          opacity: menuShown ? "1" : "0",
          pointerEvents: menuShown ? "" : "none",
        }}
      >
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

      <button
        className="backUp"
        style={{
          opacity: scrolled ? "1" : "0",
          pointerEvents: scrolled ? "" : "none",
          left: menuShown ? "5%" : "62%",
        }}
        onClick={() => pageToTop()}
      >
        <FaArrowUp />
      </button>
    </>
  );
}

export default MsgMe;
