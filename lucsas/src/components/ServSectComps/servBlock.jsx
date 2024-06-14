// Hooks Import
import { useContext } from "react";

import BlocksData from "../../sections/Services";

function ServBlock() {
  const [ title, text, img ] = useContext(BlocksData);

  return (
    <>
      <div className="S">
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

export default ServBlock;
