// General Imports
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

// Components Imports
import NavLinks from "./NavLinks";
import MusicButton from "./MusicButton";
import ThemeToggle from "./ThemeToggle";

// Icons
import { CgMenuRightAlt } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

// Social Media Image Import
import githubLogo from "@/public/img/github-social.webp";
import stackoverflowLogo from "@/public/img/stackoverflow-social.webp";
import linkedinLogo from "@/public/img/linkedin-social.webp";

function HeaderMenu() {
  // States
  const [menuShown, setMenuShown] = useState<boolean>(false);

  useEffect(() => {
    // Checks the size of the screen and readjust the menu element to the proper location
    window.addEventListener("resize", () => {
      // For some reason, the only way to position the menu elements properly after a resize event is to set the "menuShown" state to the same value it has in a resize event listener (BRUH)
      setMenuShown(menuShown);

    });
  }, [menuShown]);

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
                href="https://github.com/lucsasl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={githubLogo} alt="Lucas Lira Github" />
              </a>
            </button>
            <button>
              <a
                href="https://www.linkedin.com/in/lucsas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={stackoverflowLogo} alt="Lucas Lira StackOverflow" />
              </a>
            </button>
            <button>
              <a
                href="https://www.linkedin.com/in/lucsas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={linkedinLogo} alt="Lucas Lira Linkedin" />
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