import startup from "../img/startup.webp";
import promote from "../img/promote.webp";
import wireframe from "../img/wireframe.webp";

function Services() {
  return (
    <>
      <section id="services">
        <div>
          <div className="center">
            <h1 className="block-text big hidden1" style={{ margin: "30px 0px" }}>
              In what can I help you?
            </h1>
          </div>

          <div div id="cards">
            <div className="skill-block hidden">
              <div className="img-sk">
                <figure>
                  <img
                    src={startup}
                    alt="Connection with your target audience"
                    className="functions"
                  />
                </figure>
              </div>

              <div className="img-sk"></div>

              <div>
                <h2 style={{ fontSize: "2em" }}>Campaign Creation</h2>

                <p>
                  Create optimized campaigns to potential clients in different
                  segmentation and locations. Making your business reach new
                  clients in a better way and promoting your branch.
                </p>
              </div>
            </div>

            <div className="skill-block hidden">
              <div className="img-sk">
                <figure>
                  <img
                    src={promote}
                    alt="Promote your brand"
                    className="functions"
                  />
                </figure>
              </div>

              <div className="img-sk"></div>

              <div>
                <h2 style={{ fontSize: "2em" }}>Captivating Writing</h2>
                <p>
                  With good use of Copywriting, we can convince more people and
                  attract impressions, leads and conversions.
                </p>
              </div>
            </div>

            <div className="skill-block hidden">
              <div className="img-sk">
                <figure>
                  <img
                    src={wireframe}
                    alt="Multi platform adverts"
                    className="functions"
                  />
                </figure>
              </div>

              <div className="img-sk"></div>

              <div>
                <h2 style={{ fontSize: "2em" }}>Multi-Platform</h2>

                <p>
                  Expanding your brand in different social medias and all
                  different places of internet, bringing more sight for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;