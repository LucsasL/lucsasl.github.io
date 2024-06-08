// import { TweenMax, Power2, Power3 } from "gsap/gsap-core";
import { useState, useRef } from "react";

// Data Import
import { webNavOptions } from "../utils/data";

// Image Import
import logo from "../img/lucsas-logo.webp";

const Header = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  const inpTheme = useRef(null);
  const container = useRef(null);

  // const musicButton = document.querySelector("canvas#musicButton");
  // const audioPlayer = document.querySelector("audio#player");

  function themeChange() {
    setDarkTheme(!darkTheme);
  }

  function hasScrolled(e) {
    if (document.scrollY > 0) {
      container.current.style.background = "rgba(0, 0, 0, .5)";
      container.current.style.filter = "blur(6px)";
    }
  }

  // window.addEventListener("load", () => {
  //   /* Rendering button animation */
  //   let opt = {
  //     width: musicButton.offsetWidth,
  //     height: musicButton.offsetHeight,
  //     midY: musicButton.offsetHeight / 2,
  //     points: 20,
  //     stretch: 10,
  //     sinHeight: 0,
  //     speed: -0.1,
  //     strokeColor: "black",
  //     strokeWidth: 1.5,
  //     power: false,
  //   };

  //   musicButton.width = opt.width * 2;
  //   musicButton.height = opt.height * 2;
  //   musicButton.style.width = opt.width;
  //   musicButton.style.height = opt.height;

  //   const ctx = musicButton.getContext("2d");
  //   ctx.scale(2, 2);

  //   ctx.strokeStyle = opt.strokeColor;
  //   ctx.lineWidth = opt.strokeWidth;
  //   ctx.lineCap = "round";
  //   ctx.lineJoin = "round";

  //   let time = 0;

  //   const render = () => {
  //     window.requestAnimationFrame(render);
  //     ctx.clearRect(0, 0, opt.width, opt.height);
  //     time++;
  //     ctx.beginPath();
  //     let increment = 0;

  //     for (let i = 0; i <= opt.points; i++) {
  //       if (i <= opt.points / 2) {
  //         increment += 0.1;
  //       } else {
  //         increment += -0.1;
  //       }

  //       const x = (opt.width / opt.points) * i;
  //       const y =
  //         opt.midY +
  //         Math.sin((time * opt.speed * i) / opt.stretch) *
  //           opt.sinHeight *
  //           increment;

  //       ctx.lineTo(x, y);
  //     }

  //     ctx.stroke();
  //   };

  //   render();

  //   /* Audio play */
  //   musicButton.addEventListener("click", () => {
  //     opt.power = !opt.power;

  //     if (opt.power) {
  //       audioPlayer.play();
  //       TweenMax.to(opt, 1, {
  //         sinHeight: 10,
  //         stretch: 5,
  //         ease: Power2.easeInOut,
  //       });
  //     } else {
  //       audioPlayer.pause();
  //       TweenMax.to(opt, 1, {
  //         sinHeight: 0,
  //         stretch: 10,
  //         power: Power3.easeOut,
  //       });
  //     }
  //   });
  // });

  return (
    <>
      <header ref={container} onScroll={() => hasScrolled()}>
        <div>
          <div className="logoDiv">
            <figure>
              <img src={logo} alt="Lucsas Logo" />
              <h1 className="headerName">Lucsas</h1>
            </figure>
          </div>

          <div id="mainHeader">
            <menu>
              <nav>
                <ul>
                  {
                    webNavOptions.map((i, index) => {
                      return (
                        <li key={index}>
                          <button>
                            <a href={`./index.html#${i}`}>{i}</a>
                          </button>
                        </li>
                      );
                    })
                  }

                  {/* <li>
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
                  </li> */}
                </ul>
              </nav>

              <div id="musicDiv">
                <canvas id="musicButton"></canvas>

                {/* Music by Eric Godlow
                Music source: https://youtu.be/IUYaCe95dxw?si=KGSnNIIKn5uaWJY4 */}
                <audio preload="auto" loop id="player">
                  <source
                    src="audio/Eric Godlow - Lo-fi Type Beat - No Love.mp3"
                    type="audio/mp3"
                  />
                  <source
                    src="audio/Eric Godlow - Lo-fi Type Beat - No Love.ogg"
                    type="audio/ogg"
                  />
                </audio>
              </div>

              <div id="bgcolor">
                <label htmlFor="bgButton">
                  <input
                    type="checkbox"
                    id="bgButton"
                    value={darkTheme}
                    onChange={() => themeChange()}
                    ref={inpTheme}
                  />
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
  );
}

export default Header;