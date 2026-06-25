import TerminalBox from "../common/TerminalBox";

export default function About() {
  return (
    <TerminalBox title="whoami">
      <pre className="text-sm whitespace-pre-wrap">
{`{
  name: "John Lenn Lopez",
  role: "Full Stack Developer",
  experience: "4+ years",
  location: "Bulacan, Philippines"
}`}
      </pre>
    </TerminalBox>
  );
}