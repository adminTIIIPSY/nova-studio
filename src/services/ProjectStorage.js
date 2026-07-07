import defaultProjects from "../data/projects";

const STORAGE_KEY = "nova-studio-projects";

export function getProjects() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    return defaultProjects;
  }

  return JSON.parse(saved);
}

export function saveProjects(projects) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
}

export function createProject(project) {
  const projects = getProjects();

  const updatedProjects = [...projects, project];

  saveProjects(updatedProjects);

  return updatedProjects;
}