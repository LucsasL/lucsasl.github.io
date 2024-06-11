// Hooks Import
import { useState, useRef } from "react";

// GSAP Imports
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TweenMax, Power2, Power3 } from "gsap/gsap-core";

// Audio Import
import mp3Audio from "../audio/Eric Godlow - Lo-fi Type Beat - No Love.mp3";
import oggAudio from "../audio/Eric Godlow - Lo-fi Type Beat - No Love.ogg";

// GSAP Plugins
gsap.registerPlugin(useGSAP);

function MusicButton() {
  const [musicPlaying, setMusicPlaying] = useState(false);

  const musicButton = useRef();
  const audioPlayer = useRef();

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
          setMusicPlaying(true);
          audioPlayer.current.play();
          TweenMax.to(opt, 1, {
            sinHeight: 10,
            stretch: 5,
            ease: Power2.easeInOut,
            });
        } else {
          setMusicPlaying(false);
          audioPlayer.current.pause();
          TweenMax.to(opt, 1, {
            sinHeight: 0,
            stretch: 10,
            power: Power3.easeOut,
          });
        }
      });
    });
  });

  return (
    <>
      <div id="musicDiv">
        <abbr title={musicPlaying ? "Mute Music" : "Play Music"}>
          <canvas id="musicButton" ref={musicButton}></canvas>
          {/* Music by Eric Godlow
          Music source: https://youtu.be/IUYaCe95dxw?si=KGSnNIIKn5uaWJY4 */}
          <audio preload="auto" loop id="player" ref={audioPlayer}>
            <source
              src={mp3Audio}
              type="audio/mp3"
            />
            <source
              src={oggAudio}
              type="audio/ogg"
            />
          </audio>
        </abbr>
      </div>
    </>
  );
}

export default MusicButton;
