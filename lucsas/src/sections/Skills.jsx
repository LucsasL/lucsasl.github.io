// Hooks Import
import { useState, useReducer, useEffect, useRef, createContext } from "react";

// Components Import
import TechController from "../components/SkillSectComps/TechController.jsx";
import Laptop from "../components/SkillSectComps/Laptop.jsx";

// Data Import
import { webSkillsSect } from "../utils/data";
import { reducer } from "../utils/pageDemo.js";
import { techObj } from "../utils/pageDemo.js";
const { sectTitle } = webSkillsSect;

export const Data = createContext(techObj);

function Skills() {
  const [infoIntersect, setInfoIntersect] = useState(false);
  const [menuAppear, setMenuAppear] = useState(false);
  const skillSectBox = useRef();
  const menuDiv = useRef();

  // TechController States and Ref
  const [activeTech, dispatch] = useReducer(reducer, techObj);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInfoIntersect(entry.isIntersecting);
        }
      });
    });

    observer.observe(skillSectBox.current);
    observer.observe(menuDiv.current);
  }, []);

  const changeVisibility = (side, state, time = .5) => {
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

  return (
    <>
      <section id="skills">
        <div>
          <div
            className="blockquote"
            style={changeVisibility(0, infoIntersect)}
          >
            <h1 className="big block-text">{sectTitle}</h1>
          </div>

          <div className="langsCont" ref={skillSectBox}>
            <Data.Provider
              value={{
                activeTech,
                dispatch,
                infoIntersect,
                skillSectBox,
                changeVisibility,
                menuDiv,
                menuAppear,
                setMenuAppear,
              }}
            >
              <TechController />
              <Laptop />
            </Data.Provider>
          </div>
          <div className="intersectArea" ref={menuDiv}></div>
        </div>
      </section>
    </>
  );
}

export default Skills;
