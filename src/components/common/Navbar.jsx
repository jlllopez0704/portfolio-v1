export default function Navbar() {
  return (
    <nav className="terminal-box">
      <div
        style={{
          padding: "16px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="neon">jlllopez@portfolio:~$</div>
        <div>STATUS: AVAILABLE</div>
      </div>
    </nav>
  );
}