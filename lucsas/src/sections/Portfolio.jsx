import { useState, useEffect, useRef } from "react";
import { webProjectsSect } from "../utils/data";

// Components Import
import ProjectCont from "../components/PortfolioSectComps/projectCont";

// Destructuring
const { projects } = webProjectsSect;

function Portfolio() {
  const [projectBoxIntersect, setProjectBoxIntersect] = useState(false);
  const project = useRef();
  console.log(webProjectsSect);
  console.log(webProjectsSect.projects);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setProjectBoxIntersect(entry.isIntersecting);
        }
      });
    });

    observer.observe(project.current);
  }, []);

  return (
    <>
      <section id="portfolio">
        <div>
          <div
            className="blockquote"
            ref={project}
            style={
              projectBoxIntersect
                ? {
                    opacity: 1,
                    transition: "all 1s ease",
                  }
                : {
                    opacity: 0,
                    transition: "all 1s ease",
                  }
            }
          >
            <h1 className="big">In what projects have you used your skills?</h1>
          </div>

          <div className="projCont">
            {projects.map(() => {
              return <ProjectCont />;
            })}
          </div>

          <div className="blockquote">
            <h4 className="big">More projects coming soon...</h4>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
