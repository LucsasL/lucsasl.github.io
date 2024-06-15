// Hooks Import
import { useState, useReducer, useEffect, useRef, createContext } from "react";

// Components Import
import TechController from "../components/SkillSectComps/TechController.jsx";
import Laptop from "../components/SkillSectComps/Laptop.jsx";

// Data Import
import { webSkillsSect } from "../utils/data";
const { sectTitle } = webSkillsSect;

// Variables
const techObj = {
  basicSettings: {
    bg: "white",
    color: "black",
    font: "serif",
    boxShadow:
      "background: $shadow; box-shadow: 5px 5px 15px 5px $shadow, -2px -2px 2px rgba(255, 255, 255, .3), 0px 15px 10px $shadow;",
  },

  header: {
    headerPadding: "0px",
    headerMargin: "20px",
    headerBoxShadow: "none",
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
};

export const Data = createContext(techObj);

const reducer = (state, action) => {
  switch (action.type) {
    case "change_tech_HTML":
      return {
        basicSettings: {
          bg: "white",
          color: "black",
          font: "serif",
        },

        header: {
          headerPadding: "0px",
          headerMargin: "20px",
          headerBoxShadow: "none",
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
          font: "none",
        },

        header: {
          headerPadding: "20px",
          headerMargin: "20px",
          headerBoxShadow:
            "5px 5px 15px 5px rgba(0, 0, 0, 0.488), -2px -2px 2px rgba(255, 255, 255, .3), 0px 15px 10px rgba(0, 0, 0, 0.488)",
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
          font: "none",
        },

        header: {
          headerPadding: "20px",
          headerMargin: "20px",
          headerBoxShadow:
            "5px 5px 15px 5px rgba(0, 0, 0, 0.488), -2px -2px 2px rgba(255, 255, 255, .3), 0px 15px 10px rgba(0, 0, 0, 0.488)",
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
          font: "none",
        },

        header: {
          headerPadding: "20px",
          headerMargin: "20px",
          headerBoxShadow:
            "5px 5px 15px 5px rgba(0, 0, 0, 0.488), -2px -2px 2px rgba(255, 255, 255, .3), 0px 15px 10px rgba(0, 0, 0, 0.488)",
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
          font: "none",
        },

        header: {
          headerPadding: "20px",
          headerMargin: "20px",
          headerBoxShadow:
            "5px 5px 15px 5px rgba(0, 0, 0, 0.488), -2px -2px 2px rgba(255, 255, 255, .3), 0px 15px 10px rgba(0, 0, 0, 0.488)",
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

    case "change_tech_SASS":
      return {
        basicSettings: {
          bg: "#060606",
          color: "white",
          font: "none",
        },

        header: {
          headerPadding: "20px",
          headerMargin: "20px",
          headerBoxShadow:
            "5px 5px 15px 5px rgba(0, 0, 0, 0.488), -2px -2px 2px rgba(255, 255, 255, .3), 0px 15px 10px rgba(0, 0, 0, 0.488)",
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
          title: "SASS",
          text: "The technology that make things more interesting and add relevant features to a dynamic experience. With all of it's libraries, frameworks and DOM Manipulation bringing value, making the tech essential for web development.",
          textLink: "",
        },
      };

    case "change_tech_GSAP":
      return {
        basicSettings: {
          bg: "#060606",
          color: "white",
          font: "none",
        },

        header: {
          headerPadding: "20px",
          headerMargin: "20px",
          headerBoxShadow:
            "5px 5px 15px 5px rgba(0, 0, 0, 0.488), -2px -2px 2px rgba(255, 255, 255, .3), 0px 15px 10px rgba(0, 0, 0, 0.488)",
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

    case "change_tech_Jest":
      return {
        basicSettings: {
          bg: "#060606",
          color: "white",
          font: "none",
        },

        header: {
          headerPadding: "20px",
          headerMargin: "20px",
          headerBoxShadow:
            "5px 5px 15px 5px rgba(0, 0, 0, 0.488), -2px -2px 2px rgba(255, 255, 255, .3), 0px 15px 10px rgba(0, 0, 0, 0.488)",
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
          title: "Jest",
          text: "The technology that make things more interesting and add relevant features to a dynamic experience. With all of it's libraries, frameworks and DOM Manipulation bringing value, making the tech essential for web development.",
          textLink: "",
        },
      };

    case "change_tech_Redux":
      return {
        basicSettings: {
          bg: "#060606",
          color: "white",
          font: "none",
        },

        header: {
          headerPadding: "20px",
          headerMargin: "20px",
          headerBoxShadow:
            "5px 5px 15px 5px rgba(0, 0, 0, 0.488), -2px -2px 2px rgba(255, 255, 255, .3), 0px 15px 10px rgba(0, 0, 0, 0.488)",
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

    case "change_tech_Python":
      return {
        basicSettings: {
          bg: "#060606",
          color: "white",
          font: "none",
        },

        header: {
          headerPadding: "20px",
          headerMargin: "20px",
          headerBoxShadow:
            "5px 5px 15px 5px rgba(0, 0, 0, 0.488), -2px -2px 2px rgba(255, 255, 255, .3), 0px 15px 10px rgba(0, 0, 0, 0.488)",
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
          title: "Python",
          text: "The technology that make things more interesting and add relevant features to a dynamic experience. With all of it's libraries, frameworks and DOM Manipulation bringing value, making the tech essential for web development.",
          textLink: "",
        },
      };

    case "change_tech_Git":
      return {
        basicSettings: {
          bg: "#060606",
          color: "white",
          font: "none",
        },

        header: {
          headerPadding: "20px",
          headerMargin: "20px",
          headerBoxShadow:
            "5px 5px 15px 5px rgba(0, 0, 0, 0.488), -2px -2px 2px rgba(255, 255, 255, .3), 0px 15px 10px rgba(0, 0, 0, 0.488)",
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
  const infoBox = useRef();

  // TechController States and Ref
  const [activeTech, dispatch] = useReducer(reducer, techObj);

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

  return (
    <>
      <section id="skills">
        <div>
          <div className="blockquote" ref={infoBox} style={changeVisibility(0)}>
            <h1 className="big block-text">{sectTitle}</h1>
          </div>

          <div className="langsCont">
            <Data.Provider value={[activeTech, dispatch]}>
              <TechController />
              <Laptop />
            </Data.Provider>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
