import React from "react";
import "./StudentProjects.css";

const PROJECTS = [
  {
    title: "ReimburseFlow: Automated Financial Operations",
    category: "Financial Services",
    icon: "💰",
    challenge: "Manual reimbursement handling costing ₹70,000/month and delays.",
    solution: "AI-enabled receipt scanning and automated approvals.",
    outcome: "₹1,40,000 monthly impact with cost savings and recovered revenue.",
    tags: ["Python", "NLP", "Gemini"],
    duration: "4 Weeks"
  },
  {
    title: "AI Voice Success Coach",
    category: "EdTech Platform",
    icon: "📞",
    challenge: "Mentors overloaded with repetitive queries.",
    solution: "AI voice agent handling calls and tracking performance.",
    outcome: "Scaled to 30,000+ interactions with zero extra hires.",
    tags: ["ADK", "Gemini", "Voice AI"],
    duration: "3 Weeks"
  },
  {
    title: "Marketing Audit Automation",
    category: "Enterprise Marketing",
    icon: "🛡",
    challenge: "Manual marketing audits causing delays and risk.",
    solution: "Automated scraping + rule engine validation.",
    outcome: "Instant compliance checks, reduced legal risks.",
    tags: ["CrawlAI", "Apify", "AI"],
    duration: "2 Weeks"
  }
];

function StudentProjects() {
  return (
    <section className="section impact">
      <div className="container">

        <div className="section-header">
          <div className="section-pill">Real Impact</div>
          <h2 className="section-title">Already Delivered</h2>
          <p className="section-subtitle">
            See what our students have built for real businesses.
          </p>
        </div>

        <div className="impact-grid">
          {PROJECTS.map(p => (
            <div key={p.title} className="impact-card">

              {/* Icon */}
              <div className="impact-top">
                <div className="impact-icon-box">{p.icon}</div>
              </div>

              {/* Title */}
              <h3>{p.title}</h3>
              <p className="impact-category">{p.category}</p>

              {/* Challenge */}
              <div className="impact-box challenge">
                <span>● THE CHALLENGE</span>
                <p>{p.challenge}</p>
              </div>

              {/* Hover Content */}
              <div className="impact-hover">
                <div className="impact-box solution">
                  <span>● THE SOLUTION</span>
                  <p>{p.solution}</p>
                </div>

                <div className="impact-box outcome">
                  <span>● THE OUTCOME</span>
                  <p>{p.outcome}</p>
                </div>
              </div>

              {/* Footer */}
              <div className="impact-footer">
                <div className="tags">
                  {p.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="duration">⏱ {p.duration}</div>
              </div>

              <p className="hover-hint">Hover to reveal solution →</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default StudentProjects;