import instaLogo from "../img/instagram-icon.webp";

function MsgMe() {
  return (
    <>
      <div id="msgMe">
        <a href="https://www.instagram.com/lucsas.l/" target="_blank" rel="noopener noreferrer">
          <figure>
            <figcaption>
              Instagram
            </figcaption>
            <img src={instaLogo} alt="Instagram contact" style={{ width: "45px", height: "45px" }} />
          </figure>
        </a>
      </div>
    </>
  )
}

export default MsgMe;