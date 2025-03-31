"use client";

// Hooks Import
import React, { useState, useRef, useEffect, createContext } from "react";
import Image from "next/image";

// Data Import
import { webServiceSect } from "../utils/data";

// Data Destructuring
const { servBoxes } = webServiceSect;

// Contexts
export const BlocksData = createContext(servBoxes);

// Type Declarations
interface RefShape {
  ref: Element[];
  getSingularElement: (refs: Element[]) => Element;
}

const Services = () => {
  // States
  const [boxIntersect, setBoxIntersect] = useState<boolean>(false);

  // Refs
  const servSect = useRef<Element>(null);
  const infoBox = useRef<RefShape[]>([]);
  const servHeader = useRef<Element>(null);

  useEffect(() => {
    // This creates an instance of the intersection observer object, used to check if the screen of the user is intersecting with some element. In this case, It checks the element is intersecting with the user's screen and changes teh "BoxIntersect" to true, rendering the animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setBoxIntersect(entry.isIntersecting);
        }
      });
    });

    const currentInfoBox: RefShape[] = infoBox.current;

    observer.observe(currentInfoBox);
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

  return (
    <>
      <section id="services" ref={servSect.current}>
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
                    ref={infoBox}
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
