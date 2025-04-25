'use client';
import { useEffect, useState } from 'react';
import '../cssFiles/GithubProject.css';

interface Repo {
  id: number;
  name: string;
  html_url: string;
  languages_url: string;
  languages?: string[];
}

const languageLogoMap: { [key: string]: string } = {
  JavaScript: '/logos/javascript.png',
  TypeScript: '/logos/typescript.png',
  HTML: '/logos/html5.png',
  CSS: '/logos/css.png',
  Python: '/logos/python.png',
  Elixir: '/logos/elixir.png',
  Jupyter: '/logos/jupyter.png',
  Shell: '/logos/gnubash.png',
  
};

const customDescriptions: { [key: string]: string } = {
  'backtesting.py': 'Custom description for backtesting trading strategies in Python.',
  'Junior_IS': 'My Junior IS project using Next.js, TypeScript, and GitHub API.',
  'gemini-agents-toolkit': 'Toolkit for Gemini AI agent-based systems.',
  'python-beginner-projects': 'Beginner-friendly Python projects for learning and improving skills.'
  
};

export default function GitHubProjects() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/Bilguntugs/repos')
      .then((response) => response.json())
      .then((data) => {
        const filtered = data.filter((repo: Repo) => customDescriptions.hasOwnProperty(repo.name));
        Promise.all(filtered.map((repo: Repo) =>
          fetch(repo.languages_url)
            .then(res => res.json())
            .then(languagesData => ({
              ...repo,
              languages: Object.keys(languagesData),
            }))
        )).then(reposWithLanguages => {
          setRepos(reposWithLanguages);
        });
      });
  }, []);

  return (
    <div className="projects-grid">
      {repos.map((repo) => (
        <div className="project-card" key={repo.id}>
          <h2>{repo.name}</h2>
          <p>{customDescriptions[repo.name]}</p>
          <div className="languages-logos">
            {repo.languages?.map(lang => (
              <img
                key={lang}
                src={languageLogoMap[lang] || '/logos/default.png'}
                alt={lang}
                title={lang}
                className="language-logo"
              />
            ))}
          </div>
          <a className="view-project-button" href={repo.html_url} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      ))}
    </div>
  );
}
