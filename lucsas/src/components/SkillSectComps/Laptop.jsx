// Hooks Import
import { useContext, useRef, useState } from "react";

// Images Import
import notebook from "../../img/google-ads-design.svg";
import { webSkillsSect } from "../../utils/data";

// Context
import { cursorInteraction } from "../../App";

// Data Import
import { Data } from "../../sections/Skills";

function Laptop() {
  // Context
  const { activeTech, infoIntersect, changeVisibility } = useContext(Data);
  let { buttonsArray } = useContext(cursorInteraction);

  // Refs
  const laptopImg = useRef();

  // Data extraction
  const { laptopBgImg, laptopNav } = webSkillsSect;

  // States
  const [currentImg, setCurrentImg] = useState(laptopNav[-1]);

  const timeDate = new Date();

  const changeSeason = (e) => {
    const prop = e.target.innerText;
    const stations = {
      Spring: `url(${laptopBgImg[0]}) no-repeat center`,
      Summer: `url(${laptopBgImg[1]}) no-repeat center`,
      Fall: `url(${laptopBgImg[2]}) no-repeat center`,
      Winter: `url(${laptopBgImg[3]}) no-repeat center`,
    };

    setCurrentImg(stations[prop]);
  };

  const weekDay = (day) => {
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    return days[day - 1];
  };

  const monthName = (month) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return months[month];
  };

  const menuDisplay = () => {
    return activeTech.content.textLink === "HTML" ||
      activeTech.content.textLink === "CSS"
      ? "none"
      : "flex";
  };

  return (
    <>
      <div
        className="laptop"
        style={changeVisibility("100%", infoIntersect, 1.5)}
      >
        <div
          className="image"
          ref={laptopImg}
          style={{ background: currentImg }}
        ></div>
        <picture>
          <figure>
            <img src={notebook} alt="Website" />
            <figcaption>Website</figcaption>
          </figure>
        </picture>
        <div
          className="laptopContent"
          style={{
            background: activeTech.basicSettings.bg,
            color: activeTech.basicSettings.color,
            font: activeTech.basicSettings.font,
          }}
        >
          <div className="pageHeader" style={{ display: menuDisplay() }}>
            <ul>
              {laptopNav.map((li) => {
                return (
                  <abbr title={li}>
                    <li onClick={(e) => changeSeason(e)}>{li}</li>
                  </abbr>
                );
              })}
            </ul>
          </div>
          <div
            className="mainPageCont"
            style={{
              alignSelf: "center",
            }}
          >
            <h2
              style={{
                fontSize: activeTech.header.headerSize,
                padding: activeTech.header.headerPadding,
                margin: activeTech.header.headerMargin,
                boxShadow: activeTech.header.headerBoxShadow,
              }}
            >
              {`This is ${activeTech.content.title}`}
            </h2>
            <p
              style={{
                fontSize: activeTech.text.textSize,
                lineHeight: activeTech.text.textLine,
                width: activeTech.text.textWidth,
                margin: activeTech.text.textMargin,
              }}
            >
              {activeTech.content.text}
            </p>
            <a
              href={activeTech.content.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: activeTech.links.aDisplay,
                textDecoration: activeTech.links.aDecoration,
                background: activeTech.links.aBg,
                color: activeTech.links.aColor,
                width: activeTech.links.aWidth,
                padding: activeTech.links.aPadding,
                borderRadius: activeTech.links.aBorderRadius,
                textAlign: "center",
              }}
            >
              Learn more about {activeTech.content.textLink}
            </a>
          </div>

          <div
            className="dateTime"
            style={{
              display: activeTech.content.dateTime.display,
              width: activeTech.content.dateTime.width,
              padding: activeTech.content.dateTime.padding,
              textAlign: activeTech.content.dateTime.textAlign,
            }}
          >
            <h3>
              <span className="time">
                {timeDate.getHours().toLocaleString("en-US", {
                  minimumIntegerDigits: 2,
                  useGrouping: false,
                })}
                :
                {timeDate.getMinutes().toLocaleString("en-US", {
                  minimumIntegerDigits: 2,
                  useGrouping: false,
                })}
              </span>{" "}
              <br />
              <span className="date">
                {weekDay(timeDate.getDay())}, {monthName(timeDate.getMonth())}{" "}
                {timeDate.getDate()}
              </span>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Laptop;
