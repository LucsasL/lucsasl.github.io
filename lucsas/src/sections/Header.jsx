// Hooks Import
import { useState, useEffect, createContext, useRef } from "react";

// Components Import
import HeaderLogo from "../components/HeaderComps/HeaderLogo";
import NavLinks from "../components/HeaderComps/NavLinks";
import MusicButton from "../components/HeaderComps/MusicButton";
import ThemeToggle from "../components/HeaderComps/ThemeToggle";

export const BgTheme = createContext();

const Header = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  const [headerBg, setHeaderBg] = useState("#00000000");
  const [headerBlur, setHeaderBlur] = useState("");
  const headerCont = useRef();
  const headerColor = darkTheme
    ? "rgba(0, 0, 0, .5)"
    : "rgba(255, 255, 255, .5)";

  useEffect(() => {
    if (window.scrollY > 0) {
      setHeaderBg(headerColor);
    } else {
      setHeaderBg("#0000");
    }

    window.addEventListener("scroll", () => {
      const scrollPos = window.scrollY;
      if (scrollPos > 0) {
        setHeaderBg(headerColor);
        setHeaderBlur("blur(6px)");
      } else {
        setHeaderBg("rgba(0, 0, 0, 0)");
        setHeaderBlur("blur(0px)");
      }
    });
  }, [darkTheme, headerBg, headerCont, headerColor]);

  return (
    <>
      <header>
        <div
          style={{ background: headerBg, backdropFilter: headerBlur }}
          ref={headerCont}
        >
          <HeaderLogo />

          <div id="mainHeader">
            <menu>
              <BgTheme.Provider
                value={{ headerBg, setHeaderBg, darkTheme, setDarkTheme }}
              >
                <NavLinks />
                <MusicButton />
                <ThemeToggle />
              </BgTheme.Provider>
            </menu>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
