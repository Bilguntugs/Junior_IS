import GitHubProjects from '../components/GithubAPI';

export default function ProjectsPage() {
  return (
    <div className="projects-container">
      <h1 className="section-title">
        <span className="highlight">My Projects</span>
      </h1>
      <GitHubProjects />
    </div>
  );
}
