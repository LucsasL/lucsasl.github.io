// Hooks Import
import { useRef, useEffect, useContext } from "react";

// Context Import
import { Data } from "../../sections/Skills";

// Data Import
import { webSkillsSect } from "../../utils/data";
const { techStack, } = webSkillsSect;
// const plusJakartaSans = "Plus Jakarta Sans";

function Skills() {
  const { dispatch, menuDiv, menuAppear, setMenuAppear, changeVisibility } = useContext(Data);
  const buttons = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setMenuAppear(entry.isIntersecting);
        } else {
          setMenuAppear(entry.isIntersecting);
        }
      });
    });

    observer.observe(menuDiv.current);

    buttons.current = buttons.current.slice(0, techStack.tech.length);
  }, [menuDiv, setMenuAppear, buttons]);

  const changeTech = (tech, e) => {
    // buttons.current[]
    e.target.classList.add("active");
    dispatch({ type: `change_tech_${tech}` });
  };

  return (
    <>
      <div className="techStack" style={changeVisibility("-150%", menuAppear)}>
        {techStack.imgs.map((t, index) => {
          return (
            <abbr
              title={techStack.tech[index]}
              key={index}
              ref={(el) => (buttons.current[index] = el)}
            >
              <button
                className="tech"
                onClick={(e) => changeTech(techStack.tech[index], e)}
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
