// src/pages/Contact.jsx
import { Mail, Instagram, MessageSquare } from 'lucide-react'; // ⬅️ Ganti Discord jadi MessageSquare

export default function Contact() {
  return (
    <section id="contact" className="contact-page">
      <div className="container">
        <h1 className="heading1">Contact Admin</h1>
        <p className="subtitle">Silahkan jika ingin menghubungi aku</p>

        <div className="social-links">
          <a href="https://instagram.com/alter.system" target="_blank" rel="noopener noreferrer">
            <Instagram size={24} />
          </a>
          <a href="https://discord.com/users/zindex0426" target="_blank" rel="noopener noreferrer">
            <MessageSquare size={24} /> {/* ⬅️ Ikon pengganti */}
          </a>
          <a href="mailto:muhammadazzikrissss@gmail.com">
            <Mail size={24} />
          </a>
        </div>

        <p className="note">
          Atau kirim email langsung ke: <strong>muhammadazzikrissss@gmail.com</strong>
        </p>
      </div>

      <style jsx>{`
  .heading1,
  .subtitle {
    text-align: center;
  }
  .social-links {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin: 2rem 0;
  }
  .social-links a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #f5f5f5;
    color: #333;
    transition: all 0.3s ease;
  }
  .social-links a:hover {
    background: #5865f2; /* Discord purple */
    color: white;
    transform: translateY(-3px);
  }
  .note {
    text-align: center;
    font-size: 0.95rem;
    color: #555;
    margin-top: 1rem;
  }
  .note strong {
    color: #007bff;
  }

  @media (max-width: 600px) {
    .social-links {
      gap: 1rem;
    }
    .social-links a {
      width: 44px;
      height: 44px;
    }
  }
`}</style>
    </section>
  );
}