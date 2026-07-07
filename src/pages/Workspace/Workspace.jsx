import "./Workspace.css";
import TaskList from "../../components/TaskList/TaskList";
import ActivityFeed from "../../components/ActivityFeed/ActivityFeed";

function Workspace() {
  return (
    <div className="workspace">

      <div className="workspace-header">

        <h1>🎰 Lowki Pays</h1>

        <p>
          Development Command Center
        </p>

      </div>

      <div className="workspace-grid">

        <div className="workspace-card">

          <h2>Current Sprint</h2>

          <p>Cluster Pays Polish</p>

        </div>

        <div className="workspace-card">

          <h2>Progress</h2>

          <h1>72%</h1>

        </div>

        <TaskList />

        <ActivityFeed />

      </div>

    </div>
  );
}

export default Workspace;