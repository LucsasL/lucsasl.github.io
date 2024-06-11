// Image Import
import logo from "../img/lucsas-logo.webp";

function HeaderLogo() {
  const lucsasDesc = "Lucsas Web Developer";

  return (
    <>
      <div className="logoDiv">
        <abbr title={lucsasDesc}>
          <a href="https://lucsas.vercel.app" target="_self">
            <figure>
              <img src={logo} alt={lucsasDesc} />
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