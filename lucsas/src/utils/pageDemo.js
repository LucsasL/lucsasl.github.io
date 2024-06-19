export const techObj = {
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
  },
};


export const reducer = (state, action) => {
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
            display: "block",
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
          title: "HTML + CSS",
          text: "A combination with the stylesheets of HTML and CSS do the work for static websites, making possible to add layouts, positions, responsiveness and animations.",
          textLink: "CSS",
          link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
          dateTime: {
            display: "flex",
            padding: "30px",
            textAlign: "right",
            position: "absolute"
          }
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
          text: "Work In Progress",
          textLink: "TypeScript",
          link: "https://www.typescriptlang.org/",
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
          text: "The technology that make things more interesting and add relevant features to a dynamic experience. With all of it's libraries, frameworks and DOM Manipulation bringing value, making the tech essential for web development.",
          textLink: "SASS",
          link: "https://sass-lang.com/",
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
          text: "Animation to your website ",
          textLink: "GSAP",
          link: "https://gsap.com/",
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
          text: "The technology that make things more interesting and add relevant features to a dynamic experience. With all of it's libraries, frameworks and DOM Manipulation bringing value, making the tech essential for web development.",
          textLink: "Jest",
          link: "https://jestjs.io/",
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
          text: "State Management that makes the structure more put together",
          textLink: "Redux",
          link: "https://redux.js.org/",
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
          text: "The technology that make things more interesting and add relevant features to a dynamic experience. With all of it's libraries, frameworks and DOM Manipulation bringing value, making the tech essential for web development.",
          textLink: "Python",
          link: "https://www.python.org/",
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
          text: "An essential tool for project management and version control,",
          textLink: "Git",
          link: "https://git-scm.com/",
        },
      };

    default:
      return state;
  }
};
