// Hooks Import
import { useState, useRef, useEffect, useContext } from "react";

// Context
import { PageLang } from "../App";

// Data Import
import { webAboutSect } from "../utils/data";
import { webAboutSectPort } from "../utils/dataPortuguese";

// Data Desestructuring
const { sectTitle, aboutText, aboutImg } = webAboutSect;
const { sectTitlePort, aboutTextPort } = webAboutSectPort;

function About() {
  // States
  const [aboutIntersect, setAboutIntersect] = useState(false);

  // Refs
  const aboutInfo = useRef();
  const aboutSect = useRef();

  // Destructuring
  const { lang } = useContext(PageLang);

  useEffect(() => {
    // This creates an instance of the intersection observer object, used to check if the screen of the user is intersecting with some element. In this case, It checks the element is intersecting with the user's screen and changes teh "aboutIntersect" to true, rendering the animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAboutIntersect(entry.isIntersecting);
        }
      });
    });

    observer.observe(aboutInfo.current);
  }, [aboutSect]);

  // Change visibility of elements
  const changeVisibility = (side) => {
    return aboutIntersect
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
      <div id="about-style"></div>
      <section id="about" className="hidden" ref={aboutSect}>
        <div>
          {/* Information Division */}
          <div ref={aboutInfo} style={changeVisibility("-100%")}>
            <h1 className="big">
              {lang === "English" ? (
                <>
                  {sectTitle} <span className="fancy">Lucas Lira</span>
                </>
              ) : (
                <>
                  {sectTitlePort} <span className="fancy">Lucas Lira</span>
                </>
              )}
            </h1>

            {lang === "English"
              ? aboutText.map((p) => {
                  return <p>{p}</p>;
                })
              : aboutTextPort.map((p) => {
                  return <p>{p}</p>;
                })}
          </div>

          {/* About Image */}
          <div className="img-div" style={changeVisibility("100%")}>
            <picture>
              <figure>
                {/* <iframe
                  src="https://my.spline.design/untitled-1cb26d4fcf3ebd2bc106efd6a761ebbc/"
                  title="Lucsas Chilling"
                  width="100%"
                  height="100%"
                  id="mascot"
                ></iframe> */}
                <img src={aboutImg} alt="Lucsas Chilling" draggable="false" />
                <figcaption>Lucsas Chilling</figcaption>
              </figure>
            </picture>
          </div>
        </div>

        <div className="range"></div>
      </section>
    </>
  );
}

export default About;
