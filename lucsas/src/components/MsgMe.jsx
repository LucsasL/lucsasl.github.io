// Hooks
import { useContext, useState } from "react";

// Icons
import { CgMenuRightAlt } from "react-icons/cg";

// Context
import { PageLang } from "../App";

function MsgMe() {
  const [menuShown, setMenuShown] = useState(false);

  const { setLang } = useContext(PageLang);

  return (
    <>
      <div id="msgMe">
        <button onClick={() => setMenuShown(!menuShown)}>
          <CgMenuRightAlt className="menuIcon" />
        </button>
      </div>

      <div
        className="settingsMenu"
        style={{
          opacity: menuShown ? "1" : "0",
          pointerEvents: menuShown ? "" : "none",
        }}
      >
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
    </>
  );
}

export default MsgMe;
