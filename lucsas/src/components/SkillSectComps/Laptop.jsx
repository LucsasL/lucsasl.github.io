// Hooks Import
import { useContext, useRef, useState, useEffect } from "react";

// Images Import
import notebook from "../../img/laptop.svg";
import mobile from "../../img/mobile.webp";

// Context
import { PageLang } from "../../App";
import { Data } from "../../sections/Skills";

// Data Import
import { webSkillsSect } from "../../utils/data";
import { webSkillsSectPort } from "../../utils/dataPortuguese";

function Laptop() {
  // Vars
  const screenSize = window.innerWidth;

  // Context
  const {
    activeTech,
    activeTechPort,
    infoIntersect,
    changeVisibility,
  } = useContext(Data);
  const { lang } = useContext(PageLang);

  // Refs
  const laptopImg = useRef();
  const laptopDiv = useRef();

  // Data extraction
  const { laptopBgImg, laptopNav } = webSkillsSect;
  const { laptopNavPort } = webSkillsSectPort;

  // States
  const [currentImg, setCurrentImg] = useState(laptopNav[-1]);

  const timeDate = new Date();

  useEffect(() => {
    console.log("Language Changed");
  }, [laptopDiv]);

  // It receives a  representing
  const changeSeason = (e) => {
    const prop = e.target.innerText;
    const stations = {
      Spring: `url(${laptopBgImg[0]}) no-repeat center`,
      Summer: `url(${laptopBgImg[1]}) no-repeat center`,
      Fall: `url(${laptopBgImg[2]}) no-repeat center`,
      Winter: `url(${laptopBgImg[3]}) no-repeat center`,
      Primavera: `url(${laptopBgImg[0]}) no-repeat center`,
      Verão: `url(${laptopBgImg[1]}) no-repeat center`,
      Outono: `url(${laptopBgImg[2]}) no-repeat center`,
      Inverno: `url(${laptopBgImg[3]}) no-repeat center`,
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

    const dias = [
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado",
      "Domingo",
    ];

    if (lang !== "English") {
      return dias[day - 1];
    }

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

    const meses = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];

    if (lang !== "English") {
      return meses[month];
    }

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
            <img
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
              {lang === "English"
                ? laptopNav.map((li, i) => {
                    return (
                      <abbr title={li} key={i}>
                        <li onClick={(e) => changeSeason(e)}>{li}</li>
                      </abbr>
                    );
                  })
                : laptopNavPort.map((li, i) => {
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
              {lang === "English"
                ? `This is ${activeTech.content.title}`
                : `Isso é ${activeTechPort.content.title}`}
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
              {lang === "English"
                ? activeTech.content.text
                : activeTechPort.content.text}
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
              {lang === "English"
                ? `Learn more about ${activeTech.content.textLink}`
                : `Veja mais sobre ${activeTech.content.textLink}`}
            </a>
          </div>

          {/* Time and date content */}
          <div
            className="dateTime"
            style={
              screenSize > 992
                ? {
                    display: activeTech.content.dateTime.display,
                    width: activeTech.content.dateTime.width,
                    padding: activeTech.content.dateTime.padding,
                    textAlign: activeTech.content.dateTime.textAlign,
                  }
                : {
                    display: "none",
                  }
            }
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
              {lang === "English" ? (
                <>
                  <br />
                  <span className="date">
                    {weekDay(timeDate.getDay())},{" "}
                    {monthName(timeDate.getMonth())} {timeDate.getDate()}
                  </span>
                </>
              ) : (
                <>
                  <br />
                  <span className="date">
                    {weekDay(timeDate.getDay())}, {timeDate.getDate()}
                    {"  "}
                    {monthName(timeDate.getMonth())}
                  </span>
                </>
              )}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Laptop;
