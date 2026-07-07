import { Link } from "react-router-dom";

import missions from "../../data/missions";

import "./MissionBoard.css";

function MissionBoard() {
  const activeMission = missions[0];

  return (
    <section className="mission-board">
      <div className="mission-header">
        <p>ACTIVE MISSION</p>
        <h2>{activeMission.title}</h2>
      </div>

      <div className="mission-details">
        <div>
          <span>Project</span>
          <strong>{activeMission.project}</strong>
        </div>

        <div>
          <span>Priority</span>
          <strong>{activeMission.priority}</strong>
        </div>

        <div>
          <span>Estimate</span>
          <strong>{activeMission.estimate}</strong>
        </div>
      </div>

      <p className="mission-goal">{activeMission.goal}</p>

      <div className="mission-progress">
        <div className="mission-progress-top">
          <span>Mission Progress</span>
          <strong>{activeMission.progress}%</strong>
        </div>

        <div className="mission-track">
          <div
            className="mission-fill"
            style={{ width: `${activeMission.progress}%` }}
          />
        </div>
      </div>

      <div className="mission-tasks">
        <h3>Next Tasks</h3>

        <ul>
          {activeMission.tasks.map((task) => (
            <li key={task}>☐ {task}</li>
          ))}
        </ul>
      </div>

      <Link className="resume-mission" to="/project/lowki-pays">
        ▶ Resume Mission
      </Link>
    </section>
  );
}

export default MissionBoard;