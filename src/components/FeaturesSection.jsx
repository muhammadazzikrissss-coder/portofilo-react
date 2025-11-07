// src/components/FeaturesSection.jsx
export default function FeaturesSection() {
  return (
    <section id="features" className="features-section">
      <div className="container">
        {/* Kotak Putih (Container untuk 2 Balok) */}
        <div className="info-boxes-wrapper">
          <div className="box philosophy">
            <h3>FILOSOFI ADMIN</h3>
            <p>Saya datang untuk apa yang saya butuh, bukan untuk apa yang saya ingin.</p>
            <div className="social-icons">
              <span>🐦</span>
              <span>📘</span>
              <span>📸</span>
              <span>💬</span>
            </div>
          </div>
          <div className="box services">
            <h3>APA YANG AKU KERJAKAN?</h3>
            <ul>
              <li>NGEDIT VIDEO <span>-</span></li>
              <li>GRAPHIC DESIGN <span>-</span></li>
              <li>BIKIN GAME <span>-</span></li>
              <li>MENGGAMBAR <span>-</span></li>
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
  .features-section {
    background: #fafafa;
    padding: 4rem 0;
  }
  .info-boxes-wrapper {
    display: flex;
    gap: 1rem;
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  }
  .box {
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    flex: 1;
  }
  .box h3 {
    margin-bottom: 1rem;
    font-size: 1.1rem;
    font-weight: 600;
  }
  .box p {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
  .social-icons {
    display: flex;
    gap: 0.5rem;
    font-size: 0.8rem;
  }
  .box ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .box li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }
  .box li span {
    font-size: 0.8rem;
    opacity: 0.7;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .info-boxes-wrapper {
      flex-direction: column;
      padding: 1rem;
    }
  }
`}</style>
    </section>
  );
}