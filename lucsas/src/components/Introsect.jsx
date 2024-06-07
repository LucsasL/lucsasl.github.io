function Introsect() {
  return (
    <>
      <section id="intro">
        <div className="intro3D">
          {/* <iframe src='https://my.spline.design/building-39f31bffe96091b3362e6606e3cbfd11/' title="3d" id="room3d" ></iframe> */}
        </div>

        <div style={{ display: "none" }}>
          <div className="intro">
            <div id="introducing">
              <h1>
                <span style={{ fontSize: ".9em", lineHeight: "1em" }} >Sup, I'm</span> <br />
                <span className="nickname">Lucsas</span>
                <span className="cursiveWords">Lucas Lira</span>
              </h1>
              <h2 className="fancy intro-h2">
                PPC Manager
              </h2>

              <p>
                I create and optimize adverts campaign in Google Ads and Meta Ads, delivering the best to engage and convert.
              </p>
            
              <button id="skillsResume">
                {/* <a href="" download="">Download Resume</a> */}
              </button>
            </div>
            <div id="socials">
              <div>
                <figure>
                  <figcaption>
                  </figcaption>
                  <a href="https://www.instagram.com/lucsas.l/" target="_blank" rel="noopener noreferrer">
                    <img src="img/instagram-social.webp" alt="Lucsas Instagram" className="icons" />
                  </a>
                </figure>
              </div>
              <div>
                <figure>
                  <figcaption>
                  </figcaption>
                  <a href="http://github.com/lucsasl" target="_blank" rel="noopener noreferrer">
                    <img src="img/github-social.webp" alt="Lucsas GitHub" className="icons" />
                  </a>
                </figure>
              </div>
              <div>
                <figure>
                  <figcaption>
                  </figcaption>
                  <a href="https://www.linkedin.com/in/lucsas/?locale=en_US" target="_blank" rel="noopener noreferrer">
                    <img src="img/linkedin-social.webp" alt="Lucsas Linkedin" className="icons" />
                  </a>
                </figure>
              </div>
              <div>
                <figure>
                  <figcaption>
                  </figcaption>
                  <a href="https://twitter.com/LucsasL" target="_blank" rel="noopener noreferrer">
                    <img src="img/twitter-social.webp" alt="Lucsas Twitter" className="icons" />
                  </a>
                </figure>
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-anim">
          <div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Introsect;