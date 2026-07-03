import { useState, useMemo } from "react";
import TerminalBox from "../common/TerminalBox";
import { projects } from "../../data/projects";

export default function Projects() {
  // Group projects by company
  const grouped = useMemo(() => {
    return projects.reduce((acc, project) => {
      const company = project.company || "Other";
      if (!acc[company]) {
        acc[company] = [];
      }
      acc[company].push(project);
      return acc;
    }, {});
  }, []);

  const companies = Object.keys(grouped);
  const [activeCompany, setActiveCompany] = useState(companies[0] || "");
  
  // Get projects for current company
  const currentProjects = grouped[activeCompany] || [];
  
  // Track selected project
  const [selectedProjectId, setSelectedProjectId] = useState(currentProjects[0]?.id || projects[0]?.id);

  // Get active project details
  const activeProject = useMemo(() => {
    return currentProjects.find((p) => p.id === selectedProjectId) || currentProjects[0] || projects[0];
  }, [currentProjects, selectedProjectId]);

  // Update selected project when changing company
  const handleCompanyChange = (company) => {
    setActiveCompany(company);
    const firstProj = grouped[company]?.[0];
    if (firstProj) {
      setSelectedProjectId(firstProj.id);
    }
  };

  return (
    <TerminalBox title="projects">
      <div className="projects-panel">
        {/* Category Tabs */}
        <div className="flex gap-2 border-b border-[rgba(57,255,20,0.2)] pb-3 mb-2 overflow-x-auto">
          {companies.map((company) => (
            <button
              key={company}
              onClick={() => handleCompanyChange(company)}
              className={`px-3 py-1 text-xs font-semibold rounded cursor-pointer border transition-all whitespace-nowrap ${
                activeCompany === company
                  ? "bg-[rgba(57,255,20,0.15)] border-[#39ff14] text-[#f3fff5] shadow-[0_0_10px_rgba(57,255,20,0.2)]"
                  : "bg-transparent border-transparent text-[#9eb7a3] hover:text-[#f3fff5] hover:border-[rgba(57,255,20,0.3)]"
              }`}
            >
              &gt; {company}
            </button>
          ))}
        </div>

        <article className="project-feature">
          <div
            className="project-preview-shell"
            aria-label={`${activeProject.title} interface preview`}
          >
            <div className="project-preview-toolbar">
              <div className="window-dots" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="preview-path font-mono text-[10px]">
                ~/projects/{activeProject.company.toLowerCase().replaceAll(" ", "-")}/{activeProject.title.toLowerCase().replaceAll(" ", "-")}
              </span>
            </div>

            <img
              src={activeProject.image}
              alt={`${activeProject.title} UI preview`}
              className="project-preview-image"
            />
          </div>

          <div className="project-feature-copy">
            <div className="project-kicker">
              <span className="status-dot"></span>
              {activeProject.status}
            </div>

            <h2 className="text-xl font-bold tracking-tight">{activeProject.title}</h2>
            <p className="text-sm leading-relaxed">{activeProject.description}</p>

            <div className="project-stack">
              {activeProject.stack.map((tech) => (
                <span key={tech} className="font-mono">{tech}</span>
              ))}
            </div>

            {activeProject.metrics && activeProject.metrics.length > 0 && (
              <div className="project-metrics">
                {activeProject.metrics.map((metric) => (
                  <span key={metric}>{metric}</span>
                ))}
              </div>
            )}
          </div>
        </article>

        <div className="project-list" aria-label="Other projects in this category">
          {currentProjects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProjectId(project.id)}
              className={`project-card ${
                selectedProjectId === project.id
                  ? "border-[#39ff14] bg-[rgba(57,255,20,0.08)] shadow-[0_0_12px_rgba(57,255,20,0.1)]"
                  : ""
              }`}
              type="button"
            >
              <span>
                <strong className={selectedProjectId === project.id ? "text-[#39ff14]" : ""}>
                  {project.title}
                </strong>
                <small className="line-clamp-2">{project.description}</small>
                {project.components && project.components.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.components.map((comp) => (
                      <span key={comp} className="text-[9px] font-mono px-1.5 py-0.5 rounded border border-[rgba(57,190,255,0.32)] bg-[rgba(57,190,255,0.08)] text-[#cfedff] leading-none">
                        {comp}
                      </span>
                    ))}
                  </div>
                )}
              </span>
              <em>{project.status}</em>
            </button>
          ))}
        </div>
      </div>
    </TerminalBox>
  );
}
