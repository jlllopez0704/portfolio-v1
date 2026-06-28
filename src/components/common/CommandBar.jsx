import resumeUrl from "../../data/John_Lenn_Lopez_Resume.pdf";

export default function CommandBar() {
  const items = ["ABOUT", "SKILLS", "EXPERIENCE", "PROJECTS", "CONTACT"];

  return (
    <div className="command-bar">
      {items.map((item, index) => (
        <button key={item} className="command-btn">
          [{String(index + 1).padStart(2, "0")}] {item}
        </button>
      ))}

      <a
        href={resumeUrl}
        download="John_Lenn_Lopez_Resume.pdf"
        className="resume-btn inline-flex items-center justify-center no-underline"
      >
        &gt;_ DOWNLOAD RESUME
      </a>
    </div>
  );
}