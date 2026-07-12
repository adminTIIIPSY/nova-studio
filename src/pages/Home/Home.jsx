import Sidebar from "../../layout/Sidebar/Sidebar";
import Topbar from "../../layout/Topbar/Topbar";

import MissionBoard from "../../components/MissionBoard/MissionBoard";
import ActivityFeed from "../../components/ActivityFeed/ActivityFeed";
import StudioHealth from "../../components/StudioHealth/StudioHealth";

import "./Home.css";

function Home() {
  return (
    <div className="home-layout">
      <Sidebar />

      <div className="home-main">
        <Topbar />

        <main className="home-page">
          <section className="home-hero">
            <p className="home-eyebrow">
              SLOT13 STUDIOS COMMAND CENTER
            </p>

            <h1>🚀 NOVA STUDIO</h1>

            <h2>The Operating System for SLOT13 Studios</h2>

            <p className="home-welcome">
              Welcome back, Jesse. Pick up exactly where you left off.
            </p>
          </section>

          <MissionBoard />

          <section className="dashboard-grid">

            <ActivityFeed />

            <StudioHealth />

          </section>

        </main>
      </div>
    </div>
  );
}

export default Home;