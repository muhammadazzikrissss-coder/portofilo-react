// src/pages/Projects.jsx
export default function Projects() {
  const projects = [
    {
      title: "HotelIdle2D",
      subtitle: "Game Idle Management Hotel",
      category: "Game Mobile",
      image: "https://via.placeholder.com/300x200?text=Task+Master"
    },
    {
      title: "Platformer2D",
      subtitle: "Game Pixel Platformer",
      category: "Game Web, Game Proto",
      image: "/GambarPlatformer2D.png"
    },
    {
      title: "Chat-APP",
      subtitle: "Aplikasi Chating",
      category: "Mobile App",
      image: "https://via.placeholder.com/300x200?text=Wanderlust"
    },
  ];

  return (
    <section id="projects" className="projects-page">
      <div className="container">
        <h2>Project Admin</h2>
        <p className="subtitle">Koleksi project terbaik yang pernah ku buat</p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} />
              <div className="project-info">
                <h3>{project.title} - {project.subtitle}</h3>
                <p>{project.category}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="load-more">
          <button>LOAD MORE</button>
        </div>
      </div>

      <style jsx>{`
  .projects-page {
    padding: 4rem 0;
    background: #fff;
  }
  .projects-page h2 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    text-align: center;
  }
  .subtitle {
    text-align: center;
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 2rem;
  }
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
  .project-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
    transition: transform 0.3s ease;
  }
  .project-card:hover {
    transform: translateY(-5px);
  }
  .project-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  .project-info {
    padding: 1.5rem;
  }
  .project-info h3 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }
  .project-info p {
    font-size: 0.9rem;
    color: #666;
  }
  .load-more {
    text-align: center;
  }
  .load-more button {
    background: #007bff;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 500;
    transition: background 0.3s ease;
  }
  .load-more button:hover {
    background: #0056b3;
  }

  @media (max-width: 768px) {
    .projects-page h2 {
      font-size: 2rem;
    }
    .projects-grid {
      grid-template-columns: 1fr;
    }
  }
`}</style>
    </section>
  );
}