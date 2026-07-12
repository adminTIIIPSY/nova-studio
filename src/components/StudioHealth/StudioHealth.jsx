import healthData from "../../data/health";
import { calculateHealth } from "../../services/healthCalculator";

import "./StudioHealth.css";

function StudioHealth() {
  const health = calculateHealth(healthData);

  return (
    <section className="studio-health">
      <p className="studio-health-label">
        STUDIO HEALTH
      </p>

      <h2>{health}%</h2>

      <div className="health-bar">
        <div
          className="health-fill"
          style={{
            width: `${health}%`,
          }}
        />
      </div>

      <div className="health-grid">
        <div>
          <span>Projects</span>

          <strong>
            {healthData.projects.completed}/
            {healthData.projects.total}
          </strong>
        </div>

        <div>
          <span>Bugs</span>

          <strong>
            {healthData.bugs.fixed}/
            {healthData.bugs.total}
          </strong>
        </div>

        <div>
          <span>Missions</span>

          <strong>
            {healthData.missions.completed}/
            {healthData.missions.total}
          </strong>
        </div>

        <div>
          <span>Documentation</span>

          <strong>
            {healthData.documentation.completed}/
            {healthData.documentation.total}
          </strong>
        </div>

        <div>
          <span>Assets</span>

          <strong>
            {healthData.assets.completed}/
            {healthData.assets.total}
          </strong>
        </div>
      </div>
    </section>
  );
}

export default StudioHealth;