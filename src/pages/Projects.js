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
        
        <div className="coming-badge">🚀 SaaS Projects</div>

        <h1 className="coming-title">
          Real SaaS Projects <span>Coming Soon</span>
        </h1>

        <p className="coming-subtitle">
          We’re building high-impact, real-world SaaS projects for you.  
          Stay tuned — something exciting is on the way.
        </p>

        <div className="coming-card">
          ⚡ Live projects will be available soon
        </div>

      </div>

    </main>
  );
}