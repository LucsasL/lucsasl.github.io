import notebook from "../img/google-ads-design.svg";
import meta from "../img/meta-ads-design-mobile.webp";

function Skills() {
  return (
    <>
      <section id="google">
        <div className="cont">
          <div className="platform">
            <div className="hidden1">
              <h1 className="big">
                Google Ads Specialist
              </h1>

              <p>
                Meticulously target your audience through the lens of <strong className="fancy">Google Ads,</strong> ensuring that every click counts. Your business spotted by the right customer by the right advert. Using <strong>Audience Segmentation</strong> we can track all the different types of interests and ideas, and use these statistics to bring more potential clients to you.
              </p>
            </div>

            <div className="img-div hidden2">
              <figure>
                <img src={notebook} alt="Google Ads Service" id="google-design" />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section id="meta">
        <div className="cont">
          <div className="platform">
            <div>
              <h1 className="big hidden1">
                Reach beyond the bounds with Meta
              </h1>

              <p>
                Elevate your social media presence and connect with your audience on a deeper level through <strong className="fancy">Meta Ads.</strong> From Facebook to Instagram, we can implement targeting strategies that resonate with your audience, driving conversions in the social spaces where your customers live, share, and interact.
              </p>
            </div>

            <div className="img-div hidden">
              <figure>
                <picture>
                  <source media="(min-width: 1200px)" srcSet="img/meta-ads-design.webp" type="image/webp" />
                  <img src={meta} alt="Meta Ads Service" style={{width: "500px"}} />
                </picture>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Skills;