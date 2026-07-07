import { useParams } from "react-router-dom";

import Sidebar from "../../layout/Sidebar/Sidebar";
import Topbar from "../../layout/Topbar/Topbar";

import { getProjects } from "../../services/projectStorage";

import "./Project.css";

function Project() {
  const { projectId } = useParams();

  const projects = getProjects();

  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return (
      <div className="project-layout">
        <Sidebar />

        <div className="project-main">
          <Topbar />

          <main className="project-page">
            <h1>Project Not Found</h1>
            <p>Nova could not find that project.</p>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="project-layout">
      <Sidebar />

      <div className="project-main">
        <Topbar />

        <main className="project-page">
          <div
            className="project-accent"
            style={{ background: project.color }}
          />

          <h1>{project.title}</h1>
          <p>{project.status}</p>

          <div className="project-grid">
            <section className="project-panel">
              <h2>Progress</h2>
              <h3>{project.progress}%</h3>

              <div className="project-progress-track">
                <div
                  className="project-progress-fill"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </section>

            <section className="project-panel">
              <h2>Current Sprint</h2>
              <p>{project.sprint}</p>
            </section>

            <section className="project-panel">
              <h2>Today's Goal</h2>
              <p>{project.goal}</p>
            </section>

            <section className="project-panel">
              <h2>Tasks</h2>

              <ul>
                {project.tasks.map((task) => (
                  <li key={task}>☐ {task}</li>
                ))}
              </ul>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Project;