import Sidebar from "../../layout/Sidebar/Sidebar";
import Topbar from "../../layout/Topbar/Topbar";

import "./Bible.css";

function Bible() {
  return (
    <div className="bible-layout">
      <Sidebar />

      <div className="bible-main">
        <Topbar />

        <main className="bible-page">
          <h1>📖 Project Bible</h1>
          <p>The living source of truth for SLOT13 Studios.</p>

          <div className="bible-card">
            <h2>Studio Vision</h2>
            <p>
              SLOT13 is a graffiti-styled social casino, gaming, streaming,
              affiliate, and creator ecosystem.
            </p>
          </div>

          <div className="bible-card">
            <h2>Core Rule</h2>
            <p>
              Build once. Improve forever. Every feature needs a home inside
              Nova Studio.
            </p>
          </div>

          <div className="bible-card">
            <h2>Current Priority</h2>
            <p>
              Finish Nova Studio foundation, then use it to organize ClubSocial,
              Tracker, Lowki Pays, Poker, and all shared assets.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Bible;