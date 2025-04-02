// Hooks Import
import { useRef, useContext, type Context } from "react";

// Context Import
import { BgTheme } from "@/sections/Header";
import { StateShape } from "@/typing";

function ThemeToggle() {
  const { darkTheme, setDarkTheme } = useContext<Context<StateShape>>(BgTheme);
  const themeInp = useRef<HTMLInputElement>(null);

  // Set the background theme
  function toggleTheme(e: HTMLInputElement): void {
    setDarkTheme(!darkTheme);
    const body = document.querySelector("body");
    themeInp.current!.defaultChecked = !e.value;
    body!.classList.toggle("light");
  };

  return (
    <>
      <div id="bgcolor">
        <abbr
          title={darkTheme ? "Change to Light Theme" : "Change to Dark Theme"}
        >
          <label htmlFor="bgButton">
            <input
              type="checkbox"
              id="bgButton"
              onChange={(e) => toggleTheme(e.currentTarget)}
              ref={themeInp}
              defaultChecked
            />
            <span>
              <i id="symbol"></i>
              <i id="thumb"></i>
            </span>
          </label>
        </abbr>
      </div>
    </>
  );
}

export default ThemeToggle;
