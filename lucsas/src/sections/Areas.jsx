// Hooks Import
import { useState, useReducer, useEffect, useRef } from "react";

// Data Import
import { webSkillsSect } from "../utils/data";
const { sectImg } = webSkillsSect;

function Areas() {
  const [infoIntersect, setInfoIntersect] = useState(false);
  const infoBox = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInfoIntersect(entry.isIntersecting);
        }
      });
    });

    observer.observe(infoBox.current);
  }, []);

  const changeVisibility = (side) => {
    return infoIntersect
      ? {
          opacity: 1,
          transition: "all 1.5s ease",
        }
      : {
          opacity: 0,
          transition: "all 1.5s ease",
          transform: `translateX(${side})`,
        };
  };

  return (
    <>
      <section id="area">
        <div>
          <div className="platform">
            <div ref={infoBox} style={changeVisibility(0)}>
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
                  alt="Web Development Service"
                  id="webdev-design"
                />
                <figcaption>
                  Web Development Service
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Areas;
