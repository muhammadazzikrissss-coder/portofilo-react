import { Link } from 'react-router-dom'; // ⬅️ Tambah ini!
// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="navbar container">
      <div className="logo">Z</div>
      <ul className="nav-links">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="projects">PROJECTS</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>

      <style jsx>{`
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 0;
    border-bottom: 1px solid #eee;
  }
  .logo {
    font-size: 2rem;
    font-weight: bold;
  }
  .nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
  }
  .nav-links a {
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 500;
  }
`}</style>
    </nav>
  );
}