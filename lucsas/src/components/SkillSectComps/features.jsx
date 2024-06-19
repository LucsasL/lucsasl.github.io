// React Icons
import { MdOutlineTypeSpecimen } from "react-icons/md";
import { PiTreeStructure } from "react-icons/pi";
import { CgStyle } from "react-icons/cg";
import { GrTest } from "react-icons/gr";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { GiProcessor } from "react-icons/gi";
import { IoIosGitBranch } from "react-icons/io";

// Hooks Import
import { useContext } from "react";

// Data Import
import { Data } from "../../sections/Skills";
import { webSkillsSect } from "../../utils/data";

function Features() {
  const { featureOpacity } = useContext(Data);
  const { techStack } = webSkillsSect;
  const { techFeature } = techStack;

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

  return (
    <>
      <div className="archFeatures">
        {techFeature.map((desc, index) => {
          return (
            <abbr title={desc} key={index}>
              <div
                className="feature"
                style={{ opacity: featureOpacity[index] ? 1 : 0 }}
              >
                {featIcons[index]}
              </div>
            </abbr>
          );
        })}
      </div>
    </>
  );
}

export default Features;