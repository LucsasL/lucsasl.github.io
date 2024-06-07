import { webProjectsSect } from "../utils/data";

function Portfolio() {
  return (
    <>
      <section id="portfolio">
        <div>
          <div>
            <h1 className="big">In what projects have you used your skills?</h1>
          </div>

          <div className="projCont">
            {webProjectsSect.projects.map(
              ({ projLink, projTitle, projDesc, projImgDesc, techStack, techStackImg, projImg }, index) => {
                return (
                  <>
                    <div className="proj" key={index}>
                      <div className="projInfo">
                        <h2 className="big">{projTitle}</h2>
                        <p>{projDesc}</p>

                        <div className="techStackCont">
                          {techStack.map((t, index) => {
                            return (
                              <picture key={index}>
                                <img src={techStackImg[index]} alt={t} />
                              </picture>
                            );
                          })}
                        </div>

                        <div>
                          <button>
                            <a
                              href={projLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Visit Project
                            </a>
                          </button>
                          <button>
                            <a
                              href="https://"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              See details
                            </a>
                          </button>
                        </div>
                      </div>

                      <div className="projImg">
                        <picture key={index}>
                          <img src={projImg[index]} alt={projImgDesc} />
                        </picture>
                      </div>
                    </div>
                  </>
                );
              }
            )}
          </div>

          <div className="blockquote">
            <h3 className="big">More projects coming soon...</h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;