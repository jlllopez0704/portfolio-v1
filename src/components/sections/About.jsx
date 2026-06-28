import TerminalBox from "../common/TerminalBox";

export default function About() {
  return (
    <TerminalBox title="whoami">
      <div className="space-y-2 text-sm">
        <p>Name: John Lenn L. Lopez</p>
        <p>Role: Full Stack Developer</p>
        <p>Experience: 4+ years</p>
        <p>Location: Sta. Maria Bulacan, Philippines</p>
      </div>
    </TerminalBox>
  );
}
