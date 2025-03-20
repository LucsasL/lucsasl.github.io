// Hooks Import
import { useState, useRef, useEffect, RefObject } from "react";

// Data Import
import { webAboutSect } from "../(utils)/data";

// Data Desestructuring
const { sectTitle, aboutText, aboutImg } = webAboutSect;

function About() {
  // States
  const [aboutIntersect, setAboutIntersect] = useState(false);

  // Refs
  const aboutInfo: RefObject<string> = useRef("");
  const aboutSect: RefObject<string> = useRef("");

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
  const changeVisibility = (side: string) => {
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
              <>
                Hi, My name is <span className="fancy">Lucas Lira</span>
              </>
            </h1>

            {aboutText.map((p: string, index: number) => {
              return <p key={index}>{p}</p>;
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

        <div className="range">
          <div>
            Web Development | Web Development | Web Development | Web
            Development | Web Development | Web Development | Web Development |
            Web Development| Web Development| Web Development | Web Development
            | Web Development | Web Development | Web Development | Web
            Development | Web Development| Web Development| Web Development
          </div>
        </div>
        <div className="range range2">
          <div>
            Web Development | Web Development | Web Development | Web
            Development | Web Development | Web Development | Web Development |
            Web Development| Web Development| Web Development | Web Development
            | Web Development | Web Development | Web Development | Web
            Development | Web Development| Web Development| Web Development
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
