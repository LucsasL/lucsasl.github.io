// Hooks Import
import { useState, useEffect, useRef } from "react";

// Data Import
import { webSkillsSect } from "../utils/data";
const { areaDesc, sectImg } = webSkillsSect;

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
                {areaDesc}
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
