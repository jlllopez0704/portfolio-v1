import TerminalBox from "../common/TerminalBox";
import TerminalTyping from "../common/TerminalTyping";

export default function About({ onComplete }) {
  const lines = [
    "Name: John Lenn L. Lopez",
    "Role: Full Stack Developer / IoT Developer",
    "Experience: 4+ years",
    "Location: Sta. Maria, Bulacan, Philippines",
    "Summary: I build scalable web applications, REST APIs, mobile applications, and IoT-powered solutions.",
  ];

  return (
    <TerminalBox title="About">
      <div className="space-y-2 text-sm">
        <TerminalTyping
          items={lines}
          speed={150}
          onComplete={onComplete}
          renderItem={(line, i) => <p key={i}>{line}</p>}
        />
      </div>
    </TerminalBox>
  );
}
