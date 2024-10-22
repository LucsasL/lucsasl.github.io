// Hooks Import
import { useContext, useEffect, useRef } from "react";

// Data Import
import { webNavOptions, webNavOptionsLink } from "../../utils/data";
import { webNavOptionsPort } from "../../utils/dataPortuguese";
import { PageLang } from "../../App";

function NavLinks() {
  // Context
  const { lang } = useContext(PageLang);

  // Refs
  const headerNav = useRef();

  useEffect(() => {
    console.log("Language Changed");
  }, [headerNav]);
  
  return (
    <>
      <nav ref={headerNav}>
        {/* List of options in the nav */}
        <ul>
          {webNavOptions.map((i, index) => {
            return (
              <li key={index}>
                <abbr title={i}>
                  <button>
                    <a href={`./#${webNavOptionsLink[index]}`}>
                      {lang === "English" ? i : webNavOptionsPort[index]}
                    </a>
                  </button>
                </abbr>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default NavLinks;
