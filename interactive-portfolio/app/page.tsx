import Image from 'next/image';

export default function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <Image
          src="/publicImages/Profile.jpg"
          alt="Profile"
          width={350}
          height={350}
          className="profile-img"
        />
        <div>
          <h1 className="intro-title">
            <span className="highlight">Bilguuntugs Enkhbayar</span>
          </h1>
          <div className="intro-subtext-container">
            <p className="intro-subtext">
              Welcome to my portfolio! I'm Bilguuntugs Enkhbayar, but everyone calls me Bg. This space that I created is to showcase my journey as a developer, combining what I've learned with the projects I've built.
              Whether it's web development, programming challenges, or exploring new tech, I’m always open for more improvement and learning.
              This portfolio highlights my technical skills, creative thinking, and dedication to growing as a computer scientist.
              Feel free to check out my work and get to know me better!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
