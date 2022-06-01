import Nav from "./components/Navigation/Navigation";
import Landing from "./components/Landing/Landing";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div style={{fontFamily: "Montserrat"}}>
      <Nav />
      <Landing />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
