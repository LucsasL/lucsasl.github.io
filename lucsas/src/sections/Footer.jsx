// Hooks Import
import { useContext } from "react";

// Data Import
import { webNavOptions, webNavOptionsLink, webIntroSect } from "../utils/data";
import { webNavOptionsPort } from "../utils/dataPortuguese";
import { PageLang } from "../App";

// Logo Image Import
import logo from "../img/lucsas-logo.webp";

function Footer() {
  // Data destructuring
  const { socialMedias } = webIntroSect;

  // Use Context
  const { lang } = useContext(PageLang);

  return (
    <>
      <footer>
        <div id="footerNav">
          <div id="meetMe">
            <h1>Lucas Lira</h1>

            <p>
              {lang === "English"
                ? "I work with Web Development and PPC Management, using Google Ads & Meta Ads. I'll do my best to deliver the best results possible."
                : "Trabalho com Desenvolvimento Web e Gestão de Tráfego, usando Google Ads e Meta Ads. Sempre darei o meu melhora para entregar o melhor resultado possível."}
            </p>

            {/* List of social medias */}
            <ul>
              {socialMedias.map(({ link, name, img }, index) => {
                return (
                  <li key={index}>
                    <figure>
                      <a href={link} target="_blank" rel="noopener noreferrer">
                        <img src={img} alt={name} className="icons" />
                      </a>
                    </figure>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h1>{lang === "English" ? "Quick links" : "Links Rápidos"}</h1>

            <ul>
              {webNavOptions.map((li, index) => {
                return (
                  <li key={index}>
                    <a href={`#${webNavOptionsLink[index]}`}>
                      {lang === "English" ? li : webNavOptionsPort[index]}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div id="credits">
          <div>
            <figure>
              <img
                src={logo}
                alt="Lucsas Logo"
                style={{ width: "75px", height: "75px" }}
              />
            </figure>
          </div>

          <p>
            {lang === "English" ? "Built by" : "Desenvolvido por"}{" "}
            <a
              href="http://github.com/lucsasl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lucsas
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
