// Hooks Import
import { useState, useRef, useEffect } from "react";

// Data Import
import { webServiceSect } from "../utils/data";
const { sectTitle, servBoxes } = webServiceSect;

function Services() {
  const [boxIntersect, setBoxIntersect] = useState(false);
  const infoBox = useRef([]);
  const servHeader = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          infoBox.current.classList.add("show");
          setBoxIntersect(entry.isIntersecting);
        } else {
          infoBox.current.classList.remove("show");
          setBoxIntersect(entry.isIntersecting);
        }
      });
    });

    observer.observe(infoBox.current);
  }, []);

  const changeVisibility = () => {
    console.log(boxIntersect);
    return boxIntersect
      ? {
          opacity: 1,
        }
      : {
          opacity: 0.3,
        };
  };

  return (
    <>
      <section id="services">
        <div>
          <div>
            <h1
              className="block-text big"
              style={{ margin: "30px 0px" }}
              ref={servHeader}
            >
              {sectTitle}
            </h1>
          </div>

          <div id="cards">
            {servBoxes.map(({ title, text, img }, index) => {
              return (
                <div
                  className="servBlock hidden"
                  key={index}
                  ref={infoBox}
                  style={changeVisibility()}
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
