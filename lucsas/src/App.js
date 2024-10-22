// Hooks Import
import { useState, createContext } from "react";

// Pages-Section Import
import Header from "./sections/Header";
import Main from "./sections/Main";
import Footer from "./sections/Footer";
import UpButton from "./components/upButton";
import Scrollbar from "./components/scrollbar";
import SubmitPopup from "./components/submitPopup";
import "./styles/index.css";

export const SubmitData = createContext(false);
export const PageLang = createContext();

function App() {
  // Control States
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("English");

  return (
    <>
      <PageLang.Provider value={{ lang, setLang }}>
        <Header />

        <SubmitData.Provider value={{ open, setOpen }}>
          <Main />
          <SubmitPopup />
        </SubmitData.Provider>
        <Footer />
        <UpButton />
        <Scrollbar />
      </PageLang.Provider>
    </>
  );
}

export default App;
