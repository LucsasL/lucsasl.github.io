// Hooks Import
import { useRef, useContext } from "react";

// Context Import
import { BgTheme } from "../../sections/Header";

function ThemeToggle() {
  const { darkTheme, setDarkTheme } = useContext(BgTheme);
  const themeInp = useRef();

  const toggleTheme = (e) => {
    setDarkTheme(!darkTheme);
    const body = document.querySelector("body");
    themeInp.current.defaultChecked = !e.target.value;
    body.classList.toggle("light");
  }

  return (
    <>
      <div id="bgcolor">
        <abbr title={darkTheme ? "Change to Light Theme" : "Change to Dark Theme"}>
          <label htmlFor="bgButton">
            <input
              type="checkbox"
              id="bgButton"
              onChange={(e) => toggleTheme(e)}
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