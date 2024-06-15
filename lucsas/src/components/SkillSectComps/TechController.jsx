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
                style={{ boxShadow: activeTech.basicSettings.boxShadow }}
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
