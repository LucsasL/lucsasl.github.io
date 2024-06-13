// Hooks Import
import { useState, useEffect, useRef, createContext, useContext } from "react";

// Data Import
import { webSkillsSect } from "../../utils/data";
const { techStack } = webSkillsSect;
// const plusJakartaSans = "Plus Jakarta Sans";

function Skills() {
  const [infoIntersect, setInfoIntersect] = useState(false);
  const [activeTech, dispatch] = useContext([]);

  const TechSelected = createContext();
  const infoBox = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInfoIntersect(entry.isIntersecting);
        }
      });
    });

    observer.observe(infoBox.current);
  }, []);

  const changeTech = (tech) => {
    switch (tech) {
      case "HTML":
        dispatch({ type: "change_tech_HTML" });
        return;

      case "CSS":
        dispatch({ type: "change_tech_CSS" });
        return;

      case "JavaScript":
        dispatch({ type: "change_tech_JS" });
        return;

      case "TypeScript":
        dispatch({ type: "change_tech_TS" });
        return;

      case "React JS":
        dispatch({ type: "change_tech_React" });
        return;

      case "SASS":
        dispatch({ type: "change_tech_SASS" });
        return;

      case "GSAP":
        dispatch({ type: "change_tech_GSAP" });
        return;

      case "Jest":
        dispatch({ type: "change_tech_Jest" });
        return;

      case "Redux":
        dispatch({ type: "change_tech_Redux" });
        return;

      case "Python":
        dispatch({ type: "change_tech_Python" });
        return;

      case "Git":
        dispatch({ type: "change_tech_Git" });
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
    <TechSelected.Provider value={activeTech}>
        <div
          className="techStack"
          style={changeVisibility("-100%")}
          ref={infoBox}
        >
          {techStack.imgs.map((t, index) => {
            return (
              <abbr title={techStack.tech[index]} key={index}>
                <button
                  className="tech"
                  onClick={() => changeTech(techStack.tech[index])}
                >
                  <picture>
                    <img src={t} alt={techStack.tech[index]} />
                  </picture>
                </button>
              </abbr>
            );
          })}
        </div>
      </TechSelected.Provider>
    </>
  );
}

export default Skills;
