import React from 'react';
import './ProjectCard.css';

const ICONS = {
  'AI/ML': '🤖',
  'FinTech': '💳',
  'EdTech': '📚',
  'DevTools': '🛠️',
  'HealthTech': '🏥',
  'E-Commerce': '🛒',
  'Analytics': '📊',
  'Productivity': '⚡',
  'Communication': '💬',
  'SaaS': '☁️',
};

export default function ProjectCard({ project }) {
  const { title, description, difficulty, category, tags } = project;
  const icon = ICONS[category] || '🚀';

  return (
    <div className="project-card">
      <div className="project-card__header">
        <span className="project-card__icon">{icon}</span>
        <span className={`tag tag-${difficulty.toLowerCase()}`}>{difficulty}</span>
      </div>

      <div className="project-card__category">{category}</div>

      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__desc">{description}</p>

      <div className="project-card__tags">
        {tags.map(t => (
          <span key={t} className="project-card__tag">{t}</span>
        ))}
      </div>

      <button className="btn btn-outline project-card__btn">
        View Assignment
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}
