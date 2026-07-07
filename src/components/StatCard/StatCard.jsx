import "./StatCard.css";

function StatCard({ label, value, note }) {
  return (
    <div className="stat-card">
      <p className="stat-label">{label}</p>
      <h3>{value}</h3>
      <p className="stat-note">{note}</p>
    </div>
  );
}

export default StatCard;