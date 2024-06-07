// Images Import
import startup from "../img/startup.webp";
import promote from "../img/promote.webp";
import wireframe from "../img/wireframe.webp";

// Data Import
import { webServiceSect } from "../utils/data";
const { sectTitle, servBoxes } = webServiceSect;

function Services() {
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
              servBoxes.map(({ title, text }) => {
                return (
                  <div className="servBlock">
                    <div className="imgSv">
                      <figure>
                        <img
                          src={startup}
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