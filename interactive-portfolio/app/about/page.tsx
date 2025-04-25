import LanguageIcons from '../components/LanguageIcons';

export default function AboutPage() {
  return (
    <div className="about-container">
      {/* Bio Section */}
      <div className="bio-section">
        <h2>My Bio</h2>
        <p>I'm a Software Engineer passionate about building high-performance applications...</p>
      </div>

      {/* Skills Section */}
      <div className="skills-section">
        <h2>Technical Skills</h2>
        <LanguageIcons />
      </div>
    </div>
  );
}
