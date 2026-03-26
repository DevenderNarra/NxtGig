import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <main className="projects-coming">

      <div className="coming-container">
        
        {/* Badge */}
        <div className="coming-badge">🚀 SaaS Projects</div>

        {/* Title */}
        <h1 className="coming-title">
          Real SaaS Projects <span>Coming Soon</span>
        </h1>

        {/* Subtitle */}
        <p className="coming-subtitle">
          We’re building high-impact, real-world SaaS projects for you.  
          Stay tuned — something exciting is on the way.
        </p>

        {/* Glow Box */}
        <div className="coming-card">
          <p>⚡ Live projects will be available soon</p>
        </div>

      </div>

    </main>
  );
}