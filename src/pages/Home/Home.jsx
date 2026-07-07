import { Link } from "react-router-dom";

import Sidebar from "../../layout/Sidebar/Sidebar";
import Topbar from "../../layout/Topbar/Topbar";
import StatCard from "../../components/StatCard/StatCard";
import MissionBoard from "../../components/MissionBoard/MissionBoard";

import "./Home.css";

function Home() {
  return (
    <div className="home-layout">
      <Sidebar />

      <div className="home-main">
        <Topbar />

        <main className="home-page">
          <h1>🚀 NOVA STUDIO</h1>

          <h2>The Operating System for SLOT13 Studios</h2>

          <p>Welcome back, Jesse.</p>

          <MissionBoard />

          <Link className="continue-button" to="/project/lowki-pays">
            ▶ Continue Working
          </Link>

          <div className="stats-grid">
            <StatCard
              label="TODAY'S MISSION"
              value="Mission Board"
              note="Build the studio command center"
            />

            <StatCard
              label="STUDIO HEALTH"
              value="68%"
              note="Overall ecosystem progress"
            />

            <StatCard
              label="ACTIVE PROJECTS"
              value="7"
              note="Projects currently tracked"
            />

            <StatCard
              label="OPEN BUGS"
              value="4"
              note="Issues waiting to be fixed"
            />

            <StatCard
              label="CURRENT SPRINT"
              value="013"
              note="Mission Board"
            />

            <StatCard
              label="NEXT MILESTONE"
              value="Session Log"
              note="Record daily progress"
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;