"use client";

// Hooks Import
import React, {
  useState,
  useRef,
  useEffect,
} from "react";
import Image from "next/image";

// Data Import
import { webAboutSect } from "../utils/data";

// Data Destructuring
const { aboutImg } = webAboutSect;

function About() {
  // States
  const [aboutIntersect, setAboutIntersect] = useState<boolean>(false);

  // Refs
  const aboutInfo = useRef<HTMLDivElement>(null);
  const aboutSect = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This creates an instance of the intersection observer object, used to check if the screen of the user is intersecting with some element. In this case, It checks the element is intersecting with the user's screen and changes teh "aboutIntersect" to true, rendering the animation
    const element = aboutInfo.current as Element | null;
    if (!element) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAboutIntersect(entry.isIntersecting);
        }
      });
    });

    observer.observe(element);
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

            <p>
              I work as a Front-End Web Developer, my expertise lies in crafting
              dynamic, visually appealing, and user-friendly web applications.
            </p>

            <p>
              Since I began, I&apos;ve been studying topics in the field of
              programming for a while now, always looking to improve and deliver
              what is necessary to enhance my applications. My GitHub shows how
              much effort I put into really understanding the technologies.
            </p>

            <p>
              Having gained substantial experience in my abilities, I am now
              looking to work as a Developer. My job and commitment goes to give
              results, whether this being coding, projecting, or giving ideas.
            </p>

            <p>What do you thing? Can we grow together?</p>
          </div>

          {/* About Image */}
          <div className="img-div" style={changeVisibility("100%")}>
            <picture>
              <figure>
                <Image src={aboutImg} alt="Lucsas Chilling" draggable="false" />
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
