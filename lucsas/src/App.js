// Hooks Import
import { useState, createContext } from "react";

// Pages-Section Import
import Header from "./sections/Header";
import Main from "./sections/Main";
import Footer from "./sections/Footer";
import MsgMe from "./components/MsgMe";
import CustomCursor from "./components/CustomCursor";
import SubmitPopup from "./components/submitPopup";
import "./styles/index.css";

export const SubmitData = createContext(false);
export const cursorInteraction = createContext();

function App() {
  const [open, setOpen] = useState(false);
  const [buttons] = useState([]);

  return (
    <>
      <cursorInteraction.Provider value={buttons}>
        <Header />
        <SubmitData.Provider value={{ open, setOpen }}>
          <Main />
          <SubmitPopup />
        </SubmitData.Provider>
        <Footer />
        <MsgMe />
        <CustomCursor />
      </cursorInteraction.Provider>
    </>
  );
}

export default App;
