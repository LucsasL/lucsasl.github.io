// Hooks Import
import { useState, useReducer, useEffect, useRef, createContext, useContext } from "react";

// Components Import
import TechController from "../components/SkillSectComps/TechController.jsx";
import Laptop from "../components/SkillSectComps/Laptop.jsx";
import Features from "../components/SkillSectComps/features.jsx";

// Data Import
import { PageLang } from "../App.js";
import { webSkillsSect } from "../utils/data";
import { webSkillsSectPort } from "../utils/dataPortuguese";
import { reducer } from "../utils/pageDemo.js";
import { reducerPort } from "../utils/pageDemoPortuguese.js";
import { techObj } from "../utils/pageDemo.js";
import { techObjPort } from "../utils/pageDemoPortuguese.js";

// Data Desestructuring
const { sectTitle, techStack } = webSkillsSect;
const { sectTitlePort, techStackPort } = webSkillsSectPort;
const { techFeature } = techStack;

export const Data = createContext(techObj);

function Skills() {
  // States declaration
  const [infoIntersect, setInfoIntersect] = useState(false);
  const [menuAppear, setMenuAppear] = useState(false);

  // Refs
  const skillSectBox = useRef();
  const menuDiv = useRef();

  // TechController States and Ref
  const [activeTech, dispatch] = useReducer(reducer, techObj);
  const [activeTechPort, dispatchPort] = useReducer(reducerPort, techObjPort);

  // Features States
  const [featureOpacity, setFeatureOpacity] = useState([0, 0, 0, 0, 0, 0, 0]);

  // Use Context
  const { lang } = useContext(PageLang);

  // It records the elemenets that will re-render as the user interact
  useEffect(() => {
    // This creates an instance of the intersection observer object, used to check if the screen of the user is intersecting with some element. In this case, it checks if it's intersecting with the menuDiv, and if it does it updates the menuAppear state, making it appear, otherwise, not.
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInfoIntersect(entry.isIntersecting);
        }
      });
    });

    // Observeing element to play animation
    observer.observe(skillSectBox.current);
    observer.observe(menuDiv.current);
  }, []);

  // It changes the visibility of the tech controller
  const changeVisibility = (side, state, time = 0.5) => {
    return state
      ? {
          opacity: 1,
          transition: `all ${time}s ease`,
        }
      : {
          opacity: 0,
          transition: `all ${time}s ease`,
          transform: `translateX(${side})`,
        };
  };

  // Returns the full skill section, including the tech controller and the laptop that shows the tech stack
  return (
    <>
      <section id="skills">
        <div>
          <div
            className="blockquote"
            style={changeVisibility(0, infoIntersect)}
          >
            <h1 className="big block-text">{lang === "English" ? sectTitle : sectTitlePort}</h1>
          </div>

          <div className="langsCont" ref={skillSectBox}>
            <Data.Provider
              value={{
                activeTech,
                activeTechPort,
                techStackPort,
                dispatch,
                dispatchPort,
                infoIntersect,
                skillSectBox,
                changeVisibility,
                menuDiv,
                menuAppear,
                setMenuAppear,
                techFeature,
                featureOpacity,
                setFeatureOpacity,
              }}
            >
              <TechController />
              <Laptop />
              <Features />
            </Data.Provider>
          </div>
          <div className="intersectArea" ref={menuDiv}></div>
        </div>
      </section>
    </>
  );
}

export default Skills;
