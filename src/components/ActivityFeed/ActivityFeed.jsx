import defaultActivity from "../../data/activity";
import {
  loadActivity,
  saveActivity,
} from "../../services/activityStorage";

import "./ActivityFeed.css";

function ActivityFeed() {
  let activities = loadActivity();

  if (activities.length === 0) {
    activities = defaultActivity;
    saveActivity(defaultActivity);
  }

  return (
    <section className="activity-feed">
      <div className="activity-feed-header">
        <div>
          <p className="activity-feed-label">STUDIO TIMELINE</p>
          <h2>Recent Activity</h2>
        </div>

        <span className="activity-feed-count">
          {activities.length} Updates
        </span>
      </div>

      <div className="activity-list">
        {activities.map((item) => (
          <article className="activity-item" key={item.id}>
            <div className={`activity-icon activity-${item.type}`}>
              {item.icon}
            </div>

            <div className="activity-content">
              <h3>{item.title}</h3>
              <p>{item.time}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ActivityFeed;