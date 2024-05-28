import logo from "../img/lucsas-logo.webp";

const Header = () => {
  return (
    <>
      <header>
        <div>
          <div className="logoDiv">
            <figure>
              <img src={logo} alt="Lucsas Logo" />
              <h1 class="headerName">
                Lucsas
              </h1>
            </figure>
          </div>

          <div id="mainHeader">
            <menu>
              <nav>
                <ul>
                  <li>
                    <button>
                      <a href="./index.html#intro">Home</a>
                    </button>
                  </li>

                  <li>
                    <button>
                      <a href="./index.html#about">About</a>
                    </button>
                  </li>

                  <li>
                    <button>
                      <a href="./index.html#google">Google Ads</a>
                    </button>
                  </li>

                  <li>
                    <button>
                      <a href="./index.html#meta">Meta Ads</a>
                    </button>
                  </li>

                  <li>
                    <button id="contactButton">
                      <a href="./index.html#grow">Contact</a>
                    </button>
                  </li>
                </ul>
              </nav>
              <div id="musicDiv">
                <canvas id="musicButton"></canvas>

                {/* Music by Eric Godlow
                Music source: https://youtu.be/IUYaCe95dxw?si=KGSnNIIKn5uaWJY4 */}
                <audio preload="auto" loop id="player">
                  <source src="audio/Eric Godlow - Lo-fi Type Beat - No Love.mp3" type="audio/mp3" />
                  <source src="audio/Eric Godlow - Lo-fi Type Beat - No Love.ogg" type="audio/ogg" />
                </audio>
              </div>
            
              <div id="bgcolor">
                <label for="bgButton">
                  <input type="checkbox" id="bgButton" checked />
                  <span>
                    <i id="symbol"></i>
                    <i id="thumb"></i>
                  </span>
                </label>
              </div>
            </menu>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;