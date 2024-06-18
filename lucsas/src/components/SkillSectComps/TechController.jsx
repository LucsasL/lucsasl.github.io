// Hooks Import
import { useRef, useEffect, useContext } from "react";

// Context Import
import { Data } from "../../sections/Skills";

// Data Import
import { webSkillsSect } from "../../utils/data";
const { techStack } = webSkillsSect;

function Skills() {
  const {
    dispatch,
    menuDiv,
    menuAppear,
    setMenuAppear,
    changeVisibility,
    setFeatureOpacity,
  } = useContext(Data);
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

  const changeTech = (tech, e, index) => {
    // buttons.current[]
    console.log(e.target);
    e.target.classList.add("active");

    switch (index) {
      case 3:
        setFeatureOpacity([1, 0, 0, 0, 0, 0, 0]);
        break;

      case 4:
        setFeatureOpacity([1, 1, 0, 0, 0, 0, 0]);
        break;

      case 5:
        setFeatureOpacity([1, 1, 1, 0, 0, 0, 0]);
        break;

      case 6:
        setFeatureOpacity([1, 1, 1, 1, 0, 0, 0]);
        break;

      case 7:
        setFeatureOpacity([1, 1, 1, 1, 0, 0, 0]);
        break;

      case 8 :
        setFeatureOpacity([1, 1, 1, 1, 1, 0, 0]);
        break;

      case 9:
        setFeatureOpacity([1, 1, 1, 1, 1, 1, 0]);
        break;

      case 10:
        setFeatureOpacity([1, 1, 1, 1, 1, 1, 1]);
        break;
        
        default:
        setFeatureOpacity([0, 0, 0, 0, 0, 0, 0]);
        break;
    }

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
                onClick={(e) => changeTech(techStack.tech[index], e, index)}
              >
                <picture style={{ boxShadow: "none" }}>
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
