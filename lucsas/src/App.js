// Hooks Import
import { 
  BrowserRouter as Router,
  Routes,
  Route
 } from "react-router-dom";

// Pages Import
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import MsgMe from "./components/MsgMe";
import "./styles/index.css";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
        </Routes>
      </Router>
      <Footer />
      <MsgMe />
    </>
  );
}

export default App;
