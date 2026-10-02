import { useCallback, useState } from "react";
import CommandBar from "./components/common/CommandBar";
import Modal from "./components/common/Modal";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/project/Projects";
import Contact from "./components/sections/Contact";

function App() {
  const [step, setStep] = useState(0);
  const [activeSection, setActiveSection] = useState(null);
  const closeSection = useCallback(() => setActiveSection(null), []);
  const handleHeroComplete = useCallback(() => setStep(1), []);
  const handleAboutComplete = useCallback(() => setStep(2), []);
  const handleExperienceComplete = useCallback(() => setStep(3), []);
  const handleSkillsComplete = useCallback(() => setStep(4), []);
  const handleProjectsComplete = useCallback(() => setStep(5), []);
  const sections = {
    ABOUT: About,
    SKILLS: Skills,
    EXPERIENCE: Experience,
    PROJECTS: Projects,
    CONTACT: Contact,
  };
  const ActiveSection = activeSection ? sections[activeSection] : null;

  return (
    <div className="app">
      <main className="app-main">
        <div className="flex flex-col items-center justify-center text-center">
          <Hero onComplete={handleHeroComplete} />
        </div>
        <CommandBar activeSection={activeSection} onSelect={setActiveSection} />

        <div className="dashboard-grid">
          <div className="left-column">
            {step >= 1 && <About onComplete={handleAboutComplete} />}
            {step >= 2 && <Experience onComplete={handleExperienceComplete} />}
            {step >= 3 && <Skills onComplete={handleSkillsComplete} />}
          </div>

          <div className="right-column">
            {step >= 4 && <Projects onComplete={handleProjectsComplete} />}
            {step >= 5 && <Contact />}
          </div>
        </div>
      </main>
      {ActiveSection && (
        <Modal title={activeSection} onClose={closeSection}>
          <ActiveSection />
        </Modal>
      )}
    </div>
  );
}

export default App;
