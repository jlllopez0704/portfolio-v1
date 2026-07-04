import Navbar from "./components/common/Navbar";
import CommandBar from "./components/common/CommandBar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/project/Projects";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="app">
      {/* <Navbar /> */}

      <main className="app-main">
        <div className="flex flex-col items-center justify-center text-center">
          <Hero />
        </div>
        <CommandBar />

        <div className="dashboard-grid">
          <div className="left-column">
            <About />
            <Skills />
            <Experience />
          </div>

          <div className="right-column">
            <Projects />
            <Contact />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;