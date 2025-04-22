import Image from 'next/image';

export default function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <Image
          src="/publicImages/TempProfile.jpg"
          alt="Profile"
          width={250}
          height={250}
          className="profile-img"
        />
        <div className="intro-text">
          <h1 className="intro-title">
            <span className="highlight">Bilguuntugs Enkhbayar</span>
          </h1>
          <p className="intro-subtext">
            Hi, I'm Bg! I'm building this portfolio for a school project to show my coding and project work.
          </p>
        </div>
      </div>
    </div>
  );
}