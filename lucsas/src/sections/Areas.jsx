// Hooks Import
import { useState, useEffect, useRef, useContext } from "react";

// Context
import { PageLang } from "../App";

// Data Import
import { webSkillsSect } from "../utils/data";
import { webSkillsSectPort } from "../utils/dataPortuguese";

// Data Desestructuring
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
                <h1 className="big">
                  {lang === "English"
                    ? "Front-end Web Developer"
                    : "Desenvolvedor Web Front-end"}
                </h1>
              </div>

              <p>{lang === "English" ? areaDesc : areaDescPort}</p>
            </div>

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
