// Hooks Import
import { useState, useRef, useEffect } from "react";

// Images Import
import email from "@/public/img/email.webp";
import instaLogo from "@/public/img/instagram-icon.webp";

// Context
// import { SubmitData } from "@/app/page";

function Contact() {
  // States Declaration
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [topicInput, setTopicInput] = useState("");
  const [msgInput, setMsgInput] = useState("");

  // Context Destructuring
  // const { setOpen } = useContext(SubmitData);

  // Refs
  const contactSect = useRef("");

  useEffect(() => {
    console.log("Language Changed");
  }, [contactSect]);

  // These functions controls the input the user types in the <input /> element
  function changeName(inp: HTMLInputElement) {
    setNameInput(inp.target.value);
  }

  function changeEmail(inp: HTMLInputElement) {
    setEmailInput(inp.target.value);
  }

  function changeMsg(inp: HTMLInputElement) {
    setMsgInput(inp.target.value);
  }

  return (
    <>
      <section id="contact" ref={contactSect}>
        <div>
          {/* Contact Information */}
          <div id="ways-contact">
            <div style={{ textAlign: "center" }}>
              <p>Want to bring more attention to your business?</p>

              <h1 className="big fancy">Let's grow together!</h1>
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
                  <span>Send me an e-mail at:</span> <br />
                  <strong>lucsas.lira@gmail.com</strong>
                </p>
              </div>

              <div>
                <div className="contact">
                  <figure>
                    <img
                      src={instaLogo}
                      alt={"Contact through Instagram"}
                      className="icons"
                      draggable="false"
                    />
                  </figure>
                </div>

                <p>
                  <span>Call me in Direct Message:</span> <br />
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
                Contact
              </h1>
            </div>

            <form
              action="https://api.staticforms.xyz/submit"
              method="post"
              autoComplete="on"
            >
              <div>
                <div>
                  <label htmlFor="fullName">Name:</label> <br />
                  <input
                    type="text"
                    name="name"
                    placeholder={"Your name"}
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
                    placeholder={"Your e-mail"}
                    value={emailInput}
                    onChange={(e) => changeEmail(e)}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="Topic">"Topic:"</label> <br />
                  <input
                    type="text"
                    name="Topic"
                    placeholder={"Topic"}
                    value={topicInput}
                    onChange={(e) => setTopicInput(e.currentTarget.value)}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="userMsg">"Message:"</label> <br />
                  <textarea
                    name="message"
                    cols={30}
                    rows={10}
                    placeholder={"Write a message..."}
                    value={msgInput}
                    onChange={(e) => changeMsg(e)}
                    required
                  ></textarea>
                </div>

                <div>
                  <input
                    type="submit"
                    value={"Send"}
                    className="submit-button"
                    // onSubmit={() => setOpen(true)}
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
