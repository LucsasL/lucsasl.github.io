import { webProjectsSect } from "../utils/data";

function Portfolio() {
  return (
    <>
      <section id="portfolio">
        <div>
          <div>
            <h1 className="big">What does a traffic manager do?</h1>
          </div>

          <div className="projCont">
            {
              webProjectsSect.projects.map(({ projTitle, projDesc, projImgDesc }) => {
                return (
                  <>
                    <div className="proj">
                      <div>
                        <h2>
                          {projTitle}
                        </h2>
                        <p>
                          {projDesc}
                        </p>
                        <button>
                          Visit Project
                        </button>
                      </div>

                      <div>
                        <picture>
                          <img src="" alt={projImgDesc} />
                        </picture>
                      </div>
                    </div>
                  </>
                );
              })
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;