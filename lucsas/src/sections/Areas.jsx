// Hooks Import
import { useState, useEffect, useRef, useContext } from "react";

// Context
import { PageLang } from "../App";

// Data Import
import { webSkillsSect } from "../utils/data";
import { webSkillsSectPort } from "../utils/dataPortuguese";

// Data Destructuring
const { areaDesc, sectImg } = webSkillsSect;
const { areaDescPort } = webSkillsSectPort;

function Areas() {
  // States
  const [infoIntersect, setInfoIntersect] = useState(false);

  // Refs
  const infoBox = useRef();

  // Context
  const { lang } = useContext(PageLang);

  useEffect(() => {
    // This creates an instance of the intersection observer object, used to check if the screen of the user is intersecting with some element. In this case, It checks the element is intersecting with the user's screen and changes teh "infoIntersect" to true, rendering the animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInfoIntersect(entry.isIntersecting);
        }
      });
    });

    observer.observe(infoBox.current);
  }, []);

  // Change visibility of the elements
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
            {/* Areas Info */}
            <div ref={infoBox} style={changeVisibility(0)}>
              <div className="blockquote">
                <h1 className="big">
                  {lang === "English"
                    ? "Front-end Web Developer"
                    : "Desenvolvedor Web Front-end"}
                </h1>
              </div>

              <p>{lang === "English" ? areaDesc : areaDescPort}</p>
            </div>

            {/* Skills Image */}
            <div className="img-div">
              <figure>
                <img
                  src={sectImg}
                  alt="Web Development Service"
                  id="webdev-design"
                />
                <figcaption>Web Development Service</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Areas;
