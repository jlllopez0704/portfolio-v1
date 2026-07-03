import TerminalBox from "../common/TerminalBox";

export default function Experience() {
  return (
    <TerminalBox title="experience">
      <div className="space-y-6 text-sm">
        <div>
          <div className="flex justify-between items-start flex-wrap gap-1 font-semibold text-[#f3fff5]">
            <span>Programmer III</span>
            <span className="text-xs text-[#9eb7a3]">2024–Present | DSWD MIMAROPA</span>
          </div>
          <p className="text-[#bdd8c2] text-xs mt-1 leading-relaxed">
            Development SDLC, System Presentation and resolve ticket issue for system, maintenance
          </p>
        </div>

        <div>
          <div className="flex justify-between items-start flex-wrap gap-1 font-semibold text-[#f3fff5]">
            <span>Programmer II</span>
            <span className="text-xs text-[#9eb7a3]">2023–2024 | DSWD MIMAROPA</span>
          </div>
          <p className="text-[#bdd8c2] text-xs mt-1 leading-relaxed">
            Development SDLC, experience on hardware resolve tickets
          </p>
        </div>

        <div>
          <div className="flex justify-between items-start flex-wrap gap-1 font-semibold text-[#f3fff5]">
            <span>Jr. Software Engineer / Jr. System Administrator</span>
            <span className="text-xs text-[#9eb7a3]">2022–2023 | JRA T.I</span>
          </div>
          <p className="text-[#bdd8c2] text-xs mt-1 leading-relaxed">
            Development backend server, script automation for mobile network configuration, setup server network
          </p>
        </div>
      </div>
    </TerminalBox>
  );
}