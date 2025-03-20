// Hooks Import
// import { useState, createContext } from "react";

// Pages-Section Import
import Header from "@/app/(sections)/Header";
import Main from "@/app/(sections)/Main";
import Footer from "@/app/(sections)/Footer";
import UpButton from "@/app/(components)/upButton";
import Scrollbar from "@/app/(components)/scrollbar";
import SubmitPopup from "@/app/(components)/submitPopup";
import "./styles/index.css";

// export const SubmitData = createContext(false);

export function Home() {
  // const [open, setOpen] = useState(false);

  return (
    <>
      <Header />

      {/* <SubmitData.Provider value={{ open, setOpen }}> */}
        <Main />
        <SubmitPopup />
      {/* </SubmitData.Provider> */}
      <Footer />
      <UpButton />
      <Scrollbar />
    </>
  );
};