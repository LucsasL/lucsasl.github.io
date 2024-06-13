// Hooks Import
import { useState, useRef, useEffect } from "react";

// Component Import
import ServBlock from "../components/ServSectComps/servBlock";

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
            {servBoxes.map(({ ref, title, text, img }, index) => {
              return (
                <ServBlock
                  title={title}
                  text={text}
                  img={img}
                  index={index}
                  ref={ref}
                  style={changeVisibility()}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
