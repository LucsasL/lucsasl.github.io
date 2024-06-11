// Hooks Import
import { useState, useReducer, useEffect, useRef } from "react";

// Data Import
import { webSkillsSect } from "../utils/data";
const { sectTitle, sectImg, techStack } = webSkillsSect;
const { techDesc } = techStack;

function reducer(state) {
  switch (state.type) {
    case "change_tech_HTML":
      state.title = "BRUH";
      state.text = "It's all working";
      return;

    case "change_tech_CSS":
      state.title = "BRUH";
      state.text = "It's all working";
      return;

    case "change_tech_JS":
      state.title = "BRUH";
      state.text = "It's all working";
      return;

    case "change_tech_React":
      state.title = "BRUH";
      state.text = "It's all working";
      return;

    case "change_tech_GSAP":
      state.title = "BRUH";
      state.text = "It's all working";
      return;

    case "change_tech_Redux":
      state.title = "BRUH";
      state.text = "It's all working";
      return;

    case "change_tech_Git":
      state = {
        ...state,
        title: techStack.tech[6],
        text: techDesc[6],
      };
      return;

    default:
      return;
  }
}

function TechController() {
  const [infoIntersect, setInfoIntersect] = useState(false);
  const [activeTech, dispatch] = useReducer(reducer, {
    bg: "white",
    color: "black",
    font: "serif",
    aDecoration: "underline",
    title: "HTML",
    text: "The technology that gives meaning to websites through tags, building the document that you see in the browser.",
  });

  const changeTech = (tech) => {
    switch (tech) {
      case "HTML":
        dispatch({ ...activeTech, type: "change_tech_HTML" });
        return;

      case "CSS":
        dispatch({ ...activeTech, type: "change_tech_CSS" });
        return;

      case "JavaScript":
        dispatch({ ...activeTech, type: "change_tech_JS" });
        return;

      case "React JS":
        dispatch({ ...activeTech, type: "change_tech_React" });
        return;

      case "GSAP":
        dispatch({ ...activeTech, type: "change_tech_GSAP" });
        return;

      case "Redux":
        dispatch({ ...activeTech, type: "change_tech_Redux" });
        return;

      case "Git":
        dispatch({ ...activeTech, type: "change_tech_Git" });
        return;

      default:
        return;
    }
  };

  const changeVisibility = (side) => {
    return infoIntersect
      ? {
          opacity: 1,
          transition: "all 1.5s ease",
        }
      : {
          opacity: 0,
          transition: "all 1.5s ease",
          transform: `translateX(${side})`,
        };
  };

  return (
    <>
      <div className="techStack" style={changeVisibility("-100%")}>
        {techStack.imgs.map((t, index) => {
          return (
            <abbr title={techStack.tech[index]} key={index}>
              <button
                className="tech"
                onClick={() => {
                  changeTech(techStack.tech[index]);
                }}
              >
                <picture>
                  <img src={t} alt={techStack.tech[index]} />
                </picture>
              </button>
            </abbr>
          );
        })}
      </div>
    </>
  );
}

export default TechController;
