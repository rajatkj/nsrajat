import './App.scss';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills"
import Experience from './components/experience/Experience';
import Project from './components/project/Project';
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
      <Project/>
      </section>
      <section id="Contact">
      <h1>Contact</h1>
      </section>
    </div>
  );
}

export default App;
