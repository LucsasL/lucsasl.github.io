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

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header />
      <SubmitData.Provider value={{ open, setOpen }}>
        <Main />
        <SubmitPopup />
      </SubmitData.Provider>
      <Footer />
      <MsgMe />
      <CustomCursor />
    </>
  );
}

export default App;
