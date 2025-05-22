"use client";

// Type Imports
import { StateShape } from "@/typing";

// Hooks Import
import React, {
  useState,
  useEffect,
  createContext,
  useRef,
  type ReactNode,
} from "react";

// Components Import
import HeaderLogo from "@/components/HeaderComps/HeaderLogo";
import HeaderMenu from "@/components/HeaderComps/headerMenu";

// BG Theme Import
export const BgTheme = createContext<StateShape | undefined>(undefined);

const Header = () => {
  // States
  const [darkTheme, setDarkTheme] = useState<boolean>(true);
  const [headerBg, setHeaderBg] = useState<string>("#00000000");
  const [headerBorder, setHeaderBorder] = useState<string>("none");
  const [headerBlur, setHeaderBlur] = useState<string>("-15%");
  const [headerTop, setHeaderTop] = useState<string>("");
  const [menuShown, setMenuShown] = useState<boolean>(false);
  const headerColor: string = darkTheme
    ? "rgba(0, 0, 0, .5)"
    : "rgba(255, 255, 255, .5)";

  // Refs
  const headerCont = useRef<ReactNode | null>(null);

  useEffect(() => {
    
    // It checks if the user has scrolled, if the user is at position 0, the header will have a transparent background, otherwise, the header will change to a glass effect background, with blur and black with low opacity
    if (window.scrollY > 0) {
      setHeaderBg(headerColor);
    } else {
      setHeaderBg("#0000");
    }
    
    // Scroll Listener
    window.addEventListener("scroll", () => {
      const scrollPos: number = window.scrollY;

      // Change the header bg
      if (scrollPos > 0) {
        setHeaderBg(headerColor);
        setHeaderBorder(
          darkTheme
          ? "3px solid rgba(0, 0, 0, 0.35)"
          : "3px solid rgba(255, 255, 255, .15)"
        );
        setHeaderBlur("blur(6px)");
      } else {
        setHeaderBg("transparent");
        setHeaderBorder("3px solid transparent");
        setHeaderBlur("blur(0px)");
      }
      
      // Checks the scrollY position and changes
      // position of the header if its a small
      // media query
      if (window.scrollY > 0 && window.innerWidth <= 488) {
        setHeaderTop("3%");
      } 
      
      if (window.scrollY === 0 && window.innerWidth <= 488 && !menuShown) {
        setHeaderTop("-15%");
      }
    });
  }, [
    darkTheme,
    headerBg,
    setHeaderBg,
    headerColor,
    headerBorder,
    headerCont,
    setHeaderBorder,
    headerBlur,
    setHeaderBlur,
    headerTop,
    setHeaderTop,
    menuShown,
  ]);

  return (
    <>
      <header style={{ top: headerTop }}>
        <div>
          <BgTheme.Provider
            value={{
              headerBg,
              setHeaderBg,
              darkTheme,
              setDarkTheme,
              headerCont,
              headerColor,
              headerBorder,
              headerBlur,
              menuShown,
              setMenuShown,
            }}
          >
            <HeaderLogo />

            <div id="mainHeader">
              <menu>
                <HeaderMenu />
              </menu>
            </div>
          </BgTheme.Provider>
        </div>
      </header>
    </>
  );
};

export default Header;
