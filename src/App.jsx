import { useState, useCallback } from "react";
import Navbar from "./components/common/Navbar";
import CommandBar from "./components/common/CommandBar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/project/Projects";
import Contact from "./components/sections/Contact";

function App() {
  const [step, setStep] = useState(0);
  
  const handleHeroComplete = useCallback(() => {
    setStep(1); // triggers About
  }, []);

  const handleAboutComplete = useCallback(() => {
    setStep(2); // triggers Experience
  }, []);

  const handleExperienceComplete = useCallback(() => {
    setStep(3); // triggers Skills
  }, []);

  const handleSkillsComplete = useCallback(() => {
    setStep(4); // triggers Projects
  }, []);

  return (
    <div className="app">
      {/* <Navbar /> */}

      <main className="app-main">
        <div className="flex flex-col items-center justify-center text-center">
          <Hero onComplete={handleHeroComplete} />
        </div>
        <CommandBar />

        <div className="dashboard-grid">
          <div className="left-column">
            {step >= 1 && <About onComplete={handleAboutComplete} />}
            {step >= 2 && <Experience onComplete={handleExperienceComplete} />}
            {step >= 3 && <Skills onComplete={handleSkillsComplete} />}
          </div>

          <div className="right-column">
            {step >= 4 && <Projects onComplete={() => setStep(5)} />}
            {step >= 5 && <Contact />}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
