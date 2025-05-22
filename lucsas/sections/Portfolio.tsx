"use client";

// Hooks Import
import React, { useState, useEffect, useRef, type RefObject } from "react";
import Image from "next/image";

// Other Libraries
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// Data Import
import { webProjectsSect } from "../utils/data";
const { sectTitle } = webProjectsSect;

function Portfolio() {
  // States
  const [projectBoxIntersect, setProjectBoxIntersect] =
    useState<boolean>(false);

  // Refs
  const project = useRef<HTMLDivElement | null>(null);
  const portfolioSect = useRef<HTMLDivElement | null>(null);
  const projContainer = useRef<HTMLDivElement | null>(null);
  const visitButton = useRef<HTMLAnchorElement[]>([]);
  const detailsButt = useRef<HTMLButtonElement[]>([]);
  const projDetailsCont = useRef<HTMLDivElement | null>(null);
  const closeDetailsButt = useRef<HTMLButtonElement[]>([]);

  useEffect(() => {
    // This creates an instance of the intersection observer
    // object, used to check if the screen of the user is
    // intersecting with some element. In this case, It checks
    // if the element is intersecting with the user's screen and
    // changes the "projectBoxIntersect" to true, rendering
    // the fade-in animation
    const element = project.current as Element | null;

    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setProjectBoxIntersect(entry.isIntersecting);
        }
      });
    });

    observer.observe(element);
  }, [projectBoxIntersect, portfolioSect]);

  useGSAP(() => {
    // When the user clicks the details button
    // the screen will scroll to a static position
    // where a div will appear showcasing the
    // projects details
    detailsButt.current.forEach((clButt: HTMLElement) => {
      clButt.addEventListener("click", () => {
        document.body.style.position = "fixed";
        document.body.style.top = "-4420px";

        // Scaling the project container to grow
        gsap.to(".projCont", {
          scale: 1.22,
          duration: 0.2,
        });

        // Making it appear and interactive
        gsap.to(".projDetails", {
          opacity: 1,
          duration: 0.2,
          zIndex: 20,
          pointerEvents: "all",
        });
      });
    });

    // It shrinks and hide the details div
    closeDetailsButt.current.forEach((clButt: HTMLElement) => {
      clButt.addEventListener("click", () => {
        window.scrollTo(0, 4110);

        // Creating a timeline for animation
        const timeline = gsap.timeline({
          default: {
            duration: 0.2,
            repeat: 1,
          },
        });

        timeline
          .to(".projCont", {
            scale: 1,
          })
          .to(".projDetails", {
            opacity: 0,
            pointerEvents: "none",
          });
      });
    });
  });

  // It changes the element visibility of the project's element
  const changeVisibility = () => {
    return projectBoxIntersect
      ? {
          opacity: 1,
          transition: "all 1s ease",
        }
      : {
          opacity: 0,
          transition: "all 1s ease",
        };
  };

  function setRefArray<Type>(
    elArray: RefObject<Type[]>,
    el: Type,
    index: number
  ) {
    elArray.current[index] = el;
  }

  return (
    <>
      <section id="portfolio" ref={portfolioSect}>
        <div>
          <div className="blockquote" ref={project} style={changeVisibility()}>
            <h1 className="big">{sectTitle}</h1>
          </div>

          <div className="projCont">
            {webProjectsSect.projects.map(
              ({
                id,
                projLink,
                projTitle,
                projSubtitle,
                projDesc,
                projImgDesc,
                techStack,
                techStackImg,
                projImg,
              }) => {
                return (
                  <div
                    className="proj"
                    key={id}
                    ref={projContainer}
                    style={changeVisibility()}
                  >
                    <div className="projDetails" ref={projDetailsCont}>
                      <div className="projDetailsInfo">
                        <h2>Project name (Working in Progress)</h2>
                        <p>Work</p>

                        <p>In</p>

                        <p>Progress</p>
                      </div>

                      <div className="projImage">
                        <picture>
                          {/* <source media="(min-width: )" srcset="" /> */}
                          {/* <Image src={} alt="Tree" /> */}
                        </picture>
                      </div>

                      <button
                        className="closeBtn"
                        key={id}
                        ref={(el) =>
                          setRefArray<HTMLButtonElement | null>(
                            closeDetailsButt,
                            el,
                            id
                          )
                        }
                      >
                        Close
                      </button>
                    </div>

                    <div className="projInfo">
                      <h2 className="big">
                        {projTitle}
                        <span style={{ fontSize: ".5em" }}>
                          (Work In Progress)
                        </span>
                      </h2>

                      <h3>{projSubtitle}</h3>

                      <p>{projDesc}</p>

                      <div className="techStackCont">
                        {techStack.map((t: string, id: number) => {
                          return (
                            <abbr title={t} key={id}>
                              <picture>
                                <Image
                                  src={techStackImg[id]}
                                  alt={t}
                                  draggable="false"
                                />
                              </picture>
                            </abbr>
                          );
                        })}
                      </div>

                      <div>
                        <button>
                          <a
                            href={projLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={id}
                            ref={(el) =>
                              setRefArray<HTMLAnchorElement | null>(
                                visitButton,
                                el,
                                id
                              )
                            }
                            className={`projLink${id}`}
                          >
                            Visit Project
                          </a>
                        </button>
                        <button
                          className="detailBtn"
                          key={id}
                          ref={(el) =>
                            setRefArray<HTMLButtonElement | null>(
                              detailsButt!,
                              el,
                              id
                            )
                          }
                        >
                          See details
                        </button>
                      </div>
                    </div>

                    <div className="projImg">
                      <picture key={id}>
                        <Image
                          src={projImg}
                          alt={projImgDesc}
                          draggable="false"
                        />
                      </picture>
                    </div>
                  </div>
                );
              }
            )}
          </div>

          <div className="blockquote">
            <h4 className="big">More projects coming soon...</h4>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
