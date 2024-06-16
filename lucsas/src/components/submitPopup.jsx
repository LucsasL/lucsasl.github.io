// Icons Import
import { MdDoneOutline } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

function SubmitPopup() {
  return (
    <>
      <div className="success">
        <div>
          <div className="iconCont">
            <MdDoneOutline className="doneIcon" />
          </div>

          <h1>You email was successfully sent!</h1>
          <p>I'll answer as soon as possible, thanks!</p>
        </div>

        <span className="closeButtCont">
          <IoMdClose className="closeButt" />
        </span>
      </div>
    </>
  );
}

export default SubmitPopup;
