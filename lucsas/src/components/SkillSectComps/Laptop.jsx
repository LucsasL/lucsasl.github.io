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
        <div className="laptopContent" style={{ 
          background: activeTech.basicSettings.bg,
          color: activeTech.basicSettings.color,
          font: activeTech.basicSettings.font,
        }}>
          <h1
            style={{ 
              padding: activeTech.header.headerPadding,
              margin: activeTech.header.headerMargin,
              boxShadow: activeTech.header.headerBoxShadow
          }}>
            {`This is ${activeTech.content.title}`}
          </h1>
          <p style={{
            fontSize: activeTech.text.textSize,
            lineHeight: activeTech.text.textLine,
          }}>
            {activeTech.content.text}
          </p>
          <a
            href={activeTech.content.textLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: activeTech.links.aDisplay,
              textDecoration: activeTech.links.aDecoration,
              background: activeTech.links.aBg,
              color: activeTech.links.aColor,
              padding: activeTech.links.aPadding,
              borderRadius: activeTech.links.aBorderRadius,
          }}>
            Learn more about {activeTech.content.title}
          </a>
        </div>
      </div>
    </>
  );
}

export default Laptop;