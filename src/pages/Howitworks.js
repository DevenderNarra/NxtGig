import React, { useEffect, useRef } from "react";
import "./Howitworks.css";

const STEPS = [
  {
    number: "01",
    icon: "📝",
    title: "Assignment",
    desc: "Start by solving a real-world assignment designed to test your problem-solving and coding skills."
  },
  {
    number: "02",
    icon: "📊",
    title: "Get Evaluated",
    desc: "Your submission is reviewed based on code quality, logic, and creativity by expert evaluators."
  },
  {
    number: "03",
    icon: "🎤",
    title: "Interview",
    desc: "Top performers are invited for a short technical interview to assess communication and thinking."
  },
  {
    number: "04",
    icon: "👥",
    title: "Build a Team",
    desc: "Selected candidates are grouped into small teams to collaborate like a real startup environment."
  },
  {
    number: "05",
    icon: "🔍",
    title: "Explore Projects",
    desc: "Teams explore available SaaS product ideas and choose one project to work on."
  },
  {
    number: "06",
    icon: "📄",
    title: "Submit Proposal",
    desc: "Prepare and submit a structured proposal including problem statement, solution, and tech stack."
  },
  {
    number: "07",
    icon: "✅",
    title: "Get Approval",
    desc: "Proposals are reviewed, and selected teams receive approval to start building their product."
  },
  {
    number: "08",
    icon: "🚀",
    title: "Train & Build",
    desc: "Work on the product with guidance, gain real-world experience, and ship features like a developer."
  }
]


export default function HowItWorks() {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section how-it-works" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <div className="section-pill">Process</div>
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            From assessment to real product building — a structured journey to become a developer.
          </p>
        </div>

        <div className="timeline">
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              ref={(el) => (itemsRef.current[i] = el)}
              className={`timeline-item ${
                i % 2 === 0 ? "left" : "right"
              }`}
            >
              <div className="timeline-dot" />

              <div className="timeline-content">
                <div className="timeline-header">
                  <div className="timeline-icon">{step.icon}</div>

                  <div className="timeline-title-group">
                    <span className="timeline-number">
                      {step.number}
                    </span>
                    <h3>{step.title}</h3>
                  </div>
                </div>

                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}