// Hooks
// import { useContext, useEffect, useRef } from "react";

// // Files
// import resume from "./resumeEng.pdf";

// // Context
// import { PageLang } from "../App";

// // Data Import
// import { webIntroSect } from "../utils/data";
// import { webIntroSectPort } from "../utils/dataPortuguese";

// // Data Destructuring
// const { info, socialMedias } = webIntroSect;
// const { infoPort } = webIntroSectPort;

// Threejs Imports
import { Canvas } from "@react-three/fiber";

function Introsect() {
  //   // Taking the context
  //   const { lang } = useContext(PageLang);

  //   // Refs
  //   const introComp = useRef();

  //   useEffect(() => {
  //     console.log("Language Changed");
  //   }, [introComp]);

  // Returns the intro content
  return (
    <>
      <section id="intro">
        <Canvas color={"lightblue"} camera={[35, 100, .5, 2000]}>
          <ambientLight />
          <mesh position={[1, 1, -2]}>
            <planeGeometry args={[20, 10]} />
            <meshStandardMaterial color={"green"} />
          </mesh>

          <mesh rotateX={"10deg"}>
            <planeGeometry args={[2, 1]} />
            <meshStandardMaterial color={"white"} />
          </mesh>

          <mesh position={[-1, -1, -1]}>
            <planeGeometry args={[1, 1]} />
            <meshStandardMaterial color={"white"} />
          </mesh>
        </Canvas>
      </section>
    </>
  );
}

export default Introsect;
