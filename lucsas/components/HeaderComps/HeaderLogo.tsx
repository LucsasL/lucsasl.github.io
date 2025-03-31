// Basic Imports
import Image from "next/image";

// Image Import
import React, { useContext } from "react";
import logo from "@/public/img/lucsas-logo.webp";

// Context
import { BgTheme } from "@/sections/Header";

// Type Imports
import { StateShape } from "@/typing";

function HeaderLogo() {
  const lucsasDesc: string = "Lucsas Web Developer";

  const { headerBg, headerBorder, headerBlur, headerCont } =
    useContext<StateShape>(BgTheme);

  return (
    <>
      <div
        className="logoDiv"
        style={{
          background: headerBg,
          backdropFilter: headerBlur,
          border: headerBorder,
        }}
        ref={headerCont}
      >
        <abbr title={lucsasDesc}>
          <a href="https://lucsas.vercel.app" target="_self">
            <figure>
              <Image src={logo} alt={lucsasDesc} draggable="false" />
              <h1>Lucsas</h1>
              <figcaption>{lucsasDesc}</figcaption>
            </figure>
          </a>
        </abbr>
      </div>
    </>
  );
}

export default HeaderLogo;
