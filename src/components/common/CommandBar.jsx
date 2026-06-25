export default function CommandBar() {
  const items = ["ABOUT", "SKILLS", "EXPERIENCE", "PROJECTS", "CONTACT"];

  return (
    <div className="command-bar">
      {items.map((item, index) => (
        <button key={item} className="command-btn">
          [{String(index + 1).padStart(2, "0")}] {item}
        </button>
      ))}

      <button className="resume-btn">
        &gt;_ DOWNLOAD RESUME
      </button>
    </div>
  );
}