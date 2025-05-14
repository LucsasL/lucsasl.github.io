// Hooks Import
import React, {
  useRef,
  useEffect,
  useContext,
  type RefObject,
  type MouseEvent,
} from "react";
import Image from "next/image";

// Context Import
import { Data } from "@/sections/Skills";

// Data Import
import { webSkillsSect } from "../../utils/data";
import { StaticImageData } from "next/image";
const { techStack } = webSkillsSect;

function Skills() {
  // Takes the Context Value
  const {
    dispatch,
    menuDiv,
    menuAppear,
    setMenuAppear,
    changeVisibility,
    setFeatureOpacity,
  } = useContext(Data);

  // Refs
  const buttons = useRef<HTMLButtonElement[]>([]);
  const buttonsBlock = useRef<HTMLButtonElement[]>([]);

  // It records the elements that will re-render as the user interact
  useEffect(() => {
    // This creates an instance of the intersection observer object, used to check if the screen of the user is intersecting with some element. In this case, it checks if it's intersecting with the menuDiv, and if it does it updates the menuAppear state, making it appear, otherwise, not.
    const element = menuDiv.current as Element | null;

    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setMenuAppear(entry.isIntersecting);
        } else {
          setMenuAppear(entry.isIntersecting);
        }
      });
    });

    // Observing element to play animation
    observer.observe(element);

    buttons.current = buttons.current.slice(0, techStack.tech.length);
  }, [menuDiv, setMenuAppear, buttons]);

  // A function that detects the click of a button in the tech menu
  const changeTech = (
    tech: string,
    e: MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    // Takes the reference of the exact button, and removes the "active" CSS class, that makes the button look pressed
    buttonsBlock.current.forEach((el: HTMLButtonElement) =>
      el.classList.remove("active")
    );

    if (!e.target) return;

    const target = e.target as HTMLButtonElement;

    console.log(target);
    // Adds the CSS class "active" in the pressed button
    target.classList.add("active");

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
    dispatch({ type: `change_tech_${tech}` });
  };

  function setRef(
    elArray: RefObject<HTMLButtonElement[]>,
    el: HTMLElement | null,
    index: number
  ) {
    if (el instanceof HTMLButtonElement) {
      elArray.current[index] = el;
    }
  }

  // Returns the tech menu
  return (
    <>
      <div
        className="techStack"
        style={changeVisibility("-150%", menuAppear, 0.5)}
      >
        {techStack.imgs.map((t: StaticImageData, index: number) => {
          return (
            <abbr
              title={techStack.tech[index]}
              key={index}
              ref={(el: HTMLElement | null) => setRef(buttons, el, index)}
            >
              <button
                className={`tech ${index === 0 ? "active" : ""}`}
                onClick={(e) => changeTech(techStack.tech[index], e, index)}
                ref={(el: HTMLButtonElement | null) =>
                  setRef(buttonsBlock, el, index)
                }
              >
                <picture style={{ boxShadow: "none", pointerEvents: "none" }}>
                  <Image src={t} alt={techStack.tech[index]} />
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
