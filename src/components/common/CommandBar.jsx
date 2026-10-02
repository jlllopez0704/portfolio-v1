import resumeUrl from "../../data/John_Lenn_Lopez_Resume.pdf";
import { FaFileDownload } from "react-icons/fa";

export default function CommandBar({ activeSection, onSelect }) {
  const items = ["ABOUT", "SKILLS", "EXPERIENCE", "PROJECTS", "CONTACT"];

  return (
    <div className="command-bar">
      {items.map((item) => (
        <button
          key={item}
          type="button"
          className={`command-btn ${activeSection === item ? "active" : ""}`}
          aria-haspopup="dialog"
          onClick={() => onSelect(item)}
        >
          {item}
        </button>
      ))}

      <a
        href={resumeUrl}
        download="John_Lenn_Lopez_Resume.pdf"
        className="resume-btn inline-flex items-center justify-center no-underline"
      >
        <FaFileDownload style={{ marginRight: 5 }} /> DOWNLOAD RESUME
      </a>
    </div>
  );
}
