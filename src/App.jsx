import './App.scss';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills"
import Experience from './components/skills/experience/Experience';

function App() {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Home />
      </section>
      <section id="Skills">
      <Skills/>
      </section>
      <section id="Experience">
      <Experience/>
      </section>
      <section id="Projects">
      <h1>Portfolio</h1>
      </section>
      <section id="Contact">
      <h1>Contact</h1>
      </section>
    </div>
  );
}

export default App;
