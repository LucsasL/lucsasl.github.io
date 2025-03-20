// Image Import
import { useContext } from "react";
import logo from "../../img/lucsas-logo.webp";

// Context
import { BgTheme } from "@/app/(sections)/Header";

function HeaderLogo() {
  const lucsasDesc = "Lucsas Web Developer";

  const { headerBg, headerBorder, headerBlur, headerCont } =
    useContext(BgTheme);

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
              <img src={logo} alt={lucsasDesc} draggable="false" />
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
