"use client";

// Hooks Import
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

// Data Import
import { webSkillsSect } from "../utils/data";

// Data Destructuring
const { sectImg } = webSkillsSect;

function Areas() {
  // States
  const [infoIntersect, setInfoIntersect] = useState<boolean>(false);

  // Refs
  const infoBox = useRef<HTMLDivElement>(null);
  const areaSect = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This creates an instance of the intersection observer object, used to check if the screen of the user is intersecting with some element. In this case, It checks the element is intersecting with the user's screen and changes teh "infoIntersect" to true, rendering the animation
    const element = infoBox.current as Element | null;
    if (!element) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInfoIntersect(entry.isIntersecting);
        }
      });
    });

    observer.observe(element);
  }, [areaSect]);

  // Change visibility of the elements
  const changeVisibility = (side: number) => {
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
            <div
              className="info-area-div"
              ref={infoBox}
              style={changeVisibility(0)}
            >
              <h1 className="big">Front-end Web Development</h1>

              <p>
                Looking to work and contribute in the Web Development area I
                have honed my skills in HTML, CSS, JavaScript, React JS, GSAP,
                Redux, and Git. I&apos;m a former programmer focusing in the
                Front-end.
              </p>
            </div>

            {/* Skills Image */}
            <div className="img-div">
              <figure>
                <Image
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
            <div
              className="info-area-div"
              ref={infoBox}
              style={changeVisibility(0)}
            >
              <h1 className="big">Back-end Web Development</h1>

              <p>
                I am studying and improving my back-end skills, both using
                Node.js and Express, as well as Python and some databases. For
                now I don&apos;t have much done in this area, but I&apos;m
                looking forward to get good at it.
              </p>
            </div>

            {/* Skills Image */}
            <div className="img-div img-div2" style={{ order: -1 }}>
              <figure>
                <Image
                  src={sectImg[1]}
                  alt="Web Development Service"
                  className="webdev-design webdev-design2"
                  draggable="false"
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
