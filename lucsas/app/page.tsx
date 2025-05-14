// Hooks Import
// import React, { useState, createContext } from "react";
import React, { type FC } from "react";

// Pages-Section Import
import Header from "@/sections/Header";
import Main from "@/sections/Main";
import Footer from "@/sections/Footer";
import UpButton from "@/components/upButton";
import Scrollbar from "@/components/scrollbar";
// import SubmitPopup from "@/components/submitPopup";
import "./styles/index.css";

// export const SubmitData = createContext(false);

const Home: FC = () => {
  // const [open, setOpen] = useState(false);

  return (
    <>
      <Header />

      {/* <SubmitData.Provider value={{ open, setOpen }}> */}
      <Main />
      {/* <SubmitPopup /> */}
      {/* </SubmitData.Provider> */}
      <Footer />
      <UpButton />
      <Scrollbar />
    </>
  );
};

export default Home;
