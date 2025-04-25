import '../cssFiles/LanguageIcon.css'; 

const languages = [
    { name: "JavaScript", logo: "/logos/javascript.png" },
    { name: "Python", logo: "/logos/python.png" },
    { name: "React.js", logo: "/logos/react.png" },
    { name: "C++", logo: "/logos/cplusplus.png" },
    { name: "HTML", logo: "/logos/html5.png" },
    { name: "CSS", logo: "/logos/css.png" },
    { name: "Elixir", logo: "/logos/elixir.png" },
  ];
  
  export default function LanguageIcons() {
    return (
      <div className="skills-logos">
        {languages.map((lang) => (
          <div key={lang.name} className="skill">
            <img src={lang.logo} alt={`${lang.name} logo`} />
            <span>{lang.name}</span>
          </div>
        ))}
      </div>
    );
  }
  