"use client";

// Hooks Import
import React, { useState, useReducer, useEffect, useRef, createContext, SetStateAction } from "react";

// Components Import
import TechController from "@/components/SkillSectComps/TechController";
import Laptop from "@/components/SkillSectComps/Laptop";
import Features from "@/components/SkillSectComps/features";

// Data Import
import { webSkillsSect } from "../utils/data";
import { reducer } from "../utils/pageDemo";
import { techObj } from "../utils/pageDemo";
import { TechActiveProps, type TechShape } from "@/typing";

// Data Destructuring
const { techStack } = webSkillsSect;
const { techFeature } = techStack;

export const Data = createContext<TechShape>(techObj);

function Skills() {
  // States declaration
  const [infoIntersect, setInfoIntersect] = useState<boolean>(false);
  const [menuAppear, setMenuAppear] = useState<boolean>(false);

  // Refs
  const skillSectBox = useRef<HTMLDivElement>(null);
  const menuDiv = useRef<HTMLDivElement>(null);

  // TechController States and Ref
  const [activeTech, dispatch] = useReducer<TechActiveProps, SetStateAction<TechActiveProps>>(reducer, techObj);

  // Features States
  const [featureOpacity, setFeatureOpacity] = useState<number[]>([0, 0, 0, 0, 0, 0, 0]);

  // It records the elements that will re-render as the user interact
  useEffect(() => {
    // This creates an instance of the intersection observer object, used to check if the screen of the user is intersecting with some element. In this case, it checks if it's intersecting with the menuDiv, and if it does it updates the menuAppear state, making it appear, otherwise, not.
    const skillBoxElement = skillSectBox.current as Element | null;
    const menuDivElement = menuDiv.current as Element | null;
    if (!skillBoxElement || !menuDivElement) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInfoIntersect(entry.isIntersecting);
        }
      });
    });

    // Observing element to play animation
    observer.observe(skillBoxElement);
    observer.observe(menuDivElement);
  }, []);

  // It changes the visibility of the tech controller
  const changeVisibility = (
    side: string | number,
    state: boolean,
    time: number = 0.5
  ) => {
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
            <h1 className="big block-text">
              Tech stacks that I&apos;ve worked with:
            </h1>
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
