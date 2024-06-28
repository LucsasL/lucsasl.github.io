import { useState } from "react";

import { CgMenuRightAlt } from "react-icons/cg";

function MsgMe() {
  const [menuShown, setMenuShown] = useState(false);

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
            <option value="English">English</option>
            <option value="Portuguese">Portuguese</option>
          </select>
        </abbr>
      </div>
    </>
  );
}

export default MsgMe;
