// Hooks Import
import { useState, useRef, useEffect, createContext, useContext } from "react";

// Context Import
import { PageLang } from "../App";

// Data Import
import { webServiceSect } from "../utils/data";
import { webServiceSectPort } from "../utils/dataPortuguese";

// Data Desestructuring
const { sectTitle, servBoxes } = webServiceSect;
const { sectTitlePort, servBoxesPort } = webServiceSectPort;

// Contexts
export const BlocksData = createContext(servBoxes);

function Services() {
  // States
  const [boxIntersect, setBoxIntersect] = useState(false);

  // Refs
  const infoBox = useRef([]);
  const servHeader = useRef();

  // useContext
  const { lang } = useContext(PageLang);

  useEffect(() => {
    // This creates an instance of the intesection observer object, used to check if the screen of the user is intersecting with some element. In this case, It checks the element is intersecting with the user's screen and changes teh "BoxIntersect" to true, rendering the animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setBoxIntersect(entry.isIntersecting);
        }
      });
    });

    observer.observe(infoBox.current);
  }, [boxIntersect]);

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
      <section id="services">
        <div>
          <div>
            <h1
              className="block-text big"
              style={changeVisibilityHeader()}
              ref={servHeader}
            >
              {lang === "English" ? sectTitle : sectTitlePort}
            </h1>
          </div>

          <BlocksData.Provider value={servBoxes}>
            <div id="cards">
              {lang === "English"
                ? servBoxes.map(({ title, text, img }, index) => {
                    return (
                      <div
                        className="servBlock"
                        key={index}
                        ref={infoBox}
                        style={changeVisibility()[index]}
                      >
                        <div className="imgSv">
                          <figure>
                            <img
                              src={img}
                              alt="Connection with your target audience"
                              className="functions"
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
                  })
                : servBoxesPort.map(({ title, text, img }, index) => {
                    return (
                      <div
                        className="servBlock"
                        key={index}
                        ref={infoBox}
                        style={changeVisibility()[index]}
                      >
                        <div className="imgSv">
                          <figure>
                            <img
                              src={img}
                              alt="Connection with your target audience"
                              className="functions"
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
}

export default Services;
