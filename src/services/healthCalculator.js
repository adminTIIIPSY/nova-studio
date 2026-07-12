export function calculateHealth(data) {
  const values = [
    data.projects.completed / data.projects.total,
    data.bugs.fixed / data.bugs.total,
    data.missions.completed / data.missions.total,
    data.documentation.completed / data.documentation.total,
    data.assets.completed / data.assets.total,
  ];

  const average =
    values.reduce((a, b) => a + b, 0) / values.length;

  return Math.round(average * 100);
}