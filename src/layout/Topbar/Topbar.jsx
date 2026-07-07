import "./Topbar.css";

function Topbar() {
  return (
    <header className="topbar">

      <div className="topbar-left">

        <h2>🚀 Nova Studio</h2>

      </div>

      <div className="topbar-center">

        <input
          type="text"
          placeholder="Search projects..."
        />

      </div>

      <div className="topbar-right">

        <span>🔔</span>

        <span>⚙</span>

        <span>👤 Jesse</span>

      </div>

    </header>
  );
}

export default Topbar;