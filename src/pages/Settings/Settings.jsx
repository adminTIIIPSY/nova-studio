import Sidebar from "../../layout/Sidebar/Sidebar";
import Topbar from "../../layout/Topbar/Topbar";

import "./Settings.css";

function Settings() {
  return (
    <div className="settings-layout">
      <Sidebar />

      <div className="settings-main">
        <Topbar />

        <main className="settings-page">
          <h1>⚙ Studio Settings</h1>

          <p>
            Configure Nova Studio and the SLOT13 ecosystem.
          </p>

          <div className="settings-grid">

            <section className="settings-card">
              <h2>🎨 Appearance</h2>

              <p><strong>Theme:</strong> Dark</p>

              <p><strong>Accent:</strong> Purple</p>

              <p><strong>Version:</strong> Alpha 0.1.0</p>
            </section>

            <section className="settings-card">
              <h2>🚀 Studio</h2>

              <p><strong>Name:</strong> Nova Studio</p>

              <p><strong>Company:</strong> SLOT13 Studios</p>

              <p><strong>Current Sprint:</strong> Sprint 2</p>
            </section>

            <section className="settings-card">
              <h2>🤖 Nova AI</h2>

              <p>✅ Assistant Enabled</p>

              <p>✅ Architecture Mode</p>

              <p>✅ Development Partner</p>
            </section>

            <section className="settings-card">
              <h2>💻 Development</h2>

              <p>✅ React</p>

              <p>✅ React Router</p>

              <p>⏳ Git Integration</p>

              <p>⏳ Asset Scanner</p>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
}

export default Settings;