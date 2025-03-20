// React Imports
import React, { useContext, useRef } from 'react';

// Context Import
import { PageLang } from '../../App';

function LangButton() {
  // Context variables
  const { lang, setLang } = useContext(PageLang);

  // Refs
  const langButt = useRef();

  return (
    <>
      {/* Language selection */}
      <div>
        <abbr title={lang === "English" ? "Português" : "English"}>
          <div
            onClick={() =>
              setLang(lang === "English" ? "Português" : "English")
            }
            className="langButt"
            ref={langButt}
          >
            {lang === "English" ? "Português" : "English"}
          </div>
        </abbr>
      </div>
    </>
  );
}

export default LangButton;