// Hooks Import
import { useRef, useContext } from "react";

// Icons Import
import { MdDoneOutline } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

// Context
import { SubmitData } from "../App";

function SubmitPopup() {
  // State
  const { open, setOpen } = useContext(SubmitData);

  // Refs
  const popup = useRef();

  return (
    <>
      <div className="popupFilter" style={{ display: open ? "flex" : "none" }}>
        <div className="success" ref={popup} >
          <div>
            <div className="iconCont">
              <MdDoneOutline className="doneIcon" />
            </div>
            <h1>You email was successfully sent!</h1>
            <p>I'll answer as soon as possible, thanks!</p>
          </div>
          <span className="closeButtCont">
            <IoMdClose className="closeButt" onClick={() => setOpen(false)} />
          </span>
        </div>
      </div>
    </>
  );
}

export default SubmitPopup;
