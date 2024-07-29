// Hooks Import
import { useContext, useRef, useState } from "react";

// Images Import
import notebook from "../../img/laptop.svg";
// import mobile from "../../img/mobile.webp";

// Context
import { PageLang } from "../../App";
import { Data } from "../../sections/Skills";

// Data Import
import { webSkillsSect } from "../../utils/data";

function Laptop() {
  // Context
  const { activeTech, infoIntersect, changeVisibility } = useContext(Data);
  const { lang } = useContext(PageLang);

  // Refs
  const laptopImg = useRef();

  // Data extraction
  const { laptopBgImg, laptopNav } = webSkillsSect;

  // States
  const [currentImg, setCurrentImg] = useState(laptopNav[-1]);

  const timeDate = new Date();

  // It receives a  representing
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

  // It receives a number representing a day in the week and returns a string corresponding to the day
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

  // It receives a number representing a month in the year and returns a string corresponding to the month
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

  // Determines the layout of the page representation in the laptop
  const menuDisplay = () => {
    return activeTech.content.textLink === "HTML" ||
      activeTech.content.textLink === "CSS"
      ? "none"
      : "flex";
  };

  // Returns the laptop interface
  return (
    <>
      {/* Container Div */}
      <div
        className="laptop"
        style={changeVisibility("100%", infoIntersect, 1.5)}
      >
        {/* Laptop SVG */}
        <div
          className="image"
          ref={laptopImg}
          style={{ background: currentImg }}
        ></div>

        <picture>
          {/* <source media="(min-width: 1200px)" srcSet={notebook} type="image/svg" /> */}
          <figure>
            <img src={notebook} alt="Website" />
            <figcaption>Website</figcaption>
          </figure>
        </picture>

        {/* Laptop Page Interface */}
        <div
          className="laptopContent"
          style={{
            background: activeTech.basicSettings.bg,
            color: activeTech.basicSettings.color,
            font: activeTech.basicSettings.font,
          }}
        >
          {/* Page Header, it appears from JS tech */}
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
          {/* Main Content of the page */}
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
              {lang === "English"
                ? `This is ${activeTech.content.title}`
                : `This is ${activeTech.content.title}`}
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
            
          {/* Time and date content */}
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
