// React Imports
import React, { useContext, useEffect, useState } from 'react';

// Components Imports
import NavLinks from "./NavLinks";
import MusicButton from "./MusicButton";
import ThemeToggle from "./ThemeToggle";

// Icons
import { CgMenuRightAlt } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

// Context
import { PageLang } from "../../App";

function HeaderMenu() {
  // States
  const [menuShown, setMenuShown] = useState(false);

  useEffect(() => {
    // Checks the size of the screen and reajust the menu element to the proper location
    window.addEventListener("resize", () => {
      // For some reason, the only way to position the menu elements properly after a resize event is to set the "menuShown" state to the same value it has in a resize event listener (BRUH)
      setMenuShown(menuShown);

    });
  }, [menuShown]);

  // Context Destructuring
  const { lang } = useContext(PageLang);

  return (
    <>
      {/* Menu Button */}
      <div id="headerMenu">
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
          pointerEvents: menuShown ? "all" : "none",
        }}
      >
        <NavLinks />

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

        <div style={{ display: "flex" }}>
          <MusicButton />
          <ThemeToggle />
        </div>
      </div>
    </>
  );
}

export default HeaderMenu;