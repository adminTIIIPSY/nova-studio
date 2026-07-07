import Sidebar from "../../layout/Sidebar/Sidebar";
import Topbar from "../../layout/Topbar/Topbar";

import "./Bugs.css";

function Bugs() {
  return (
    <div className="bugs-layout">
      <Sidebar />

      <div className="bugs-main">
        <Topbar />

        <main className="bugs-page">
          <h1>🐞 Bugs</h1>
          <p>Known issues and fixes across SLOT13 projects.</p>

          <div className="bugs-grid">
            <section className="bug-card high">
              <h2>Lowki Pays</h2>
              <p>Assets not loading correctly in some builds.</p>
              <strong>High Priority</strong>
            </section>

            <section className="bug-card high">
              <h2>Lowki Pays</h2>
              <p>Spin button missing in older build.</p>
              <strong>High Priority</strong>
            </section>

            <section className="bug-card medium">
              <h2>SLOT13 Poker</h2>
              <p>Action hit boxes need final alignment.</p>
              <strong>Medium Priority</strong>
            </section>

            <section className="bug-card medium">
              <h2>ClubSocial</h2>
              <p>Multiple versions need merge into master build.</p>
              <strong>Medium Priority</strong>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Bugs;