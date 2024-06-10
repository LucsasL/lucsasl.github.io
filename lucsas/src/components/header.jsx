// Hooks Import
import gsap from "gsap";
import logo from "../img/lucsas-logo.webp";
import { useRef } from "react";
// import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";  
import { TweenMax, Power2, Power3 } from "gsap/gsap-core";
import { webNavOptions, webNavOptionsLink } from "../utils/data";

// GSAP Registers
gsap.registerPlugin(useGSAP);
// gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  // const [scrolled, setScrolled] = useState(true);
  const container = useRef(null);
  const themeInp = useRef(null);

  const musicButton = useRef(null);
  const audioPlayer = useRef(null);
  
  // useEffect(() => {
  //   const el = container.current;
  //   gsap.to(el, {
  //     scrollTrigger: {
  //       background: "rgba(0, 0, 0, .5)",
  //       trigger: el
  //     }
  //   });
  // }, []);

  function toggleTheme(e) {
    const body = document.querySelector("body");
    themeInp.current.defaultChecked = ! (e.target.value);
    body.classList.toggle("light");
  }

  function hasScrolled() {
    const scrollPos = window.scrollY;

    if (scrollPos > 0) {
      container.current.style.background = "rgba(0, 0, 0, .5)";
      container.current.style.filter = "blur(6px)";
    }
  }

  useGSAP(() => {
    window.addEventListener("load", () => {
      /* Rendering button animation */
      let opt = {
        width: musicButton.current.offsetWidth,
        height: musicButton.current.offsetHeight,
        midY: musicButton.current.offsetHeight / 2,
        points: 20,
        stretch: 10,
        sinHeight: 0,
        speed: -0.1,
        strokeColor: "black",
        strokeWidth: 1.5,
        power: false,
      };
  
      musicButton.current.width = opt.width * 2;
      musicButton.current.height = opt.height * 2;
      musicButton.current.style.width = opt.width;
      musicButton.current.style.height = opt.height;
  
      const ctx = musicButton.current.getContext("2d");
      ctx.scale(2, 2);
  
      ctx.strokeStyle = opt.strokeColor;
      ctx.lineWidth = opt.strokeWidth;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
  
      let time = 0;
  
      const render = () => {
        window.requestAnimationFrame(render);
        ctx.clearRect(0, 0, opt.width, opt.height);
        time++;
        ctx.beginPath();
        let increment = 0;
  
        for (let i = 0; i <= opt.points; i++) {
          if (i <= opt.points / 2) {
            increment += 0.1;
          } else {
            increment += -0.1;
          }
  
          const x = (opt.width / opt.points) * i;
          const y =
            opt.midY +
            Math.sin((time * opt.speed * i) / opt.stretch) *
              opt.sinHeight *
              increment;
  
          ctx.lineTo(x, y);
        }
  
        ctx.stroke();
      };
  
      render();
  
      /* Audio play */
      musicButton.current.addEventListener("click", () => {
        opt.power = !opt.power;

        if (opt.power) {
          audioPlayer.current.play();
          TweenMax.to(opt, 1, {
            sinHeight: 10,
            stretch: 5,
            ease: Power2.easeInOut,
          });
        } else {
          audioPlayer.current.pause();
          TweenMax.to(opt, 1, {
            sinHeight: 0,
            stretch: 10,
            power: Power3.easeOut,
          });
        }
      });
    });
  })

  return (
    <>
      <header onScroll={() => hasScrolled()}>
        <div ref={container}>
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
                  {webNavOptions.map((i, index) => {
                    return (
                      <li key={index}>
                        <button>
                          <a href={`./#${webNavOptionsLink[index]}`}>{i}</a>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div id="musicDiv">
                <canvas id="musicButton" ref={musicButton}></canvas>

                {/* Music by Eric Godlow
                Music source: https://youtu.be/IUYaCe95dxw?si=KGSnNIIKn5uaWJY4 */}
                <audio preload="auto" loop id="player" ref={audioPlayer}>
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
                    onChange={(e) => toggleTheme(e)}
                    ref={themeInp}
                    defaultChecked
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