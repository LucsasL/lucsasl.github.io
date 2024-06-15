// Hooks Import
import { useContext } from "react";

// Images Import
import notebook from "../../img/google-ads-design.svg";

// Data Import
import { Data } from "../../sections/Skills";

function Laptop() {
  // Context
  const { activeTech } = useContext(Data);

  return (
    <>
      <div className="laptop">
        <picture>
          <figure>
            <img src={notebook} alt="Website" />
            <figcaption>Website</figcaption>
          </figure>
        </picture>
        <div className="laptopContent" style={{}}>
          <h1>{`This is ${activeTech.content.title}`}</h1>
          <p>{activeTech.content.text}</p>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more about {activeTech.content.title}
          </a>
        </div>
      </div>
    </>
  );
}

export default Laptop;