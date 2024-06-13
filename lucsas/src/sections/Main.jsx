import Introsect from "./Introsect";
import Services from "./Services";
import About from "./About";
import Areas from "./Areas";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

function Main() {
  return (
    <>
      <main>
        <div>
          <Introsect />
          <Services />
          <About />
          <Areas />
          <Skills />
          <Portfolio />
          <Contact />
        </div>
      </main>
    </>
  );
}

export default Main;
