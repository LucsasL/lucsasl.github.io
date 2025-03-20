// Hooks Import
import { useEffect, useRef } from "react";

// Data Import
import { webNavOptions, webNavOptionsLink } from "../../(utils)/data";

function NavLinks() {
  // Refs
  const headerNav = useRef("");

  return (
    <>
      <nav ref={headerNav}>
        {/* List of options in the nav */}
        <ul>
          {webNavOptions.map((i, index: number) => {
            return (
              <li key={index}>
                <abbr title={i}>
                  <button>
                    <a href={`./#${webNavOptionsLink[index]}`}>
                      {i}
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
