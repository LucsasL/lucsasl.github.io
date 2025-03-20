// Hooks Import
import { useState, useEffect, useRef, RefObject } from "react";

// Data Import
import { webSkillsSect } from "../(utils)/data";

// Data Destructuring
const { areaDesc, sectImg } = webSkillsSect;

function Areas() {
  // States
  const [infoIntersect, setInfoIntersect] = useState(false);

  // Refs
  const infoBox: RefObject<string> = useRef("");
  const areaSect: RefObject<string> = useRef("");

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
  }, [areaSect]);

  // Change visibility of the elements
  const changeVisibility = (side: string) => {
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
      <section id="area" ref={areaSect}>
        <div>
          <div className="platform">
            {/* Areas Info */}
            <div ref={infoBox} style={changeVisibility(0)}>
              <h1 className="big">
                "Front-end Web Development"
              </h1>

              <p>
                areaDesc
              </p>
            </div>

            {/* Skills Image */}
            <div className="img-div">
              <figure>
                <img
                  src={sectImg[0]}
                  alt="Web Development Service"
                  className="webdev-design"
                  draggable="false"
                />
                <figcaption>Web Development Service</figcaption>
              </figure>
            </div>
          </div>

          <div className="platform">
            {/* Areas Info */}
            <div ref={infoBox} style={changeVisibility(0)}>
              <h1 className="big">
                Back-end Web Development
              </h1>

              <p>
                areaDesc
              </p>
            </div>

            {/* Skills Image */}
            <div className="img-div img-div2" style={{ order: -1 }}>
              <figure>
                <img
                  src={sectImg[1]}
                  alt="Web Development Service"
                  className="webdev-design webdev-design2"
                  draggable="false"
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
