// Hooks Import
import { useState, useRef } from "react";

// Data Import
import { webServiceSect } from "../utils/data";
const { sectTitle, servBoxes } = webServiceSect;

function Services() {
  const [boxIntersect, setBoxIntersect] = useState(false);
  const infoBox = useRef([]);
  const servHeader = useRef(null);
 
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        setBoxIntersect(true);
      } else {
        entry.target.classList.remove("show");
        setBoxIntersect(false);
      }
    })
  });

  const intersection

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
            {
              servBoxes.map(({ title, text, img }, index) => {
                return (
                  <div 
                    className="servBlock hidden" 
                    key={index} 
                    ref={infoBox}
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

                      <p>
                        {text}
                      </p>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;