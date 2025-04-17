// Basic Imports
import Image from "next/image";

// Data Import
import { webIntroSect } from "../utils/data";

// Data Destructuring
const { socialMedias } = webIntroSect;

function Introsect() {
  // Returns the intro content
  return (
    <>
      <section id="intro">
        <div>
          <div className="intro">
            {/* Intro main content */}
            <div id="introducing">
              <h1>
                <span style={{ fontSize: ".9em", lineHeight: "1em" }}>
                  Sup, I&apos;m
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
                  href={"/docs/resumeEng.pdf"}
                  download={"/docs/resumeEng.pdf"}
                >
                  Download Resume
                </a>
              </button>
            </div>

            {/* Social Media Links */}
            <div id="socials">
              {socialMedias.map(({ link, name, img }, index: number) => {
                return (
                  <div key={index}>
                    <figure>
                      <figcaption>{name}</figcaption>
                      <a href={link} target="_blank" rel="noopener noreferrer">
                        <Image
                          src={img}
                          alt={name}
                          className="icons"
                          draggable="false"
                        />
                      </a>
                    </figure>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Intro Image */}
          <div className="introPresent">
            <div className="picCont">
              <picture>
                <figure>
                  <Image
                    src={webIntroSect.introImg}
                    alt="I'm Lucsas, The GUY!"
                    draggable="false"
                  />
                  <figcaption>I&apos;m Lucsas, The GUY!</figcaption>
                </figure>
              </picture>
            </div>

            <div className="picCont"></div>
          </div>
        </div>

        {/* Scroll animation icon */}
        <div className="scroll-anim">
          <div></div>
        </div>
      </section>
    </>
  );
}

export default Introsect;
