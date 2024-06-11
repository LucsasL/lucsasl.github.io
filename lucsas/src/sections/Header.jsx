// Hooks Import
import { useState } from "react";

// Components Import
import HeaderLogo from "../components/HeaderLogo";
import NavLinks from "../components/NavLinks";
import MusicButton from "../components/MusicButton";
import ThemeToggle from "../components/ThemeToggle";

const Header = () => {
  const [headerBg, setHeaderBg] = useState("#00000000");
  const [headerBlur, setHeaderBlur] = useState("");

  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY;

    if (scrollPos > 0) {
      setHeaderBg("rgba(0, 0, 0, .5)");
      setHeaderBlur("blur(6px)");
      } else {
        setHeaderBg("rgba(0, 0, 0, 0)");
        setHeaderBlur("blur(0px)");
    }
  })

  return (
    <>
      <header>
        <div style={{ background: headerBg, backdropFilter: headerBlur }}>
          <HeaderLogo />

          <div id="mainHeader">
            <menu>
              <NavLinks />
              <MusicButton />
              <ThemeToggle />
            </menu>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;