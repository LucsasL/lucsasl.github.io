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
              <h2 className="fancy intro-h2">PPC Manager</h2>

              <p>
                I create and optimize adverts campaign in Google Ads and Meta
                Ads, delivering the best to engage and convert.
              </p>

              <button id="skillsResume">
                <a href="#" download="">
                  Download Resume
                </a>
              </button>
            </div>
            <div id="socials">
              {socialMedias.map(({ link, name, img }) => {
                return (
                  <div>
                    <figure>
                      <figcaption></figcaption>
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
                  <img src="" alt="I'm Lucsas, The GUY!" />
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