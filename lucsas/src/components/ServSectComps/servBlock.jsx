// import { Context } = "../../sections";

function servBlock({ ref, img, key, style, title, text, index }) {
  return (
    <>
      <div className="servBlock" ref={ref} key={key} style={style[index]}>
        <div className="imgSv">
          <figure>
            <img
              src={img}
              alt="Connection with your target audience"
              className="functions"
            />
          </figure>
        </div>

        <div className="imgSv"></div>

        <div>
          <h2 style={{ fontSize: "2em" }}>{title}</h2>

          <p>{text}</p>
        </div>
      </div>
    </>
  );
}

export default servBlock;
