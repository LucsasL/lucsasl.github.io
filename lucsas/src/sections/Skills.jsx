// Hooks Import
import { useState, useReducer, useEffect, useRef } from "react";

// Images Import
import notebook from "../img/google-ads-design.svg";

// Data Import
import { webSkillsSect } from "../utils/data";
const { sectTitle, sectImg, techStack } = webSkillsSect;
const { techDesc } = techStack;

function reducer(state, action) {
  switch (action) {
    case "change_tech_HTML":
      state.title = "BRUH";
      state.text = "It's all working";
      return;

    case "change_tech_CSS":
      state.title = "BRUH";
      state.text = "It's all working";
      return;

    case "change_tech_JS":
      state.title = "BRUH";
      state.text = "It's all working";
      return;

    case "change_tech_React":
      state.title = "BRUH";
      state.text = "It's all working";
      return;

    case "change_tech_GSAP":
      state.title = "BRUH";
      state.text = "It's all working";
      return;

    case "change_tech_Redux":
      state.title = "BRUH";
      state.text = "It's all working";
      return;

    case "change_tech_Git":
      state = {
        ...state,
        title: techStack.tech[6],
        text: techDesc[6],
      };
      return;

    default:
      return;
  }
}

function Skills() {
  const [infoIntersect, setInfoIntersect] = useState(false);
  const [activeTech, dispatch] = useReducer(reducer, {
    bg: "white",
    color: "black",
    font: "serif",
    aDecoration: "underline",
    title: "HTML",
    text: "The technology that gives meaning to websites, A document build with objects."
  });

  const infoBox = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInfoIntersect(entry.isIntersecting);
        } else {
          setInfoIntersect(entry.isIntersecting);
        }
      });
    });

    observer.observe(infoBox.current);
  }, [activeTech]);

  const changeTech = (tech) => {
    switch (tech) {
      case "HTML":
        dispatch({ ...activeTech, type: "change_tech_HTML" });
        return;

      case "CSS":
        dispatch({ ...activeTech, type: "change_tech_CSS" });
        return;

      case "JavaScript":
        dispatch({ ...activeTech, type: "change_tech_JS" });
        return;

      case "React JS":
        dispatch({ ...activeTech, type: "change_tech_React" });
        return;

      case "GSAP":
        dispatch({ ...activeTech, type: "change_tech_GSAP" });
        return;

      case "Redux":
        dispatch({ ...activeTech, type: "change_tech_Redux" });
        return;

      case "Git":
        dispatch({ ...activeTech, type: "change_tech_Git" });
        return;

      default:
        return;
    }
  };

  const changeVisibility = (side) => {
    return infoIntersect
      ? {
          opacity: 1,
          transition: "all 1.5s ease",
        }
      : {
          opacity: 0,
          transition: "all 1.5s ease",
          transform: `translateX(${side})`,
        };
  };

  const changeVisibilityLaptop = (side) => {
    return infoIntersect
      ? {
          opacity: 1,
          transition: "all 1.5s ease",
        }
      : {
          opacity: 1,
          transition: "all 1.5s ease",
          transform: `translateX(${side})`,
        };
  };

  return (
    <>
      <section id="area">
        <div>
          <div className="platform">
            <div ref={infoBox} style={changeVisibility(0)}>
              <div className="blockquote">
                <h1 className="big">Front-End Web Developer</h1>
              </div>

              <p>
                Meticulously target your audience through the lens of{" "}
                <strong className="fancy">Google Ads,</strong> ensuring that
                every click counts. Your business spotted by the right customer
                by the right advert. Using{" "}
                <strong>Audience Segmentation</strong> we can track all the
                different types of interests and ideas, and use these statistics
                to bring more potential clients to you.
              </p>
            </div>

            <div className="img-div">
              <figure>
                <img
                  src={sectImg}
                  alt="Google Ads Service"
                  id="webdev-design"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section id="skills">
        <div>
          <div className="blockquote" ref={infoBox} style={changeVisibility(0)}>
            <h1 className="big block-text">{sectTitle}</h1>
          </div>

          <div className="langsCont">
            <div className="techStack" style={changeVisibility("-100%")}>
              {techStack.imgs.map((t, index) => {
                return (
                  <abbr title={techStack.tech[index]} key={index}>
                    <button
                      className="tech"
                      onClick={() => {changeTech(techStack.tech[index])}}
                    >
                      <picture>
                        <img src={t} alt={techStack.tech[index]} />
                      </picture>
                    </button>
                  </abbr>
                );
              })}
            </div>
            <div className="laptop" style={changeVisibilityLaptop("150%")}>
              <picture>
                <figure>
                  <img src={notebook} alt="Website" />
                  <figcaption>Website</figcaption>
                </figure>
              </picture>

              <div className="laptopContent" style={{}}>
                <h1>{`This is ${activeTech.title}`}</h1>

                <p>{activeTech.text}</p>

                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more about {activeTech.title}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
