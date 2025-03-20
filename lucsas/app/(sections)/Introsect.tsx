// Files
import resume from "@/app/(sections)/resumeEng.pdf";

// Data Import
import { webIntroSect } from "../(utils)/data";

// Data Destructuring
const { info, socialMedias } = webIntroSect;

function Introsect() {
  // Returns the intro content
  return (
    <>
      <section id="intro">
        {/* <div className="intro3D"> // 3D Render of a room
          <iframe src='https://my.spline.design/building-39f31bffe96091b3362e6606e3cbfd11/' title="3d" id="room3d" ></iframe>
        </div> */}

        <div>
          <div className="intro">
            {/* Intro main content */}
            <div id="introducing">
              <h1>
                <span style={{ fontSize: ".9em", lineHeight: "1em" }}>
                  {info.h1Span1}
                </span>{" "}
                <br />
                <span className="nickname">Lucsas</span>
                <span className="cursiveWords">Lucas Lira</span>
              </h1>
              <h2 className="fancy intro-h2">{info.h2}</h2>

              <p>{info.text}</p>

              {/* <button id="skillsResume">
                <a href={resume} download={resume}>
                  {info.downloadButt}
                </a>
              </button> */}
            </div>

            {/* Social Media Links */}
            <div id="socials">
              {socialMedias.map(({ link, name, img }, index) => {
                return (
                  <div key={index}>
                    <figure>
                      <figcaption>{name}</figcaption>
                      <a href={link} target="_blank" rel="noopener noreferrer">
                        <img
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
                  <img
                    src={webIntroSect.introImg}
                    alt="I'm Lucsas, The GUY!"
                    draggable="false"
                  />
                  <figcaption>I'm Lucsas, The GUY!</figcaption>
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
