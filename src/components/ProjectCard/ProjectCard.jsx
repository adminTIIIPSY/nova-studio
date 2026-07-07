import "./ProjectCard.css";

function ProjectCard({
  title,
  progress,
  status,
  color,
}) {
  return (
    <div className="project-card">

      <div
        className="project-color"
        style={{ background: color }}
      />

      <h3>{title}</h3>

      <p>{status}</p>

      <div className="progress-track">

        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        />

      </div>

      <span>{progress}% Complete</span>

    </div>
  );
}

export default ProjectCard;