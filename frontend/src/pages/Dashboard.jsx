function Dashboard( { onProjectsClick,onDocumentsClick,onActivityClick}) {
  return (
    <div className="dashboard">
      <h1>Welcome to IntelliHandover</h1>

      <p>Your project handover workspace</p>

      <div className="dashboard-cards">
        <div className="dashboard-card"
        onClick={onProjectsClick}
        style={{ cursor: "pointer"}}>
          <h2>Projects</h2>
          <p>Manage your projects and handover information.</p>
        </div>

        <div className="dashboard-card"
        onClick={onDocumentsClick}
        style={{cursor:"pointer"}}>
          <h2>Documents</h2>
          <p>View and organize project documents.</p>
        </div>

        <div className="dashboard-card"
          onClick={onActivityClick}
        style={{cursor:"pointer"}}>
          <h2>Activity</h2>
          <p>Track project changes and updates.</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;