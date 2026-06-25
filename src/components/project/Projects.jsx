import TerminalBox from "../common/TerminalBox";
import { projects } from "../../data/projects";
import projectPreview from "../../assets/images/7a9d6029-790e-4540-b4f6-02785234ea9e.jpg";

export default function Projects() {
  const [featuredProject, ...otherProjects] = projects;

  return (
    <TerminalBox title="projects">
      <div className="projects-panel">
        <article className="project-feature">
          <div
            className="project-preview-shell"
            aria-label={`${featuredProject.title} interface preview`}
          >
            <div className="project-preview-toolbar">
              <div className="window-dots" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="preview-path">
                /projects/{featuredProject.title.toLowerCase().replaceAll(" ", "-")}
              </span>
            </div>

            <img
              src={projectPreview}
              alt={`${featuredProject.title} UI preview`}
              className="project-preview-image"
            />
          </div>

          <div className="project-feature-copy">
            <div className="project-kicker">
              <span className="status-dot"></span>
              {featuredProject.status}
            </div>

            <h2>{featuredProject.title}</h2>
            <p>{featuredProject.description}</p>

            <div className="project-stack">
              {featuredProject.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="project-metrics">
              {featuredProject.metrics.map((metric) => (
                <span key={metric}>{metric}</span>
              ))}
            </div>
          </div>
        </article>

        <div className="project-list" aria-label="Other projects">
          {otherProjects.map((project) => (
            <button key={project.id} className="project-card" type="button">
              <span>
                <strong>{project.title}</strong>
                <small>{project.description}</small>
              </span>
              <em>{project.status}</em>
            </button>
          ))}
        </div>
      </div>
    </TerminalBox>
  );
}
