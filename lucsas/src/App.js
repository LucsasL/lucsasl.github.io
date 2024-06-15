// Hooks Import

// Pages-Section Import
import Header from "./sections/Header";
import Main from "./sections/Main";
import Footer from "./sections/Footer";
import MsgMe from "./components/MsgMe";
import CustomCursor from "./components/CustomCursor";
import "./styles/index.css";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <MsgMe />
      <CustomCursor />
    </>
  );
}

export default App;
