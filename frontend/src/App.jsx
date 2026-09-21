import { useState ,useEffect} from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Documents from "./pages/Documents";
import Activity from "./pages/Activity";
import CreateProject from "./pages/CreateProject";
import ProjectDetails from "./pages/ProjectDetails";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showProjects,setShowProjects]=useState(false);
  const [projectFolder,setProjectFolder]=useState("");
   const [showCreateProject,setShowCreateProject]=useState(false);
   const [showProjectDetails,setShowProjectDetails]=useState(false);
  const [showActivity,setShowActivity]=useState(false);
  const [showDocuments,setShowDocuments]=useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setLoggedIn(true);
  };

if (loggedIn) {
  if (showDocuments) return <Documents />;

  if (showProjectDetails) {
    return (
      <ProjectDetails
        projectFolder={projectFolder}
        onFilesClick={() => setShowDocuments(true)}
      />
    );
  }

  if (showActivity) return <Activity />;

  if (showCreateProject) {
    return (
      <CreateProject
        onProjectCreated={(folder) => {
          setProjectFolder(folder);
          setShowProjectDetails(true);
        }}
      />
    );
  }

  return showProjects ? (
    <Projects
      onCreateProject={() => setShowCreateProject(true)}
    />
  ) : (
    <Dashboard
      onProjectsClick={() => setShowProjects(true)}
      onDocumentsClick={() => setShowDocuments(true)}
      onActivityClick={() => setShowActivity(true)}
    />
  );
}

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>IntelliHandover</h1>

        <p className="subtitle">
          Smart project handover, made simple.
        </p>

        <form onSubmit={handleLogin}>
          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>

        <p className="footer-text">
          AI-powered employee & project handover
        </p>
      </div>
    </div>
  );
}
export default App;