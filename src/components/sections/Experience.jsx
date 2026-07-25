import TerminalBox from "../common/TerminalBox";
import TerminalTyping from "../common/TerminalTyping";

export default function Experience({ onComplete }) {
  const lines = [
    "Programmer III",
    "2024–Present | DSWD MIMAROPA",
    "Development SDLC, System Presentation and resolve ticket issue for system, maintenance",
    "",
    "Programmer II",
    "2023–2024 | DSWD MIMAROPA",
    "Development SDLC, experience on hardware resolve tickets",
    " ",
    "Jr. Software Engineer / Jr. System Administrator",
    "2022–2023 | JRA T.I",
    "Development backend server, script automation for mobile network configuration, setup server network",
  ];

  return (
    <TerminalBox title="experience">
      <div className="text-sm">
        <TerminalTyping
          items={lines}
          speed={150}
          onComplete={onComplete}
          renderItem={(line, i) =>
            line.trim() === "" ? <br key={i} /> : <p key={i}>{line}</p>
          }
        />
      </div>
    </TerminalBox>
  );
}
