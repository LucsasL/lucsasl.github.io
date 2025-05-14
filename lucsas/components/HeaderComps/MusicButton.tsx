// Hooks Import
import { useState, useRef, type ReactNode, type Ref } from "react";

// GSAP Imports
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TweenMax, Power2, Power3 } from "gsap/gsap-core";
import { type MusicButtonShape, type MusicButtonPlaceholder } from "@/typing";

// Audio Import
// import mp3Audio from "@/audio/Eric Godlow - Lo-fi Type Beat - No Love.mp3";
// import oggAudio from "@/audio/Eric Godlow - Lo-fi Type Beat - No Love.ogg";

// GSAP Plugins
gsap.registerPlugin(useGSAP);

// Type Declarations
interface MusicButtonNode {
  children:
    | ReactNode
    | HTMLElement
    | Ref<HTMLButtonElement | HTMLCanvasElement>
    | HTMLButtonElement;
  offsetWidth: number;
  offsetHeight: number;
  style: {
    width: number;
    height: number;
  }
  addEventListener: (event: string, func: CallableFunction) => void;
  getContext: (dimensions: string) => string;
}

function MusicButton() {
  // States
  const [musicPlaying, setMusicPlaying] = useState<boolean>(false);

  // Refs
  const musicButton = useRef<MusicButtonNode>(null);
  const audioPlayer = useRef<HTMLAudioElement>(null);

  // GSAP Animations function
  useGSAP(() => {
    window.addEventListener("load", () => {
      /* Rendering button animation */
      if (!musicButton.current) return;

      const opt: MusicButtonPlaceholder = {
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

      // Applying the properties of opt variable to the button
      musicButton.current!.style.width = opt.width * 2;
      musicButton.current!.style.height = opt.height * 2;
      musicButton.current!.style.width = opt.width;
      musicButton.current!.style.height = opt.height;

      // Telling the element has 2 dimensions with getContext
      const mButtContext: string = musicButton.current!.getContext("2d");
      const ctx: MusicButtonShape = { mButtContext };
      ctx.scale(2, 2);

      ctx.strokeStyle = opt.strokeColor;
      ctx.lineWidth = opt.strokeWidth;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      let time = 0;

      // Function that renders the animation
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

          // Setting animation position at the x axis
          const x = (opt.width / opt.points) * i;

          // Setting animation position at the y axis
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
      musicButton.current!.addEventListener("click", () => {
        opt.power = !opt.power;

        if (opt.power) {
          setMusicPlaying(true);
          audioPlayer.current!.play();
          TweenMax.to(opt, 1, {
            sinHeight: 10,
            stretch: 5,
            ease: Power2.easeInOut,
          });
        } else {
          setMusicPlaying(false);
          audioPlayer.current!.pause();
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
        {/* Assigning the state of the element */}
        <abbr title={musicPlaying ? "Mute Music" : "Play Music"}>
          {/* Animation Container */}
          <canvas id="musicButton" ref={musicButton.current}></canvas>
          
          {/* Music by Eric Godlow
          Music source: https://youtu.be/IUYaCe95dxw?si=KGSnNIIKn5uaWJY4 */}
          <audio preload="auto" loop id="player" ref={audioPlayer}>
            <source
              // src={mp3Audio}
              type="audio/mp3"
            />
            <source
              // src={oggAudio}
              type="audio/ogg"
            />
          </audio>
        </abbr>
      </div>
    </>
  );
}

export default MusicButton;
