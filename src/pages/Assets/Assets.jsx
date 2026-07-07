import Sidebar from "../../layout/Sidebar/Sidebar";
import Topbar from "../../layout/Topbar/Topbar";

import "./Assets.css";

function Assets() {
  return (
    <div className="assets-layout">
      <Sidebar />

      <div className="assets-main">
        <Topbar />

        <main className="assets-page">
          <h1>🖼 Assets</h1>
          <p>Central library for SLOT13 visuals, audio, branding, and game files.</p>

          <div className="assets-grid">
            <section className="asset-card">
              <h2>Logos</h2>
              <p>SLOT13, Nova Studio, ClubSocial, Lowki Pays.</p>
            </section>

            <section className="asset-card">
              <h2>Game Assets</h2>
              <p>Symbols, cards, backgrounds, buttons, UI panels.</p>
            </section>

            <section className="asset-card">
              <h2>Streaming</h2>
              <p>OBS overlays, alerts, scene graphics, ticker assets.</p>
            </section>

            <section className="asset-card">
              <h2>Audio</h2>
              <p>Music, sound effects, win sounds, UI clicks.</p>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Assets;