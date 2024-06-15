// Hooks Import

// Pages-Section Import
import Header from "./sections/Header";
import Main from "./sections/Main";
import Footer from "./sections/Footer";
import MsgMe from "./components/MsgMe";
import CustomMouse from "./components/CustomMouse";
import "./styles/index.css";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <MsgMe />
      <CustomMouse />
    </>
  );
}

export default App;
