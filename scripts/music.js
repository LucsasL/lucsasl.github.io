const musicButton = document.querySelector("canvas#musicButton");
const audioPlayer = document.querySelector("audio#player");

window.addEventListener("load", () => {
  /* Rendering button animation */
  let opt = {
    width: musicButton.offsetWidth,
    height: musicButton.offsetHeight,
    midY: musicButton.offsetHeight / 2,
    points: 20,
    stretch: 10,
    sinHeight: 0,
    speed: -0.1,
    strokeColor: "black",
    strokeWidth: 1.5,
    power: false,
  };

  musicButton.width = opt.width * 2;
  musicButton.height = opt.height * 2;
  musicButton.style.width = opt.width;
  musicButton.style.height = opt.height;

  const ctx = musicButton.getContext("2d");
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
  musicButton.addEventListener("click", () => {
    opt.power = !opt.power;

    if (opt.power) {
      audioPlayer.play();
      TweenMax.to(opt, 1, {
        sinHeight: 10,
        stretch: 5,
        ease: Power2.easeInOut
      });
    } else {
      audioPlayer.pause();
      TweenMax.to(opt, 1, {
        sinHeight: 0,
        stretch: 10,
        power: Power3.easeOut
      });
    }
  });
});
