function ProjectDetails({projectFolder}) {
  return (
    <div>
      <h1>Project Dashboard</h1>

      <p>Your selected project is being monitored.</p>
      <p>Project Folder: {projectFolder}</p>

      <h2>Project Overview</h2>

      <div>
        <button>📁 Files / Documents</button>
        <button>📊 Activity & History</button>
        <button>📈 Progress</button>
        <button>⏳ Pending Work</button>
        <button>🤖 AI Handover</button>
        <button>💬 AI Q&A</button>
      </div>
    </div>
  );
}

export default ProjectDetails;