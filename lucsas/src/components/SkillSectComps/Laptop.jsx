// Hooks Import
import { useState, useReducer } from "react";

// Images Import
import notebook from "../img/google-ads-design.svg";

// Data Import
import { webSkillsSect } from "../utils/data";
const { sectTitle, sectImg, techStack } = webSkillsSect;
const { techDesc } = techStack;

function reducer() {
  return;
}

function Laptop() {
  const [infoIntersect, setInfoIntersect] = useState(false);
  const [activeTech, dispatch] = useReducer(reducer, {
    bg: "white",
    color: "black",
    font: "serif",
    aDecoration: "underline",
    title: "HTML",
    text: "The technology that gives meaning to websites through tags, building the document that you see in the browser.",
  });

  const changeVisibilityLaptop = (side) => {
    return infoIntersect
      ? {
          opacity: 1,
          transition: "all 1.5s ease",
        }
      : {
          opacity: 1,
          transition: "all 1.5s ease",
          transform: `translateX(${side})`,
        };
  };

  return (
    <>
      <div className="laptop" style={changeVisibilityLaptop("150%")}>
        <picture>
          <figure>
            <img src={notebook} alt="Website" />
            <figcaption>Website</figcaption>
          </figure>
        </picture>

        <div className="laptopContent" style={{}}>
          <h1>{`This is ${activeTech.title}`}</h1>

          <p>{activeTech.text}</p>

          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more about {activeTech.title}
          </a>
        </div>
      </div>
    </>
  );
}

export default Laptop;