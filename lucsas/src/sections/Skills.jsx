// Hooks Import
import { useState, useReducer, useEffect, useRef, act } from "react";

// Images Import
import notebook from "../img/google-ads-design.svg";

// Font Import
import plusJakartaSans from "../fonts/Plus_Jakarta_Sans/PlusJakartaSans-VariableFont_wght.ttf";

// Data Import
import { webSkillsSect } from "../utils/data";
const { sectTitle, sectImg, techStack } = webSkillsSect;

const reducer = (state, action) => {
  switch (action.type) {
    case "change_tech_HTML":
      return {
        basicSettings: {
          bg: "white",
          color: "black",
          font: "serif",
        },

        text: {
          textSize: "1.2em",
          textLine: "1em",
        },

        links: {
          aDecoration: "underline",
          aDisplay: "inline",
          aBg: "none",
          aColor: "blue",
          aPadding: "0px",
          aBorderRadius: "0px",
        },

        content: {
          title: "HTML",
          text: "The technology that gives meaning to websites through tags, building the document that you see in the browser.",
          textLink: "",
        },
      };

    case "change_tech_CSS":
      return {
        basicSettings: {
          bg: "#060606",
          color: "white",
          font: plusJakartaSans,
        },

        text: {
          textSize: "1.5em",
          textLine: "2em",
        },

        links: {
          aDecoration: "none",
          aDisplay: "inline",
          aBg: "linear-gradient(to right, blue, #8000ff)",
          aColor: "white",
          aPadding: "12px 20px",
          aBorderRadius: "10px",
        },

        content: {
          title: "CSS",
          text: "A combination with the stylesheets of HTML and CSS do the work for static websites, making possible to add layouts, positions, responsiveness and animations.",
          textLink: "",
        },
      };

    case "change_tech_JS":
      return {
        basicSettings: {
          bg: "#060606",
          color: "white",
          font: plusJakartaSans,
        },

        text: {
          textSize: "1.5em",
          textLine: "2em",
        },

        links: {
          aDecoration: "none",
          aDisplay: "inline",
          aBg: "linear-gradient(to right, blue, #8000ff)",
          aColor: "white",
          aPadding: "12px 20px",
          aBorderRadius: "10px",
        },

        content: {
          title: "JavaScript",
          text: "The technology that make things more interesting and add relevant features to a dynamic experience. With all of it's libraries, frameworks and DOM Manipulation bringing value, making the tech essential for web development.",
          textLink: "",
        },
      };

    case "change_tech_TS":
      return {
        basicSettings: {
          bg: "#060606",
          color: "white",
          font: plusJakartaSans,
        },

        text: {
          textSize: "1.5em",
          textLine: "2em",
        },

        links: {
          aDecoration: "none",
          aDisplay: "inline",
          aBg: "linear-gradient(to right, blue, #8000ff)",
          aColor: "white",
          aPadding: "12px 20px",
          aBorderRadius: "10px",
        },

        content: {
          title: "TypeScript",
          text: "Work In Progress",
          textLink: "",
        },
      };

    case "change_tech_React":
      return {
        basicSettings: {
          bg: "#060606",
          color: "white",
          font: plusJakartaSans,
        },

        text: {
          textSize: "1.5em",
          textLine: "2em",
        },

        links: {
          aDecoration: "none",
          aDisplay: "inline",
          aBg: "linear-gradient(to right, blue, #8000ff)",
          aColor: "white",
          aPadding: "12px 20px",
          aBorderRadius: "10px",
        },

        content: {
          title: "React JS",
          text: "Great Architecture and organization is what builds React JS, A technology that not only bring all the features of HTML, CSS and JavaScript combined, but enhance i as well, bringing state management, routers, and even more abstraction to your app.",
          textLink: "",
        },
      };

    case "change_tech_GSAP":
      return {
        basicSettings: {
          bg: "#060606",
          color: "white",
          font: plusJakartaSans,
        },

        text: {
          textSize: "1.5em",
          textLine: "2em",
        },

        links: {
          aDecoration: "none",
          aDisplay: "inline",
          aBg: "linear-gradient(to right, blue, #8000ff)",
          aColor: "white",
          aPadding: "12px 20px",
          aBorderRadius: "10px",
        },

        content: {
          title: "GSAP",
          text: "Animation to your website ",
          textLink: "",
        },
      };

    case "change_tech_Redux":
      return {
        basicSettings: {
          bg: "#060606",
          color: "white",
          font: plusJakartaSans,
        },

        text: {
          textSize: "1.5em",
          textLine: "2em",
        },

        links: {
          aDecoration: "none",
          aDisplay: "inline",
          aBg: "linear-gradient(to right, blue, #8000ff)",
          aColor: "white",
          aPadding: "12px 20px",
          aBorderRadius: "10px",
        },

        content: {
          title: "Redux",
          text: "State Management that makes the structure more put together",
          textLink: "",
        },
      };

    case "change_tech_Git":
      return {
        basicSettings: {
          bg: "#060606",
          color: "white",
          font: plusJakartaSans,
        },

        text: {
          textSize: "1.5em",
          textLine: "2em",
        },

        links: {
          aDecoration: "none",
          aDisplay: "inline",
          aBg: "linear-gradient(to right, blue, #8000ff)",
          aColor: "white",
          aPadding: "12px 20px",
          aBorderRadius: "10px",
        },

        content: {
          title: "Git",
          text: "An essential tool for project management and version control,",
          textLink: "",
        },
      };

    default:
      return state;
  }
};

function Skills() {
  const [infoIntersect, setInfoIntersect] = useState(false);
  const [activeTech, dispatch] = useReducer(reducer, {
    basicSettings: {
      bg: "white",
      color: "black",
      font: "serif",
    },

    text: {
      textSize: "1em",
      textLine: "1em",
    },

    links: {
      aDecoration: "underline",
      aDisplay: "inline",
      aBg: "none",
      aColor: "blue",
      aPadding: "0px",
      aBorderRadius: "0px",
    },

    content: {
      title: "HTML",
      text: "The technology that gives meaning to websites through tags, building the document that you see in the browser.",
      textLink: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
  });

  const infoBox = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInfoIntersect(entry.isIntersecting);
        }
      });
    });

    observer.observe(infoBox.current);
  }, []);

  const changeTech = (tech) => {
    switch (tech) {
      case "HTML":
        dispatch({ type: "change_tech_HTML" });
        return;

      case "CSS":
        dispatch({ type: "change_tech_CSS" });
        return;

      case "JavaScript":
        dispatch({ type: "change_tech_JS" });
        return;

      case "TypeScript":
        dispatch({ type: "change_tech_TS" });
        return;

      case "React JS":
        dispatch({ type: "change_tech_React" });
        return;

      case "GSAP":
        dispatch({ type: "change_tech_GSAP" });
        return;

      case "Redux":
        dispatch({ type: "change_tech_Redux" });
        return;

      case "Git":
        dispatch({ type: "change_tech_Git" });
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
                      onClick={() => changeTech(techStack.tech[index])}
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

              <div
                className="laptopContent"
                style={{
                  background: activeTech.basicSettings.bg,
                  color: activeTech.basicSettings.color,
                  fontFamily: activeTech.basicSettings.font,
                }}
              >
                <h1>{`This is ${activeTech.content.title}`}</h1>

                <p
                  style={{
                    fontSize: activeTech.text.textSize,
                    lineHeight: activeTech.text.textLine,
                  }}
                >
                  {activeTech.content.text}
                </p>

                <a
                  href={activeTech.content.textLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: activeTech.links.aBg,
                    color: activeTech.links.aColor,
                    padding: activeTech.links.aPadding,
                    borderRadius: activeTech.links.aBorderRadius,
                    textDecoration: activeTech.links.aDecoration,
                    display: activeTech.links.aDisplay,
                  }}
                >
                  Learn more about {activeTech.content.title}
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
