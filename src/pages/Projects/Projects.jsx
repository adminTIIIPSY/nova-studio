import { Link } from "react-router-dom";

import Sidebar from "../../layout/Sidebar/Sidebar";
import Topbar from "../../layout/Topbar/Topbar";

import { getProjects } from "../../services/projectStorage";

import "./Projects.css";

function Projects() {
  const projects = getProjects();

  return (
    <div className="projects-layout">
      <Sidebar />

      <div className="projects-main">
        <Topbar />

        <main className="projects-page">
          <h1>📁 Projects</h1>
          <p>Welcome to the SLOT13 project hub.</p>

          <div className="projects-grid">
            {projects.map((project) => (
              <Link
                className="project-link-card"
                to={`/project/${project.id}`}
                key={project.id}
              >
                <div
                  className="project-link-accent"
                  style={{ background: project.color }}
                />

                <h2>{project.title}</h2>
                <p>{project.status}</p>
                <strong>{project.progress}% Complete</strong>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Projects;