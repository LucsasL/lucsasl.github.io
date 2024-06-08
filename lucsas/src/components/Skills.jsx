// Hooks Import
import { useReducer } from "react";

import { webSkillsSect } from "../utils/data";

// Images Import
import notebook from "../img/google-ads-design.svg";

const { sectTitle, techStack } = webSkillsSect;

function Skills() {
  // const [activeTech, setActiveTech] = useReducer("HTML", dispatch);

  // const changeTech = (e) => {
    // setActiveTech(techStack.tech[e.target.])
  // }

  return (
    <>
      <section id="area">
        <div>
          <div className="platform">
            <div>
              <div className="blockquote">
                <h1 className="big">
                  Front-End Web Developer
                </h1>
              </div>

              <p>
                Meticulously target your audience through the lens of <strong className="fancy">Google Ads,</strong> ensuring that every click counts. Your business spotted by the right customer by the right advert. Using <strong>Audience Segmentation</strong> we can track all the different types of interests and ideas, and use these statistics to bring more potential clients to you.
              </p>
            </div>

            <div className="img-div">
              <figure>
                <img src={notebook} alt="Google Ads Service" id="google-design" />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section id="skills">
        <div>
          <div className="blockquote">
            <h1 className="big block-text">
              {sectTitle}
            </h1>
          </div>

          <div className="langsCont">
            <div className="techStack">
              {
                techStack.imgs.map((t, index) => {
                  return (
                    <abbr title={techStack.tech[index]} key={index}>
                      <button className="tech">
                        <picture>
                          <img src={t} alt={techStack.tech[index]} />
                        </picture>
                      </button>
                    </abbr>
                  );
                })
              }
            </div>
            <div className="laptop">
              <picture>
                <figure>
                  <img src={notebook} alt="Website" />
                  <figcaption>
                    Website
                  </figcaption>
                </figure>
              </picture>

              <div className="laptopContent">
                <h1>
                  This is HTML
                </h1>

                <p>
                  A markup language that allow developers to build documents 
                  for the web, adding anchors between sites and adding basic
                  interaction to the user.
                </p>

                <a href="">Learn more about HTML</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Skills;