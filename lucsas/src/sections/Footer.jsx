// Data Import
import { webNavOptions, webNavOptionsLink, webIntroSect } from "../utils/data";

// Logo Image Import
import logo from "../img/lucsas-logo.webp";

function Footer() {
  // Data destructuring
  const { socialMedias } = webIntroSect;

  return (
    <>
      <footer>
        <div id="footerNav">
          <div id="meetMe">
            <h1>
              Lucas Lira
            </h1>

            <p>
              I work with Web Development and Ads Softwares, such as Google Ads & Meta Ads. Since I'm just beginning, I don't have much experience, but I'll make my best to deliver the best results possible.
            </p>

            {/* List of social medias */}
            <ul>
              {
                socialMedias.map(({ link, name, img }, index) => {
                  return (
                    <li key={index}>
                      <figure>
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={img}
                            alt={name}
                            className="icons"
                          />
                        </a>
                      </figure>
                    </li>
                  );
                })
              }
            </ul>
          </div>

          <div>
            <h1>
              Quick links
            </h1>

            <ul>
              {
                webNavOptions.map((li, index) => {
                  return (
                    <li key={index}>
                      <a href={`#${webNavOptionsLink[index]}`}>{li}</a>
                    </li>
                  );
                })
              }
            </ul>
          </div>
        </div>

        <div id="credits">
          <div>
            <figure>
              <img src={logo} alt="Lucsas Logo" style={{ width: "75px", height: "75px" }} />
            </figure>
          </div>

          <p>
            Built by <a href="http://github.com/lucsasl" target="_blank" rel="noopener noreferrer">Lucsas</a>
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer;