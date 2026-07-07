import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">🚀 NOVA</h2>

      <nav>
        <Link to="/">🏠 Home</Link>
        <Link to="/projects">🎮 Projects</Link>
        <Link to="/projects/new">➕ New Project</Link>
        <Link to="/assets">🖼 Assets</Link>
        <Link to="/roadmap">🛣 Roadmap</Link>
        <Link to="/bugs">🐞 Bugs</Link>
        <Link to="/bible">📖 Bible</Link>
        <Link to="/settings">⚙ Settings</Link>
      </nav>
    </aside>
  );
}

export default Sidebar;