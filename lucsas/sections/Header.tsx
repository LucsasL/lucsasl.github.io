"use client";

// Hooks Import
import React, {
  useState,
  useEffect,
  createContext,
  useRef,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
  type RefObject,
} from "react";

// Components Import
import HeaderLogo from "@/components/HeaderComps/HeaderLogo";
import HeaderMenu from "@/components/HeaderComps/headerMenu";

// Type Declaration
export interface StateShape {
  headerBg: string;
  setHeaderBg: Dispatch<SetStateAction<string>>;
  darkTheme: boolean;
  setDarkTheme: Dispatch<SetStateAction<boolean>>;
  headerCont: RefObject<ReactNode | HTMLDivElement>;
  headerColor: string;
  headerBorder: string;
  headerBlur: string;
}

// BG Theme Import
export const BgTheme = createContext<string | StateShape>("");

const Header = () => {
  // States
  const [darkTheme, setDarkTheme] = useState<boolean>(true);
  const [headerBg, setHeaderBg] = useState<string>("#00000000");
  const [headerBorder, setHeaderBorder] = useState<string>("none");
  const [headerBlur, setHeaderBlur] = useState<string>("");
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
  ]);

  return (
    <>
      <header>
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
