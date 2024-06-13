// Hooks Import
import { useState, useEffect, useRef, useContext } from "react";

// Images Import
import notebook from "../../img/google-ads-design.svg";

function Laptop({ title, text }) {
  const [infoIntersect, setInfoIntersect] = useState(false);
  const laptopIntersect = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInfoIntersect(entry.isIntersecting);
        }
      });
    });

    observer.observe(laptopIntersect.current);
  }, []);

  // Conte

  const changeVisibilityLaptop = (side) => {
    return infoIntersect
      ? {
          opacity: 1,
          transition: "all 1.5s ease",
        }
      : {
          opacity: 1,
          transition: "all 1.5s ease",
          transform: `translateX(${side})`,
        };
  };

  return (
    <>
      <div
        className="laptop"
        style={changeVisibilityLaptop("150%")}
        ref={laptopIntersect}
      >
        <picture>
          <figure>
            <img src={notebook} alt="Website" />
            <figcaption>Website</figcaption>
          </figure>
        </picture>
        <div className="laptopContent" style={{}}>
          <h1>{`This is ${title}`}</h1>
          <p>{text}</p>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more about {title}
          </a>
        </div>
      </div>
    </>
  );
}

export default Laptop;