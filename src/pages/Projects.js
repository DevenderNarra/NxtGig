import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <main className="projects-coming">

      {/* ✨ Stars */}
      <div className="stars">
        {[...Array(20)].map((_, i) => (
          <span key={i}></span>
        ))}
      </div>

      {/* 🎉 Confetti */}
      <div className="confetti">
        {[...Array(20)].map((_, i) => (
          <span key={i}></span>
        ))}
      </div>

      {/* CONTENT */}
      <div className="coming-container">
        
  <div className="coming-badge">🚀 Real Projects</div>

  <h1 className="coming-title">
    Real Products <span>Coming Soon</span>
  </h1>

  <p className="coming-subtitle">
    Work on real product ideas, get shortlisted through assignments, and collaborate in teams.  
    No more tutorial hell — just real work, real skills, and real growth.
  </p>

  <div className="coming-card">
    ⚡ Live projects will be available soon — stay tuned
  </div>

</div>
    </main>
  );
}