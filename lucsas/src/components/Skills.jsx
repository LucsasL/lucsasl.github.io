import { webSkillsSect } from "../utils/data";

// Images Import
import notebook from "../img/google-ads-design.svg";

const { sectTitle, techStack } = webSkillsSect;

function Skills() {
  return (
    <>
      <section id="area">
        <div>
          <div className="platform">
            <div>
              <h1 className="big">
                Front-End Web Developer
              </h1>

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
          <h1 className="big">
            {sectTitle}
          </h1>
          
          <div className="techStack">
            {
              techStack.imgs.map((t, index) => {
                return (
                  <picture>
                    <img src={t} alt={techStack.tech[index]} />
                  </picture>
                );
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Skills;