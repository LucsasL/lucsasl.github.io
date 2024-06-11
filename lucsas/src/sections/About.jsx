// Hooks Import
import { useState, useRef, useEffect } from "react";

function About() {
  const [aboutIntersect, setAboutIntersect] = useState(false);
  const aboutInfo = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAboutIntersect(entry.isIntersecting);
        } else {
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

            <p>
              I work as a{" "}
              <em style={{ fontWeight: "bold" }}>Pay-Per-Click Manager,</em> a
              professional which main function is to create, manage and
              optimizing ads campaign in different online advertising softwares,
              but the most important function, is to bring results for my
              clients.
            </p>

            <p>
              I've been studying topics surrounding the fields of Digital
              Marketing and Programming, always looking to improve and get
              better in delivering what you need.
            </p>

            <p>
              My job and commitment goes to give results, whether this being
              conversions, engagement, leads or even more recognition to your
              work.
            </p>

            <p>What do you thing? Can we grow together?</p>
          </div>

          <div className="img-div" style={changeVisibility("100%")}>
            <figure>
              {/* <iframe
                src="https://my.spline.design/untitled-1cb26d4fcf3ebd2bc106efd6a761ebbc/"
                title="Lucsas Mascot"
                width="100%"
                height="100%"
                id="mascot"
              ></iframe> */}
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;