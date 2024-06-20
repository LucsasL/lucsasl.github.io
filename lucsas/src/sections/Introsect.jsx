import resume from "./resume.pdf";
import { webIntroSect } from "../utils/data";
const { socialMedias } = webIntroSect;

function Introsect() {

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
                  Sup, I'm
                </span>{" "}
                <br />
                <span className="nickname">Lucsas</span>
                <span className="cursiveWords">Lucas Lira</span>
              </h1>
              <h2 className="fancy intro-h2">Web Developer</h2>

              <p>
                I create and optimize websites with React and JavaScript,
                delivering the best to make good software that solves real
                problems.
              </p>

              <button id="skillsResume">
                <a
                  href={resume}
                  download={resume}
                >
                  Download Resume
                </a>
              </button>
            </div>
            <div id="socials">
              {
                socialMedias.map(({ link, name, img }, index) => {
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
                })
              }
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