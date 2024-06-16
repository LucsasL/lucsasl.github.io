// Hooks Import
import { useState, useEffect, useContext } from "react";

// Context Import
import { Data } from "../../sections/Skills";

// Data Import
import { webSkillsSect } from "../../utils/data";
const { techStack } = webSkillsSect;
// const plusJakartaSans = "Plus Jakarta Sans";

function Skills() {
  const [infoIntersect, setInfoIntersect] = useState(false);
  const [techButton, setTechButton] = useState(
    "5px 5px 15px 5px rgba(0, 0, 0, .5), -2px -2px 2px rgba(255, 255, 255, .3), 0px 15px 10px rgba(0, 0, 0, .5)"
  );
  const { activeTech, dispatch, skillSectBox } = useContext(Data);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInfoIntersect(entry.isIntersecting);
        } else {
          setInfoIntersect(entry.isIntersecting);
        }
      });
    });

    observer.observe(skillSectBox.current);
  }, [infoIntersect, skillSectBox]);

  const changeTech = (tech) => {
    setTechButton(
      "inset 5px 5px 15px 5px rgba(0, 0, 0, .5), inset -2px -2px 2px rgba(255, 255, 255, .3), inset 0px 15px 10px rgba(0, 0, 0, .5)"
    );
    dispatch({ type: `change_tech_${tech}` });
  };

  const changeVisibility = (side) => {
    return infoIntersect
      ? {
          opacity: 1,
          transition: "all .5s ease",
        }
      : {
          opacity: 1,
          transition: "all .5s ease",
          transform: `translateX(${side})`,
        };
  };

  return (
    <>
      <div
        className="techStack"
        style={changeVisibility("-150%")}
      >
        {techStack.imgs.map((t, index) => {
          return (
            <abbr title={techStack.tech[index]} key={index}>
              <button
                className="tech"
                onClick={() => changeTech(techStack.tech[index])}
                style={{ boxShadow: techButton }}
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

export default Skills;
