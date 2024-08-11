// Hooks Import
import { useState, useEffect, useRef, useContext } from "react";

// Context
import { PageLang } from "../App.js";

// Data Import
import { webProjectsSect } from "../utils/data";
import { webProjectsSectPort } from "../utils/dataPortuguese.js";

function Portfolio() {
  // States
  const [projectBoxIntersect, setProjectBoxIntersect] = useState(false);

  // Refs
  const project = useRef();
  const portfolioSect = useRef();

  // Context
  const { lang } = useContext(PageLang);

  useEffect(() => {
    // This creates an instance of the intersection observer object, used to check if the screen of the user is intersecting with some element. In this case, It checks the element is intersecting with the user's screen and changes teh "projectBoxIntersect" to true, rendering the animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setProjectBoxIntersect(entry.isIntersecting);
        }
      });
    });

    observer.observe(project.current);
  }, [projectBoxIntersect, portfolioSect]);

  // It changes the element visibility of the project's element
  const changeVisibility = () => {
    return projectBoxIntersect
      ? {
          opacity: 1,
          transition: "all 1s ease",
        }
      : {
          opacity: 0,
          transition: "all 1s ease",
        };
  };

  return (
    <>
      <section id="portfolio" ref={portfolioSect}>
        <div>
          <div className="blockquote" ref={project} style={changeVisibility()}>
            <h1 className="big">In what projects have you used your skills?</h1>
          </div>

          <div className="projCont">
            {lang === "English"
              ? webProjectsSect.projects.map(
                  (
                    {
                      projLink,
                      projTitle,
                      projSubtitle,
                      projDesc,
                      projImgDesc,
                      techStack,
                      techStackImg,
                      projImg,
                    },
                    index
                  ) => {
                    return (
                      <>
                        <div
                          className="proj"
                          key={index}
                          style={changeVisibility()}
                        >
                          <div className="projInfo">
                            <h2 className="big">
                              {projTitle}
                              <span
                                style={{ fontSize: ".5em", marginLeft: "15px" }}
                              >
                                (Work In Progress)
                              </span>
                            </h2>

                            <h3>{projSubtitle}</h3>

                            <p>{projDesc}</p>

                            <div className="techStackCont">
                              {techStack.map((t, index) => {
                                return (
                                  <abbr title={t} key={index}>
                                    <picture>
                                      <img src={techStackImg[index]} alt={t} />
                                    </picture>
                                  </abbr>
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
                              <button className="detailBtn">
                                <a
                                  href="https://github.com/lucsasl"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={() =>
                                    alert(
                                      "Work in Progress, I'm finishing creating these sections"
                                    )
                                  }
                                >
                                  See details
                                </a>
                              </button>
                            </div>
                          </div>

                          <div className="projImg">
                            <picture key={index}>
                              <img src={projImg} alt={projImgDesc} />
                            </picture>
                          </div>
                        </div>
                      </>
                    );
                  }
                )
              : webProjectsSectPort.projects.map(
                  (
                    {
                      projLink,
                      projTitle,
                      projSubtitle,
                      projDesc,
                      projImgDesc,
                      techStack,
                      techStackImg,
                      projImg,
                    },
                    index
                  ) => {
                    return (
                      <>
                        <div
                          className="proj"
                          key={index}
                          style={changeVisibility()}
                        >
                          <div className="projInfo">
                            <h2 className="big">
                              {projTitle}
                              <span
                                style={{ fontSize: ".5em", marginLeft: "15px" }}
                              >
                                (Work In Progress)
                              </span>
                            </h2>

                            <h3>{projSubtitle}</h3>

                            <p>{projDesc}</p>

                            <div className="techStackCont">
                              {techStack.map((t, index) => {
                                return (
                                  <abbr title={t} key={index}>
                                    <picture>
                                      <img src={techStackImg[index]} alt={t} />
                                    </picture>
                                  </abbr>
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
                              <button className="detailBtn">
                                <a
                                  href="https://github.com/lucsasl"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={() =>
                                    alert(
                                      "Work in Progress, I'm finishing creating these sections"
                                    )
                                  }
                                >
                                  See details
                                </a>
                              </button>
                            </div>
                          </div>

                          <div className="projImg">
                            <picture key={index}>
                              <img src={projImg} alt={projImgDesc} />
                            </picture>
                          </div>
                        </div>
                      </>
                    );
                  }
                )}
          </div>

          <div className="blockquote">
            <h4 className="big">More projects coming soon...</h4>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
