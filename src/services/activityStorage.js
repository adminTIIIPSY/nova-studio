const STORAGE_KEY = "nova_activity";

export function loadActivity() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) return [];

  return JSON.parse(saved);
}

export function saveActivity(activity) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(activity)
  );
}

export function addActivity(item) {
  const current = loadActivity();

  current.unshift(item);

  saveActivity(current);
}