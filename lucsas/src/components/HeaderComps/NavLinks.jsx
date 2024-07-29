// Data Import
import { webNavOptions, webNavOptionsLink } from "../../utils/data";

function NavLinks() {
  return (
    <>
      <nav>
        {/* List of options in the nav */}
        <ul>
          {webNavOptions.map((i, index) => {
            return (
              <li key={index}>
                <abbr title={i}>
                  <button>
                    <a href={`./#${webNavOptionsLink[index]}`}>{i}</a>
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
