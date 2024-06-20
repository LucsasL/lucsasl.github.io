// Hooks Import
import { useState, useRef, useEffect } from "react";

import { webAboutSect } from "../utils/data";
const  { aboutText, aboutImg } = webAboutSect;

function About() {
  const [aboutIntersect, setAboutIntersect] = useState(false);
  const aboutInfo = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAboutIntersect(entry.isIntersecting);
        }
      });
    });

    observer.observe(aboutInfo.current);
  }, []);

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
      <section id="about" className="hidden">
        <div>
          <div ref={aboutInfo} style={changeVisibility("-100%")}>
            <h1 className="big">
              Hi, My name is <span className="fancy">Lucas Lira</span>
            </h1>

            {aboutText.map(p => {
              return (
                <p>
                  {p}
                </p>
              );
            })}
          </div>

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
                <img src={aboutImg} alt="Lucsas Chilling" />
                <figcaption>
                  Lucsas Chilling
                </figcaption>
              </figure>
            </picture>
          </div>
        </div>

        <div className="range">
          
        </div>
      </section>
    </>
  );
}

export default About;