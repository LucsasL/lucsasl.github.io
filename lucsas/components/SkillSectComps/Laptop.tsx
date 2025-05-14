// Hooks Import
import { useContext, useRef, useState, useEffect } from "react";
import Image from "next/image";

// Images Import
import notebook from "@/public/img/laptop.svg";
import mobile from "@/public/img/mobile.webp";

// Context
import { Data } from "@/sections/Skills";

// Data Import
import { webSkillsSect } from "../../utils/data";
import { StationsShape } from "@/typing";

function Laptop() {
  // Vars
  const screenSize = window.innerWidth;

  // Context
  const { activeTech, infoIntersect, changeVisibility } =
    useContext(Data);

  // Refs
  const laptopImg = useRef<HTMLDivElement>(null);
  const laptopDiv = useRef<HTMLDivElement>(null);

  // Data extraction
  const { laptopBgImg, laptopNav } = webSkillsSect;

  // States
  const [currentImg, setCurrentImg] = useState(laptopNav[-1]);

  const timeDate = new Date();

  useEffect(() => {
    console.log("Language Changed");
  }, [laptopDiv]);

  // It receives a  representing
  const changeSeason = (e: React.MouseEvent<HTMLLIElement>) => {
    type Season = "Spring" | "Summer" | "Fall" | "Winter";
    const prop = (e.target as HTMLElement).innerText as Season;
    const stations: StationsShape = {
      Spring: `url(${laptopBgImg[0]}) no-repeat center`,
      Summer: `url(${laptopBgImg[1]}) no-repeat center`,
      Fall: `url(${laptopBgImg[2]}) no-repeat center`,
      Winter: `url(${laptopBgImg[3]}) no-repeat center`,
    };

    setCurrentImg(stations[prop]);
  };

  // It receives a number representing a day in the week and returns a string corresponding to the day
  const weekDay = (day: number) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  };

  // It receives a number representing a month in the year and returns a string corresponding to the month
  const monthName = (month: number) => {
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

  const styleRet = () => {
    return screenSize > 992
      ? {
          display: activeTech.content.dateTime.display,
          width: activeTech.content.dateTime.width,
          padding: activeTech.content.dateTime.padding,
          alignText: activeTech.content.dateTime.textAlign,
        }
      : {
          display: "none",
        };
  }

  // Returns the laptop interface
  return (
    <>
      {/* Container Div */}
      <div
        className="laptop"
        style={changeVisibility("100%", infoIntersect, 1.5)}
        ref={laptopDiv}
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
            <Image
              src={screenSize > 768 ? notebook : mobile}
              alt="Website"
              draggable="false"
            />
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
              {laptopNav.map((li, i) => {
                return (
                  <abbr title={li} key={i}>
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
              style={
                screenSize > 992
                  ? {
                      fontSize: activeTech.header.headerSize,
                      padding: activeTech.header.headerPadding,
                      margin: activeTech.header.headerMargin,
                      boxShadow: activeTech.header.headerBoxShadow,
                    }
                  : {
                      fontSize: activeTech.header.headerSizeMob,
                      padding: activeTech.header.headerPadding,
                      margin: activeTech.header.headerMargin,
                      boxShadow: activeTech.header.headerBoxShadow,
                    }
              }
            >
              {`This is ${activeTech.content.title}`}
            </h2>
            <p
              style={
                screenSize > 992
                  ? {
                      fontSize: activeTech.text.textSize,
                      lineHeight: activeTech.text.textLine,
                      width: activeTech.text.textWidth,
                      margin: activeTech.text.textMargin,
                    }
                  : {
                      fontSize: activeTech.text.textSize,
                      lineHeight: activeTech.text.textLine,
                      width: activeTech.text.textWidthMob,
                      margin: activeTech.text.textMargin,
                    }
              }
            >
              {activeTech.content.text}
            </p>
            <a
              href={activeTech.content.link}
              target="_blank"
              rel="noopener noreferrer"
              style={
                screenSize > 992
                  ? {
                      display: activeTech.links.aDisplay,
                      textDecoration: activeTech.links.aDecoration,
                      background: activeTech.links.aBg,
                      color: activeTech.links.aColor,
                      width: activeTech.links.aWidth,
                      padding: activeTech.links.aPadding,
                      borderRadius: activeTech.links.aBorderRadius,
                      textAlign: "center",
                    }
                  : {
                      display: activeTech.links.aDisplay,
                      textDecoration: activeTech.links.aDecoration,
                      background: activeTech.links.aBg,
                      color: activeTech.links.aColor,
                      width: activeTech.links.aWidthMob,
                      padding: activeTech.links.aPadding,
                      borderRadius: activeTech.links.aBorderRadius,
                      textAlign: "center",
                    }
              }
            >
              {`Learn more about ${activeTech.content.textLink}`}
            </a>
          </div>

          {/* Time and date content */}
          <div
            className="dateTime"
            style={styleRet()}
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
              {
                <>
                  <br />
                  <span className="date">
                    {weekDay(timeDate.getDay())},{" "}
                    {monthName(timeDate.getMonth())} {timeDate.getDate()}
                  </span>
                </>
              }
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Laptop;
