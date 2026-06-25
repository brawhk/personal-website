import Nav from "./components/Navigation/Navigation";
import Landing from "./components/Landing/Landing";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <div style={{fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif", backgroundColor: '#1c1714'}}>
      <Nav />
      <Landing />
      <About />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
