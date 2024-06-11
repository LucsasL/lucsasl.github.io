// Hooks Import
import { useState, useRef, useEffect } from "react";

// Data Import
import { webServiceSect } from "../utils/data";
const { sectTitle, servBoxes } = webServiceSect;

function Services() {
  const [boxIntersect, setBoxIntersect] = useState(false);
  const infoBox = useRef([]);
  const servHeader = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setBoxIntersect(entry.isIntersecting);
        } else {
          setBoxIntersect(entry.isIntersecting);
        }
      });
    });

    observer.observe(infoBox.current);
  }, []);

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
              {sectTitle}
            </h1>
          </div>

          <div id="cards">
            {servBoxes.map(({ title, text, img }, index) => {
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
        </div>
      </section>
    </>
  );
}

export default Services;
