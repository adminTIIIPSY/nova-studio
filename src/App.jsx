import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Project from "./pages/Project/Project";
import NewProject from "./pages/NewProject/NewProject";
import Assets from "./pages/Assets/Assets";
import Roadmap from "./pages/Roadmap/Roadmap";
import Bugs from "./pages/Bugs/Bugs";
import Bible from "./pages/Bible/Bible";
import Settings from "./pages/Settings/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/new" element={<NewProject />} />
        <Route path="/project/:projectId" element={<Project />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/bugs" element={<Bugs />} />
        <Route path="/bible" element={<Bible />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;