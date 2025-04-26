import LanguageIcons from '../components/LanguageIcons';

export default function AboutPage() {
  return (
    <div className="about-container">
      {/* Bio Section */}
      <div className="bio-section">
        <h1 className="section-title">
          <span className="highlight">My Bio</span>
        </h1>
        <div className="card-container">
          <p>
          I'm currently studying at The College of Wooster, and majoring in Computer Science. 
          I created this portfolio as Junior Independent Study project to showcase my coding abilities, document my technical growth, and highlight my personal projects. 
          Beyond the assignment, this portfolio is going to represent my academic and professional achievements, and my journey as a software engineer.
          As you see on the right, I have an experience in a variety of programming languages such as JS, Python, C++ and many more.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills-section">
        <h1 className="section-title">
          <span className="highlight">Technical Skills</span>
        </h1>
        <div className="card-container">
          <LanguageIcons />
        </div>
      </div>
    </div>
  );
}
