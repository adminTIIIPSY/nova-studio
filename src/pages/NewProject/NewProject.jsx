import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../../layout/Sidebar/Sidebar";
import Topbar from "../../layout/Topbar/Topbar";

import { createProject } from "../../services/projectStorage";

import "./NewProject.css";

function NewProject() {
  const navigate = useNavigate();

  const [projectName, setProjectName] = useState("");
  const [projectType, setProjectType] = useState("Game");
  const [status, setStatus] = useState("Idea");

  function handleCreateProject() {
    if (!projectName.trim()) {
      alert("Please enter a project name.");
      return;
    }

    const id = projectName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    const newProject = {
      id,
      title: projectName,
      progress: 0,
      status: `${projectType} - ${status}`,
      color: "#8b2dff",
      sprint: "New Project Setup",
      goal: "Define project roadmap",
      tasks: [
        "Create project notes",
        "Add first roadmap",
        "Add assets",
        "Define launch goal",
      ],
    };

    createProject(newProject);

    navigate(`/project/${id}`);
  }

  return (
    <div className="new-project-layout">
      <Sidebar />

      <div className="new-project-main">
        <Topbar />

        <main className="new-project-page">
          <h1>➕ New Project</h1>
          <p>Create a new SLOT13 project workspace.</p>

          <div className="new-project-card">
            <h2>Project Template</h2>

            <label>Project Name</label>
            <input
              type="text"
              placeholder="Example: SLOT13 Blackjack"
              value={projectName}
              onChange={(event) => setProjectName(event.target.value)}
            />

            <label>Project Type</label>
            <select
              value={projectType}
              onChange={(event) => setProjectType(event.target.value)}
            >
              <option>Game</option>
              <option>Website</option>
              <option>Tracker</option>
              <option>Streaming</option>
              <option>Business</option>
              <option>Asset Pack</option>
            </select>

            <label>Starting Status</label>
            <select
              value={status}
              onChange={(event) => setStatus(event.target.value)}
            >
              <option>Idea</option>
              <option>Prototype</option>
              <option>Active</option>
              <option>Paused</option>
            </select>

            <button onClick={handleCreateProject}>
              Create Project
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default NewProject;