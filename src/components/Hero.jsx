// src/components/Hero.jsx
import TypewriterText from './TypewriterText';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <TypewriterText />
        </div>
        <div className="hero-image">
          <img src="/Profile.jpg" alt="Profile" />
        </div>
      </div>

      <style jsx>{`
  .hero {
    background: #fff;
    padding: 4rem 0;
  }
  .hero-content {
    float: left;
    width: 40%;
    padding-right: 2rem;
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.2;
  }
  .typewriter-text {
    white-space: pre-line; /* Biar \n jadi baris baru */
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.2;
  }
  .hero-image {
    float: right;
    width: 55%;
  }
  .hero-image img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }

  @media (max-width: 768px) {
    .hero-content, .hero-image {
      width: 100%;
      float: none;
    }
    .hero-content {
      padding: 0;
      margin-bottom: 2rem;
    }
    .typewriter-text {
      font-size: 2.5rem;
    }
  }

  .cursor {
  animation: blink 1s infinite;
  margin-left: 4px;
  }

  @keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
  }
`}</style>
    </section>
  );
}