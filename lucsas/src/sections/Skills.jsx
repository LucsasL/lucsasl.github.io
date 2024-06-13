// Hooks Import
import { useState, useEffect, useRef } from "react";

// Components Import
import TechController from "../components/SkillSectComps/TechController.jsx";
import Laptop from "../components/SkillSectComps/Laptop.jsx";

// Data Import
import { webSkillsSect } from "../utils/data";
const { sectTitle } = webSkillsSect;

function Skills() {
  const [infoIntersect, setInfoIntersect] = useState(false);
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
      <section id="skills">
        <div>
          <div className="blockquote" ref={infoBox} style={changeVisibility(0)}>
            <h1 className="big block-text">{sectTitle}</h1>
          </div>

          <div className="langsCont">
            <TechController />
            <Laptop />
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
