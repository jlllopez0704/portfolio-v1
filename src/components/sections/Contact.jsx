import TerminalBox from "../common/TerminalBox";
import TerminalTyping from "../common/TerminalTyping";

export default function Contact({ onComplete }) {
  const lines = [
    "Email: johnlennlopez@gmail.com",
    "GitHub: github.com/jlllopez0704",
    "GitLab: gitlab.com/jllopez",
  ];
  return (
    <TerminalBox title="contact">
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
