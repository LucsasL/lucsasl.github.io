// React Icons
import { MdOutlineTypeSpecimen } from "react-icons/md";
import { PiTreeStructure } from "react-icons/pi";
import { CgStyle } from "react-icons/cg";
import { GrTest } from "react-icons/gr";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { GiProcessor } from "react-icons/gi";
import { IoIosGitBranch } from "react-icons/io";

// Hooks Import
import { useContext, useRef } from "react";

// Images Import
import notebook from "../../img/google-ads-design.svg";

// Data Import
import { Data } from "../../sections/Skills";

function Laptop() {
  // Context
  const {
    activeTech,
    techFeature,
    infoIntersect,
    changeVisibility,
    featureOpacity,
  } = useContext(Data);
  const laptopImg = useRef();

  // Icons Array
  const featIcons = [
    <MdOutlineTypeSpecimen className="featSvg" />,
    <PiTreeStructure className="featSvg" />,
    <CgStyle className="featSvg" />,
    <GrTest className="featSvg" />,
    <MdOutlineRealEstateAgent className="featSvg" />,
    <GiProcessor className="featSvg" />,
    <IoIosGitBranch className="featSvg" />,
  ];

  const changeSeason = (e) => {
    switch (e.target.innerText) {
      case "Spring":
        laptopImg.current.style.background = "url('../../img/landscape.webp')";
        return;

      case "Summer":
        laptopImg.current.style.background = "url('../../img/.webp')";
        return;

      case "Fall":
        laptopImg.current.style.background = "url('../../img/.webp')";
        return;

      case "Winter":
        laptopImg.current.style.background = "url('../../img/.webp')";
        return;

      default:
        return;
    }
  };

  return (
    <>
      <div
        className="laptop"
        style={changeVisibility("100%", infoIntersect, 1.5)}
      >
        <div className="image" ref={laptopImg}></div>
        <picture>
          <figure>
            <img src={notebook} alt="Website" />
            <figcaption>Website</figcaption>
          </figure>
        </picture>
        <div
          className="laptopContent"
          style={{
            background: activeTech.basicSettings.bg,
            color: activeTech.basicSettings.color,
            font: activeTech.basicSettings.font,
          }}
        >
          <div className="pageHeader">
            <ul>
              <li onClick={(e) => changeSeason(e)}>Spring</li>
              <li onClick={(e) => changeSeason(e)}>Summer</li>
              <li onClick={(e) => changeSeason(e)}>Fall</li>
              <li onClick={(e) => changeSeason(e)}>Winter</li>
            </ul>
          </div>
          <div
            className="mainPageCont"
            style={{
              alignSelf: "center",
            }}
          >
            <h2
              style={{
                fontSize: activeTech.header.headerSize,
                padding: activeTech.header.headerPadding,
                margin: activeTech.header.headerMargin,
                boxShadow: activeTech.header.headerBoxShadow,
              }}
            >
              {`This is ${activeTech.content.title}`}
            </h2>
            <p
              style={{
                fontSize: activeTech.text.textSize,
                lineHeight: activeTech.text.textLine,
                width: activeTech.text.textWidth,
                margin: activeTech.text.textMargin,
              }}
            >
              {activeTech.content.text}
            </p>
            <a
              href={activeTech.content.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: activeTech.links.aDisplay,
                textDecoration: activeTech.links.aDecoration,
                background: activeTech.links.aBg,
                color: activeTech.links.aColor,
                width: activeTech.links.aWidth,
                padding: activeTech.links.aPadding,
                borderRadius: activeTech.links.aBorderRadius,
                textAlign: "center",
              }}
            >
              Learn more about {activeTech.content.textLink}
            </a>
          </div>
        </div>
      </div>

      <div className="archFeatures">
        {techFeature.map((desc, index) => {
          return (
            <abbr title={desc} key={index}>
              <div className="feature" style={{ opacity: featureOpacity[index] ? 1 : 0 }}>
                {featIcons[index]}
              </div>
            </abbr>
          );
        })}
      </div>
    </>
  );
}

export default Laptop;
