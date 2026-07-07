import Sidebar from "../../layout/Sidebar/Sidebar";
import Topbar from "../../layout/Topbar/Topbar";

import "./Roadmap.css";

function Roadmap() {
  return (
    <div className="roadmap-layout">
      <Sidebar />

      <div className="roadmap-main">
        <Topbar />

        <main className="roadmap-page">
          <h1>🛣 Roadmap</h1>
          <p>Mission plan for Nova Studio and the SLOT13 ecosystem.</p>

          <div className="roadmap-list">
            <section className="roadmap-card">
              <h2>Mission 001-010</h2>
              <p>Nova Studio foundation, routing, dashboard, and project workspaces.</p>
            </section>

            <section className="roadmap-card">
              <h2>Next</h2>
              <p>Asset manager, sprint board, project bible, and session logs.</p>
            </section>

            <section className="roadmap-card">
              <h2>Revenue Phase</h2>
              <p>Finish Tracker and ClubSocial affiliate launch.</p>
            </section>

            <section className="roadmap-card">
              <h2>Game Phase</h2>
              <p>Lowki Pays demo, SLOT13 Poker alpha, Plinko and Temple13 review.</p>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Roadmap;