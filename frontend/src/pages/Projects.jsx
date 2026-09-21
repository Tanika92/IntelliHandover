function Projects({onCreateProject}) {
  return (
    <div>
      <h1>Projects</h1>
      <p>Manage your projects and handover information.</p>
      <button onClick={onCreateProject}
      >
        Create Project 
        </button>
    </div>
  );
}

export default Projects;