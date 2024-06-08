// Hooks Import
import { useReducer } from "react";

// Images Import
import notebook from "../img/google-ads-design.svg";

import { webSkillsSect } from "../utils/data";
const { sectTitle, sectImg, techStack } = webSkillsSect;
const { techDesc } = techStack;

function reducer(state, action) {
    switch (action) {
      case "change_tech_HTML":
        state = {
          title: techStack.tech[0],
          text: techDesc[0],
        };
        return;

      case "change_tech_CSS":
        state = {
          title: techStack.tech[1],
          text: techDesc[1],
        };
        return;

      case "change_tech_JS":
        state = {
          title: techStack.tech[2],
          text: techDesc[2],
        };
        return;

      case "change_tech_React":
        state = {
          title: techStack.tech[3],
          text: techDesc[3],
        };
        return;

      case "change_tech_GSAP":
        state = {
          title: techStack.tech[4],
          text: techDesc[4],
        };
        return;

      case "change_tech_Redux":
        state = {
          title: techStack.tech[5],
          text: techDesc[5],
        };
        return;

      case "change_tech_Git":
        state = {
          title: techStack.tech[6],
          text: techDesc[6],
        };
        return;

      default:
        return;
    }
}

function Skills() {
  const [activeTech, dispatch] = useReducer(reducer, { 
    bg: "white",
    color: "black",
    font: "serif",
    aDecoration: "underline",
   });

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
  }

  return (
    <>
      <section id="area">
        <div>
          <div className="platform">
            <div>
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
          <div className="blockquote">
            <h1 className="big block-text">{sectTitle}</h1>
          </div>

          <div className="langsCont">
            <div className="techStack">
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
            <div className="laptop">
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