// Hooks Import
import { useRef } from "react";

// Data Import
import { webServiceSect } from "../utils/data";
const { sectTitle, servBoxes } = webServiceSect;

function Services() {
  const infoBox = useRef([]);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      console.log(entry);

      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    })
  });

  infoBox.current.forEach(el => observer.observe(el));

  return (
    <>
      <section id="services">
        <div>
          <div>
            <h1 className="block-text big" style={{ margin: "30px 0px" }}>
              {sectTitle}
            </h1>
          </div>

          <div id="cards">
            {
              servBoxes.map(({ title, text, img }, index) => {
                return (
                  <div className="servBlock hidden" key={index} ref={infoBox}>
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