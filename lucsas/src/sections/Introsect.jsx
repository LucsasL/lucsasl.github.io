// Hooks
import { useContext } from "react";

// Files
import resume from "./resume.pdf";

// Context
import { PageLang } from "../App";

// Data
import { webIntroSect } from "../utils/data";
import { webIntroSectPort } from "../utils/dataPortuguese";

// Data Destructuring
const { info, socialMedias } = webIntroSect;
const { infoPort } = webIntroSectPort;

function Introsect() {
  const { lang } = useContext(PageLang);

  return (
    <>
      <section id="intro">
        {/* <div className="intro3D">
          <iframe src='https://my.spline.design/building-39f31bffe96091b3362e6606e3cbfd11/' title="3d" id="room3d" ></iframe>
        </div> */}

        <div>
          <div className="intro">
            <div id="introducing">
              <h1>
                <span style={{ fontSize: ".9em", lineHeight: "1em" }}>
                  {lang === "English" ? info.h1Span1 : infoPort.h1Span1}
                </span>{" "}
                <br />
                <span className="nickname">Lucsas</span>
                <span className="cursiveWords">Lucas Lira</span>
              </h1>
              <h2 className="fancy intro-h2">
                {lang === "English" ? info.h2 : infoPort.h2}
              </h2>

              <p>{lang === "English" ? info.text : infoPort.text}</p>

              <button id="skillsResume">
                <a href={resume} download={resume}>
                  {lang === "English" ? info.downloadButt : infoPort.downloadButt}
                </a>
              </button>
            </div>
            <div id="socials">
              {socialMedias.map(({ link, name, img }, index) => {
                return (
                  <div key={index}>
                    <figure>
                      <figcaption>{name}</figcaption>
                      <a href={link} target="_blank" rel="noopener noreferrer">
                        <img src={img} alt={name} className="icons" />
                      </a>
                    </figure>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="introPresent">
            <div className="picCont">
              <picture>
                <figure>
                  <img src={webIntroSect.introImg} alt="I'm Lucsas, The GUY!" />
                  <figcaption>I'm Lucsas, The GUY!</figcaption>
                </figure>
              </picture>
            </div>

            <div className="picCont"></div>
          </div>
        </div>

        <div className="scroll-anim">
          <div></div>
        </div>
      </section>
    </>
  );
}

export default Introsect;
