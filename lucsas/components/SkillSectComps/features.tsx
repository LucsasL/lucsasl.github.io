// React Icons
import { MdOutlineTypeSpecimen } from "react-icons/md";
import { PiTreeStructure } from "react-icons/pi";
import { CgStyle } from "react-icons/cg";
import { GrTest } from "react-icons/gr";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { GiProcessor } from "react-icons/gi";
import { IoIosGitBranch } from "react-icons/io";
import { SiFramework } from "react-icons/si";

// Hooks Import
import React, { type ReactNode, useContext } from "react";

// Data Import
import { Data } from "@/sections/Skills";
import { webSkillsSect } from "../../utils/data";

function Features() {
  // States
  const { featureOpacity } = useContext(Data);
  const { techStack } = webSkillsSect;
  const { techFeature } = techStack;

  // Icons Array
  const featIcons = [
    <MdOutlineTypeSpecimen className="featSvg" key={1} />,
    <PiTreeStructure className="featSvg" key={2} />,
    <SiFramework className="featSvg" key={3} />,
    <CgStyle className="featSvg" key={4} />,
    <GrTest className="featSvg" key={5} />,
    <MdOutlineRealEstateAgent className="featSvg" key={6} />,
    <GiProcessor className="featSvg" key={7} />,
    <IoIosGitBranch className="featSvg" key={8} />,
  ];

  return (
    <>
      <div className="archFeatures">
        {/* Returns the list of features */}
        {techFeature.map((desc: string, index: number): ReactNode => {
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
