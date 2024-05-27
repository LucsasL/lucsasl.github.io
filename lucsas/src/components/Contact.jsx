function Contact() {
  return (
    <>
      <section id="grow">
        <div class="cont">
          <div id="ways-contact">
            <div>
              <p>
                Want to bring more attention to your business?
              </p>
              
              <h1 class="big fancy">
                Let's grow together!
              </h1>
            </div>

            <div>
              <div>
                <div class="contact">
                  <figure>
                    <img src="img/email.webp" alt="Contact through E-mail" class="icons" />
                  </figure>
                </div>

                <p>
                  <span>
                    Send me an e-mail at:
                  </span> <br />

                  <strong>lucsas.lira@gmail.com</strong>
                </p>
              </div>

              <div>
                <div class="contact">
                  <figure>
                    <img src="img/instagram-icon.webp" alt="Contact through Instagram" class="icons" />
                  </figure>
                </div>

                <p>
                  <span>
                    Call me in Direct Message:
                  </span> <br />

                  <strong>@lucsas.l</strong>
                </p>
              </div>
            </div>

          </div>
          
          <div>
            <div class="center">
              <h1 class="block-text" style={{ margin: "10px 0px 40px 0px" }}>
                Contact
              </h1>
            </div>
            
            <form action="https://api.staticforms.xyz/submit" method="post" autocomplete="on">
              <div>
                <div>
                  <label for="fullName">Name:</label> <br />
                    <input type="text" name="name" placeholder="Your name" required />
                </div>

                <div>
                  <label for="emailAddress">E-mail: </label> <br />
                    <input type="email" name="email" placeholder="Your e-mail" required />
                </div>

                <div>
                  <label for="userMsg">Message: </label> <br />
                    <textarea name="message" cols="30" rows="10" placeholder="Write a message..." required></textarea>
                </div>

                <div>
                  <input type="submit" value="Send" class="submit-button" />
                </div>

                <div>
                  <input type="hidden" name="accessKey" value="9f7e2bc4-d0c9-4819-ac06-2c58044142e0" /> 
                  <input type="hidden" name="redirectTo" value="document/success.html" />
                  <input type="hidden" name="replyTo" value="@" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact;