// Hooks Import
import { useRef, useEffect, useContext } from "react";

// Context Import
import { Data } from "../../sections/Skills";

// Data Import
import { PageLang } from "../../App";
import { webSkillsSect } from "../../(utils)/data";
const { techStack } = webSkillsSect;

function Skills() {
  // Takes the Context Value
  const {
    dispatch,
    dispatchPort,
    menuDiv,
    menuAppear,
    setMenuAppear,
    changeVisibility,
    setFeatureOpacity,
  } = useContext(Data);

  // Refs
  const buttons = useRef([]);
  const buttonsBlock = useRef([]);

  // Use Contexts
  const { lang } = useContext(PageLang);

  // It records the elemenets that will re-render as the user interact
  useEffect(() => {
    // This creates an instance of the intersection observer object, used to check if the screen of the user is intersecting with some element. In this case, it checks if it's intersecting with the menuDiv, and if it does it updates the menuAppear state, making it appear, otherwise, not.
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setMenuAppear(entry.isIntersecting);
        } else {
          setMenuAppear(entry.isIntersecting);
        }
      });
    });

    // Observeing element to play animation
    observer.observe(menuDiv.current);

    buttons.current = buttons.current.slice(0, techStack.tech.length);
  }, [menuDiv, setMenuAppear, buttons]);

  // A function that detects the click of a button in the tech menu
  const changeTech = (tech, e, index) => {
    // Takes the reference of the exact button, and removes the "active" CSS class, that makes the button look pressed
    buttonsBlock.current.forEach((el) => el.classList.remove("active"));

    console.log(e.target);
    // Adds the CSS class "active" in the pressed button
    e.target.classList.add("active");

    // It checks the button that the user pressed, and change the opacity of the features, depending on the button the user clicks
    const featureArray = [
      [1, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 0, 0, 0, 0],
      [1, 1, 1, 1, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1],
    ];

    if (index < 3) {
      setFeatureOpacity([0, 0, 0, 0, 0, 0, 0]);
    } else {
      setFeatureOpacity(featureArray[index - 3]);
    }

    // Tells when a tech button was pressed and dispatch an object with type of the tech in target
    if (lang !== "English") {
      dispatchPort({ type: `change_tech_${tech}` });
    }

    dispatch({ type: `change_tech_${tech}` });
  };

  // Returns the tech menu
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
                className={`tech ${index === 0 ? "active" : ""}`}
                onClick={(e) => changeTech(techStack.tech[index], e, index)}
                ref={(el) => (buttonsBlock.current[index] = el)}
              >
                <picture style={{ boxShadow: "none", pointerEvents: "none" }}>
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
