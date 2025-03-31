import { type StateShape, type TechShape } from "@/typing";
import { SetStateAction } from "react";

export const techObj: TechShape = {
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
    textLink: "HTML",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    dateTime: {
      display: "none",
      width: "50%",
      padding: "30px",
      textAlign: "right",
    },
  },
};

export const reducer = (state: StateShape, action: SetStateAction<StateShape>) => {
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
          textLink: "HTML",
          link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
          dateTime: {
            display: "none",
            width: "50%",
            padding: "30px",
            textAlign: "right",
          },
        },
      };

    case "change_tech_CSS":
      return {
        basicSettings: {
          bg: "linear-gradient(to right, #060606, rgba(0, 0, 0, .4))",
          color: "white",
          font: "none",
        },

        header: {
          headerSize: "3.5em",
          headerSizeMob: "2.2em",
          headerPadding: "20px",
          headerMargin: "1px 5px",
        },

        text: {
          textSize: "1.3em",
          textLine: "1.8em",
          textWidth: "60%",
          textWidthMob: "90%",
          textMargin: "10px 25px",
        },

        links: {
          aDecoration: "none",
          aDisplay: "block",
          aBg: "linear-gradient(to right, blue, #8000ff)",
          aColor: "white",
          aWidth: "50%",
          aWidthMob: "90%",
          aPadding: "12px 20px",
          aBorderRadius: "10px",
        },

        content: {
          title: "HTML + CSS",
          text: "A combination with the stylesheets of HTML and CSS do the work for static websites, making possible to add layouts, positions, responsiveness and animations.",
          textLink: "CSS",
          link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
          dateTime: {
            display: "none",
            width: "50%",
            padding: "30px",
            textAlign: "right",
          },
        },
      };

    case "change_tech_JavaScript":
      return {
        basicSettings: {
          bg: "linear-gradient(to right, #060606, rgba(0, 0, 0, .4))",
          color: "white",
          font: "none",
        },

        header: {
          headerSize: "3.5em",
          headerPadding: "20px",
          headerMargin: "1px 5px",
        },

        text: {
          textSize: "1.3em",
          textLine: "1.8em",
          textWidth: "60%",
          textMargin: "10px 25px",
        },

        links: {
          aDecoration: "none",
          aDisplay: "block",
          aBg: "linear-gradient(to right, blue, #8000ff)",
          aColor: "white",
          aWidth: "50%",
          aPadding: "12px 20px",
          aBorderRadius: "10px",
        },

        content: {
          title: "HTML + CSS + JS",
          text: "The technology that make things more interesting and add relevant features to a dynamic experience. With all of it's libraries, frameworks and DOM Manipulation bringing value, making the tech essential for web development.",
          textLink: "JavaScript",
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          dateTime: {
            display: "flex",
            width: "50%",
            padding: "30px",
            textAlign: "right",
          },
        },
      };

    case "change_tech_TypeScript":
      return {
        basicSettings: {
          bg: "linear-gradient(to right, #060606, rgba(0, 0, 0, .4))",
          color: "white",
          font: "none",
        },

        header: {
          headerSize: "3.5em",
          headerPadding: "20px",
          headerMargin: "1px 5px",
        },

        text: {
          textSize: "1.3em",
          textLine: "1.8em",
          textWidth: "60%",
          textMargin: "10px 25px",
        },

        links: {
          aDecoration: "none",
          aDisplay: "block",
          aBg: "linear-gradient(to right, blue, #8000ff)",
          aColor: "white",
          aWidth: "50%",
          aPadding: "12px 20px",
          aBorderRadius: "10px",
        },

        content: {
          title: "HTML + CSS + TS",
          text: "Programming a web app with TypeScript is like using JavaScript with superpowers. It makes your code more succinct and organized by adding types to variables and giving you complete control over the algorithm. This way, the architecture of your application becomes more manageable.",
          textLink: "TypeScript",
          link: "https://www.typescriptlang.org/",
          dateTime: {
            display: "flex",
            width: "50%",
            padding: "30px",
            textAlign: "right",
          },
        },
      };

    case "change_tech_React":
      return {
        basicSettings: {
          bg: "linear-gradient(to right, #060606, rgba(0, 0, 0, .4))",
          color: "white",
          font: "none",
        },

        header: {
          headerSize: "3.5em",
          headerPadding: "20px",
          headerMargin: "1px 5px",
        },

        text: {
          textSize: "1.3em",
          textLine: "1.8em",
          textWidth: "60%",
          textMargin: "10px 25px",
        },

        links: {
          aDecoration: "none",
          aDisplay: "block",
          aBg: "linear-gradient(to right, blue, #8000ff)",
          aColor: "white",
          aWidth: "50%",
          aPadding: "12px 20px",
          aBorderRadius: "10px",
        },

        content: {
          title: "React JS",
          text: "Great Architecture and organization is what builds React JS, A technology that not only bring all the features of HTML, CSS and JavaScript combined, but enhance i as well, bringing state management, routers, and even more abstraction to your app.",
          textLink: "React JS",
          link: "https://react.dev/",
          dateTime: {
            display: "flex",
            width: "50%",
            padding: "30px",
            textAlign: "right",
          },
        },
      };

    case "change_tech_Next":
      return {
        basicSettings: {
          bg: "linear-gradient(to right, #060606, rgba(0, 0, 0, .4))",
          color: "white",
          font: "none",
        },

        header: {
          headerSize: "3.5em",
          headerPadding: "20px",
          headerMargin: "1px 5px",
        },

        text: {
          textSize: "1.3em",
          textLine: "1.8em",
          textWidth: "60%",
          textMargin: "10px 25px",
        },

        links: {
          aDecoration: "none",
          aDisplay: "block",
          aBg: "linear-gradient(to right, blue, #8000ff)",
          aColor: "white",
          aWidth: "50%",
          aPadding: "12px 20px",
          aBorderRadius: "10px",
        },

        content: {
          title: "Next.js",
          text: "A framework that works with React to optimize SEO and enhance your web application.",
          textLink: "Next.js",
          link: "https://nextjs.org/",
          dateTime: {
            display: "flex",
            width: "50%",
            padding: "30px",
            textAlign: "right",
          },
        },
      };

    case "change_tech_SASS":
      return {
        basicSettings: {
          bg: "linear-gradient(to right, #060606, rgba(0, 0, 0, .4))",
          color: "white",
          font: "none",
        },

        header: {
          headerSize: "3.5em",
          headerPadding: "20px",
          headerMargin: "1px 5px",
        },

        text: {
          textSize: "1.3em",
          textLine: "1.8em",
          textWidth: "60%",
          textMargin: "10px 25px",
        },

        links: {
          aDecoration: "none",
          aDisplay: "block",
          aBg: "linear-gradient(to right, blue, #8000ff)",
          aColor: "white",
          aWidth: "50%",
          aPadding: "12px 20px",
          aBorderRadius: "10px",
        },

        content: {
          title: "SASS",
          text: "Preprocessor of CSS that brings programming to the stylesheets of CSS, with handy and different ways to write styles, including mixins, partials and even programming features such as variables and strucutures.",
          textLink: "SASS",
          link: "https://sass-lang.com/",
          dateTime: {
            display: "flex",
            width: "50%",
            padding: "30px",
            textAlign: "right",
          },
        },
      };

    case "change_tech_GSAP":
      return {
        basicSettings: {
          bg: "linear-gradient(to right, #060606, rgba(0, 0, 0, .4))",
          color: "white",
          font: "none",
        },

        header: {
          headerSize: "3.5em",
          headerPadding: "20px",
          headerMargin: "1px 5px",
        },

        text: {
          textSize: "1.3em",
          textLine: "1.8em",
          textWidth: "60%",
          textMargin: "10px 25px",
        },

        links: {
          aDecoration: "none",
          aDisplay: "block",
          aBg: "linear-gradient(to right, blue, #8000ff)",
          aColor: "white",
          aWidth: "50%",
          aPadding: "12px 20px",
          aBorderRadius: "10px",
        },

        content: {
          title: "GSAP",
          text: "A JavaScript library that makes the animations of your website more manageable, bringing countless of methods to animate and control colors, positions and triggers of the elements of your site, adding more tools to create a better experience.",
          textLink: "GSAP",
          link: "https://gsap.com/",
          dateTime: {
            display: "flex",
            width: "50%",
            padding: "30px",
            textAlign: "right",
          },
        },
      };

    case "change_tech_Jest":
      return {
        basicSettings: {
          bg: "linear-gradient(to right, #060606, rgba(0, 0, 0, .4))",
          color: "white",
          font: "none",
        },

        header: {
          headerSize: "3.5em",
          headerPadding: "20px",
          headerMargin: "1px 5px",
        },

        text: {
          textSize: "1.3em",
          textLine: "1.8em",
          textWidth: "60%",
          textMargin: "10px 25px",
        },

        links: {
          aDecoration: "none",
          aDisplay: "block",
          aBg: "linear-gradient(to right, blue, #8000ff)",
          aColor: "white",
          aWidth: "50%",
          aPadding: "12px 20px",
          aBorderRadius: "10px",
        },

        content: {
          title: "Jest",
          text: "Easy tests for your applications is with Jest, a simple tool that shows the outputs of your functions and methods and predict precisely what will happen with your algorithms and displays.",
          textLink: "Jest",
          link: "https://jestjs.io/",
          dateTime: {
            display: "flex",
            width: "50%",
            padding: "30px",
            textAlign: "right",
          },
        },
      };

    case "change_tech_Redux":
      return {
        basicSettings: {
          bg: "linear-gradient(to right, #060606, rgba(0, 0, 0, .4))",
          color: "white",
          font: "none",
        },

        header: {
          headerSize: "3.5em",
          headerPadding: "20px",
          headerMargin: "1px 5px",
        },

        text: {
          textSize: "1.3em",
          textLine: "1.8em",
          textWidth: "60%",
          textMargin: "10px 25px",
        },

        links: {
          aDecoration: "none",
          aDisplay: "block",
          aBg: "linear-gradient(to right, blue, #8000ff)",
          aColor: "white",
          aWidth: "50%",
          aPadding: "12px 20px",
          aBorderRadius: "10px",
        },

        content: {
          title: "Redux",
          text: "State management at its finest: Redux is a tool that makes your structure more cohesive. It creates stores that connect with all the components of your React app and saves all the slices of your application.",
          textLink: "Redux",
          link: "https://redux.js.org/",
          dateTime: {
            display: "flex",
            width: "50%",
            padding: "30px",
            textAlign: "right",
          },
        },
      };

    case "change_tech_Python":
      return {
        basicSettings: {
          bg: "linear-gradient(to right, #060606, rgba(0, 0, 0, .4))",
          color: "white",
          font: "none",
        },

        header: {
          headerSize: "3.5em",
          headerPadding: "20px",
          headerMargin: "1px 5px",
        },

        text: {
          textSize: "1.3em",
          textLine: "1.8em",
          textWidth: "60%",
          textMargin: "10px 25px",
        },

        links: {
          aDecoration: "none",
          aDisplay: "block",
          aBg: "linear-gradient(to right, blue, #8000ff)",
          aColor: "white",
          aWidth: "50%",
          aPadding: "12px 20px",
          aBorderRadius: "10px",
        },

        content: {
          title: "Python",
          text: "Back-end development with a high-level programming language that is widely used and efficient for data processing and adding to the building of a full applications.",
          textLink: "Python",
          link: "https://www.python.org/",
          dateTime: {
            display: "flex",
            width: "50%",
            padding: "30px",
            textAlign: "right",
          },
        },
      };

    case "change_tech_Git":
      return {
        basicSettings: {
          bg: "linear-gradient(to right, #060606, rgba(0, 0, 0, .4))",
          color: "white",
          font: "none",
        },

        header: {
          headerSize: "3.5em",
          headerPadding: "20px",
          headerMargin: "1px 5px",
        },

        text: {
          textSize: "1.3em",
          textLine: "1.8em",
          textWidth: "60%",
          textMargin: "10px 25px",
        },

        links: {
          aDecoration: "none",
          aDisplay: "block",
          aBg: "linear-gradient(to right, blue, #8000ff)",
          aColor: "white",
          aWidth: "50%",
          aPadding: "12px 20px",
          aBorderRadius: "10px",
        },

        content: {
          title: "Git",
          text: "An essential tool for project management and version control that made web development safer. As an application grow, so do the packages and features of such, there is where Git fits in, it's a useful tool for controlling the versions of your software.",
          textLink: "Git",
          link: "https://git-scm.com/",
          dateTime: {
            display: "flex",
            width: "50%",
            padding: "30px",
            textAlign: "right",
          },
        },
      };

    default:
      return state;
  }
};
