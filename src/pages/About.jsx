// src/pages/About.jsx
export default function About() {
  return (
    <section id="about" className="about-page">
      <div className="container">
        <h2>Tentang Admin</h2>
        <div className="about-content">
          <div className="bio">
            <h3>Halo Coy!, Aku ZikriSetyawan</h3>
            <p>
              Aku seorang developer amatir, tapi selalu berusaha buat project seserius mungkin
              karena aku gak suka menyerah
            </p>
            <p>
              Aku percaya bahwa teknologi harus menyenangkan — baik di game maupun web.
              Kalau kamu punya ide kolaborasi atau cuma mau ngobrol soal Python / React / game dev, jangan ragu hubungi Aku yaa!
            </p>
          </div>
          <div className="skills">
            <h3>Skills</h3>
            <ul>
              <li>Game Development (C#, PyGame, Unity2D)</li>
              <li>UI/UX Design</li>
              <li>AI dan Promt Enginer</li>
              <li>Minimalist Visual Design</li>
              <li>Problem Solving & Logic</li>
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
  .about-page {
    padding: 4rem 0;
    background: #fafafa;
  }
  .about-page h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;
  }
  .about-content {
    display: flex;
    gap: 3rem;
    align-items: flex-start;
  }
  .bio, .skills {
    flex: 1;
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  }
  .bio h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  .skills h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  .skills ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .skills li {
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
    position: relative;
    padding-left: 1.2rem;
  }
  .skills li::before {
    content: "•";
    position: absolute;
    left: 0;
    color: #007bff;
  }

  @media (max-width: 768px) {
    .about-content {
      flex-direction: column;
    }
    .about-page h2 {
      font-size: 2rem;
    }
  }
`}</style>
    </section>
  );
}