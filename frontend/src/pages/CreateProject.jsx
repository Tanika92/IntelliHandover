function CreateProject({onProjectCreated}) {
  return (
    <div>
      <h1>Select Project</h1>

     <p> Choose the project folder you want to monitor.</p>
<button
  onClick={async () => {
    const folder = await window.electronAPI.selectProjectFolder();
    if (folder) {
      alert("Selected folder:\n" + folder);
      onProjectCreated(folder);
    }
  }}
>
  Select Project Folder
</button>
    </div>
  );
}

export default CreateProject;