export default function TerminalBox({ title, children }) {
  return (
    <div className="terminal-box">
      <div className="terminal-header">
        <span>&gt; {title}</span>

        <div className="terminal-actions">
          <span>—</span>
          <span>□</span>
          <span>×</span>
        </div>
      </div>

      <div className="terminal-body">{children}</div>
    </div>
  );
}