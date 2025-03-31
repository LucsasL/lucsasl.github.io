// Basic Imports
import React from "react";
import Image from "next/image";

// Data Import
import { webNavOptions, webNavOptionsLink, webIntroSect } from "../utils/data";

// Logo Image Import
import logo from "@/public/img/lucsas-logo.webp";

function Footer() {
  // Data destructuring
  const { socialMedias } = webIntroSect;

  return (
    <>
      <footer>
        <div id="footerNav">
          <div id="meetMe">
            <h1>Lucas Lira</h1>

            <p>
              I work with Web Development and PPC Management, using Google Ads &
              Meta Ads. I&apos;ll do my best to deliver the best results
              possible.
            </p>

            {/* List of social medias */}
            <ul>
              {socialMedias.map(({ link, name, img }, index: number) => {
                return (
                  <li key={index}>
                    <figure>
                      <a href={link} target="_blank" rel="noopener noreferrer">
                        <Image
                          src={img}
                          alt={name}
                          className="icons"
                          draggable="false"
                        />
                      </a>
                    </figure>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h1>Quick links</h1>

            <ul>
              {webNavOptions.map((li, index: number) => {
                return (
                  <li key={index}>
                    <a href={`#${webNavOptionsLink[index]}`}>{li}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div id="credits">
          <div>
            <figure>
              <Image
                src={logo}
                alt="Lucsas Logo"
                style={{ width: "75px", height: "75px" }}
                draggable="false"
              />
            </figure>
          </div>

          <p>
            Built by
            <a
              href="http://github.com/lucsasl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lucsas
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
