'use client';
import { useEffect, useState } from 'react';
import '../cssFiles/GithubProject.css';

interface Repo {
  id: number;
  name: string;
  html_url: string;
}

const customDescriptions: { [key: string]: string } = {
  'backtesting.py': 'Custom description for backtesting trading strategies in Python.',
  'Junior_IS': 'My Junior IS project using Next.js, TypeScript, and GitHub API.',
  'gemini-agents-toolkit': 'Toolkit for Gemini AI agent-based systems.',
  'python-beginner-projects': 'Beginner-friendly Python projects for learning and improving skills.'
  // Add more as you like
};

export default function GitHubProjects() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/Bilguntugs/repos')
      .then((response) => response.json())
      .then((data) => {
        const filtered = data.filter((repo: Repo) => customDescriptions.hasOwnProperty(repo.name));
        setRepos(filtered);
      });
  }, []);

  return (
    <div className="projects-grid">
      {repos.map((repo) => (
        <div className="project-card" key={repo.id}>
          <h2>{repo.name}</h2>
          <p>{customDescriptions[repo.name]}</p>
          <a className="view-project-button" href={repo.html_url} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      ))}
    </div>
  );
}
