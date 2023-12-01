import './App.scss';
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <section id="Homepage">
         <Navbar />
        {/* <Hero /> */}
        <h1>Home</h1>
      </section>
      <section id="Experience">
      <h1>Experience</h1>
      </section>
      <section>
        <h1>Experience page 2</h1>
      </section>
      <section id="Portfolio">
      <h1>Portfolio</h1>
      </section>
      
      <section id="Contact">
      <h1>Contact</h1>
      </section>
      {/* Framer Motion Crash Course */}
      {/* <Test/>
    <Test/> */}
    </div>
  );
}

export default App;
