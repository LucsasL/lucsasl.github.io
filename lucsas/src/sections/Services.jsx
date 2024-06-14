// Hooks Import
import { useState, useRef, useEffect, createContext } from "react";

// Component Import
import ServBlock from "../components/ServSectComps/servBlock";

// Data Import
import { webServiceSect } from "../utils/data";
const { sectTitle, servBoxes } = webServiceSect;

// Contexts
export const BlocksData = createContext(servBoxes);

function Services() {
  const [boxIntersect, setBoxIntersect] = useState(false);
  const infoBox = useRef([]);
  const servHeader = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setBoxIntersect(entry.isIntersecting);
        }
      });
    });

    // observer.observe(infoBox.current);
  }, [boxIntersect]);

  const changeVisibility = ({ children }) => {
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
              {sectTitle}
            </h1>
          </div>

          <BlocksData.Provider value={servBoxes}>
            <div id="cards">
              {/* {servBoxes.map(({ title, text, img }, index ) => {
                return (
                  <ServBlock
                    value={{
                      title,
                      text,
                      img,
                      index,
                      changeVisibility,
                    }}
                    ref={infoBox}
                    key={index}
                    style={changeVisibility[index]}
                  />
                );
              })} */}
            </div>
          </BlocksData.Provider>
        </div>
      </section>
    </>
  );
}

export default Services;
