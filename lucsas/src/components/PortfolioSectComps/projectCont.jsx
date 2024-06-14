import { webProjectsSect } from "../../utils/data";
const { projects } = webProjectsSect;

function ProjectCont({
  index,
  project,
  projLink,
  projTitle,
  projSubtitle,
  projDesc,
  projImgDesc,
  techStack,
  techStackImg,
  projImg,
  projectBoxIntersect,
}) {
  return (
    <>
      <div
        className="proj"
        key={index}
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
        <div className="projInfo">
          <h2 className="big">
            {projTitle}
            <span style={{ fontSize: ".5em", marginLeft: "15px" }}>
              (Work In Progress)
            </span>
          </h2>

          <h3>{projSubtitle}</h3>

          <p>{projDesc}</p>

          <div className="techStackCont">
            {projects.techStack.map((t, index) => {
              return (
                <abbr title={t} key={index}>
                  <picture>
                    <img src={techStackImg[index]} alt={t} />
                  </picture>
                </abbr>
              );
            })}
          </div>

          <div>
            <button>
              <a href={projLink} target="_blank" rel="noopener noreferrer">
                Visit Project
              </a>
            </button>
            <button className="detailBtn">
              <a
                href="https://github.com/lucsasl"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  alert(
                    "Work in Progress, I'm finishing creating these sections"
                  )
                }
              >
                See details
              </a>
            </button>
          </div>
        </div>

        <div className="projImg">
          <picture key={index}>
            <img src={projImg} alt={projImgDesc} />
          </picture>
        </div>
      </div>
    </>
  );
}

export default ProjectCont;
