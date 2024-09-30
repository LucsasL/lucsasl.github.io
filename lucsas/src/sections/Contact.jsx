// Hooks Import
import { useState, useContext, useRef, useEffect } from "react";

// Images Import
import email from "../img/email.webp";
import instaLogo from "../img/instagram-icon.webp";

// Data
import { PageLang } from "../App";

// Context
import { SubmitData } from "../App";

function Contact() {
  // States Declaration
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [topicInput, setTopicInput] = useState("");
  const [msgInput, setMsgInput] = useState("");

  // Context Destructuring
  const { setOpen } = useContext(SubmitData);
  const { lang } = useContext(PageLang);

  // Refs
  const contactSect = useRef();

  useEffect(() => {
    console.log("Language Changed");
  }, [contactSect]);

  // These functions controls the input the user types in the <input /> element
  function changeName(inp) {
    setNameInput(inp.target.value);
  }

  function changeEmail(inp) {
    setEmailInput(inp.target.value);
  }

  function changeMsg(inp) {
    setMsgInput(inp.target.value);
  }

  return (
    <>
      <section id="contact" ref={contactSect}>
        <div>
          {/* Contact Information */}
          <div id="ways-contact">
            <div style={{ textAlign: "center" }}>
              <p>
                {lang === "English"
                  ? "Want to bring more attention to your business?"
                  : "Quer tornar o software da sua empresa real?"}
              </p>

              <h1 className="big fancy">
                {lang === "English"
                  ? "Let's grow together!"
                  : "Vamos crescer juntos!"}
              </h1>
            </div>

            <div>
              <div>
                <div className="contact">
                  <figure>
                    <img
                      src={email}
                      alt="Contact through E-mail"
                      className="icons"
                      draggable="false"
                    />
                  </figure>
                </div>

                <p>
                  <span>
                    {lang === "English"
                      ? "Send me an e-mail at:"
                      : "Me mande um email em:"}
                  </span>{" "}
                  <br />
                  <strong>lucsas.lira@gmail.com</strong>
                </p>
              </div>

              <div>
                <div className="contact">
                  <figure>
                    <img
                      src={instaLogo}
                      alt={
                        lang === "English"
                          ? "Contact through Instagram"
                          : "Contato através do Instagram"
                      }
                      className="icons"
                      draggable="false"
                    />
                  </figure>
                </div>

                <p>
                  <span>
                    {lang === "English"
                      ? "Call me in Direct Message:"
                      : "Me chame por mensagem direta:"}
                  </span>{" "}
                  <br />
                  <strong>@lucsas.l</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Form Division */}
          <div className="formDiv">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h1
                className="block-text"
                style={{ margin: "10px 0px 40px 0px" }}
              >
                {lang === "English" ? "Contact" : "Contato"}
              </h1>
            </div>

            <form
              action="https://api.staticforms.xyz/submit"
              method="post"
              autoComplete="on"
            >
              <div>
                <div>
                  <label htmlFor="fullName">
                    {lang === "English" ? "Name:" : "Nome:"}
                  </label>{" "}
                  <br />
                  <input
                    type="text"
                    name="name"
                    placeholder={lang === "English" ? "Your name" : "Seu nome"}
                    value={nameInput}
                    onChange={(e) => changeName(e)}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="emailAddress">E-mail:</label> <br />
                  <input
                    type="email"
                    name="email"
                    placeholder={
                      lang === "English" ? "Your e-mail" : "Seu e-mail"
                    }
                    value={emailInput}
                    onChange={(e) => changeEmail(e)}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="Topic">
                    {lang === "English" ? "Topic:" : "Tópico:"}
                  </label>{" "}
                  <br />
                  <input
                    type="text"
                    name="Topic"  
                    placeholder={lang === "English" ? "Topic" : "Tópico"}
                    value={topicInput}
                    onChange={(e) => setTopicInput(e.currentTarget.value)}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="userMsg">
                    {lang === "English" ? "Message:" : "Mensagem:"}
                  </label>{" "}
                  <br />
                  <textarea
                    name="message"
                    cols="30"
                    rows="10"
                    placeholder={
                      lang === "English"
                        ? "Write a message..."
                        : "Escreva uma mensagem..."
                    }
                    value={msgInput}
                    onChange={(e) => changeMsg(e)}
                    required
                  ></textarea>
                </div>

                <div>
                  <input
                    type="submit"
                    value={lang === "English" ? "Send" : "Enviar"}
                    className="submit-button"
                    onSubmit={() => setOpen(true)}
                  />
                </div>

                <div>
                  <input
                    type="hidden"
                    name="accessKey"
                    value="9f7e2bc4-d0c9-4819-ac06-2c58044142e0"
                  />
                  <input type="hidden" name="replyTo" value="@" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
