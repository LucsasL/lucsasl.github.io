import instaLogo from "../img/instagram-social.webp";
import githubLogo from "../img/github-social.webp";
import linkedinLogo from "../img/linkedin-social.webp";
import twitterLogo from "../img/twitter-social.webp";

import logo from "../img/lucsas-logo.webp";

function Footer() {
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

            <ul>
              <li>
                <figure>
                  <a href="https://www.instagram.com/lucsas.l/" target="_blank" rel="noopener noreferrer">
                    <img src={instaLogo} alt="Instagram" className="icons" />
                  </a>
                </figure>
              </li>

              <li>
                <figure>
                  <a href="https://github.com/LucsasL" target="_blank" rel="noopener noreferrer">
                    <img src={githubLogo} alt="GitHub" className="icons" />
                  </a>
                </figure>
              </li>

              <li>
                <figure>
                  <a href="https://www.linkedin.com/in/lucsas/?locale=en_US" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinLogo} alt="Lucsas Linkedin" className="icons" />
                  </a>
                </figure>
              </li>

              <li>
                <figure>
                  <a href="https://twitter.com/LucsasL" target="_blank" rel="noopener noreferrer">
                    <img src={twitterLogo} alt="Lucsas Twitter" className="icons" />
                  </a>
                </figure>
              </li>

            </ul>
          </div>

          <div>
            <h1>
              Quick links
            </h1>

            <ul>
              <li>
                <a href="index.html#intro">Home</a>
              </li>

              <li>
                <a href="index.html#about">About</a>
              </li>

              <li>
                <a href="index.html#google">Google Ads</a>
              </li>

              <li>
                <a href="index.html#meta">Meta Ads</a>
              </li>

              <li>
                <a href="index.html#grow">Contact</a>
              </li>
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