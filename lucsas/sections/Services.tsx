"use client";

// Hooks Import
import React, { useState, useRef, useEffect, createContext, type RefObject } from "react";
import Image from "next/image";

// Data Import
import { webServiceSect } from "../utils/data";

// Data Destructuring
const { servBoxes } = webServiceSect;

// Contexts
export const BlocksData = createContext(servBoxes);

const Services = () => {
  // States
  const [boxIntersect, setBoxIntersect] = useState<boolean>(false);

  // Refs
  const servSect = useRef<HTMLElement | null>(null);
  const infoBox = useRef<HTMLDivElement[]>([]);
  const servHeader = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    // This creates an instance of the intersection observer object, used to check if the screen of the user is intersecting with some element. In this case, It checks the element is intersecting with the user's screen and changes teh "BoxIntersect" to true, rendering the animation
    function getCurrentElement(index: number): Element {
      const currentInfoBox: Element = infoBox.current[index];
      return currentInfoBox;
    }

    const element = getCurrentElement(0);
    if (!element) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setBoxIntersect(entry.isIntersecting);
        }
      });
    });

    observer.observe(element);
  }, [boxIntersect, servSect]);

  const changeVisibility = () => {
    return [
      boxIntersect
        ? {
            opacity: 1,
            transition: `all 2.3s ease`,
          }
        : {
            opacity: 0,
            transition: `all 2.3s ease`,
            transform: "translateX(-100%)",
          },
      boxIntersect
        ? {
            opacity: 1,
            transition: `all 2s ease`,
          }
        : {
            opacity: 0,
            transition: `all 2s ease`,
            transform: "translateX(-100%)",
          },
      boxIntersect
        ? {
            opacity: 1,
            transition: `all 1.7s ease`,
          }
        : {
            opacity: 0,
            transition: `all 1.7s ease`,
            transform: "translateX(-100%)",
          },
    ];
  };

  const changeVisibilityHeader = () => {
    return boxIntersect
      ? {
          opacity: 1,
          transition: "all .5s ease",
        }
      : {
          opacity: 0,
          transition: "all .5s ease",
        };
  };

  function setRef<Type>(elArray: RefObject<Type[]>, el: Type | null, index: number) {
    if (!el) return;
    
    elArray.current[index] = el;
  }

  return (
    <>
      <section id="services" ref={servSect}>
        <div>
          <div>
            <h1
              className="block-text big"
              style={changeVisibilityHeader()}
              ref={servHeader}
            >
              In what can I help you?
            </h1>
          </div>

          <BlocksData.Provider value={servBoxes}>
            <div id="cards">
              {servBoxes.map(({ title, text, img }, index: number) => {
                return (
                  <div
                    className="servBlock"
                    key={index}
                    ref={(el) => setRef<HTMLDivElement>(infoBox, el, index)}
                    style={changeVisibility()[index]}
                  >
                    <div className="imgSv">
                      <figure>
                        <Image
                          src={img}
                          alt="Connection with your target audience"
                          className="functions"
                          draggable="false"
                        />
                      </figure>
                    </div>

                    <div className="imgSv"></div>

                    <div>
                      <h2 style={{ fontSize: "2em" }}>{title}</h2>

                      <p>{text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </BlocksData.Provider>
        </div>
      </section>
    </>
  );
};

export default Services;
