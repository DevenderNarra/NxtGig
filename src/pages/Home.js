import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import StudentProjects from "./StudentProjects";

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

const STATS = [
  { value: '50+', label: 'SaaS Projects' },
  { value: '2,000+', label: 'Students Enrolled' },
  { value: '94%', label: 'Placement Rate' },
  { value: '30+', label: 'Mentors' },
];

const TESTIMONIALS = [
  {
    name: 'Aditya Sharma',
    role: 'Software Engineer @ Razorpay',
    avatar: 'AS',
    text: 'NxtGig was a game-changer. I shipped a real feature within weeks of joining, and it directly helped me crack my Razorpay interview.',
  },
  {
    name: 'Priya Nair',
    role: 'Full Stack Dev @ Startup',
    avatar: 'PN',
    text: 'The structured process — assignment, evaluation, interview — is so much better than just watching tutorials. I actually learned by doing.',
  },
  {
    name: 'Rohan Mehta',
    role: 'Backend Engineer @ Zepto',
    avatar: 'RM',
    text: 'My GitHub went from empty to full of real SaaS contributions. NxtGig gave me the confidence and proof-of-work to land my dream job.',
  },
];

export default function Home() {
  return (
    <main className="home">
      {/* ── Announcement Banner ────────────────────────────────── */}
      <div className="announcement-banner">
        <div className="container announcement-banner__inner">
          <span className="announcement-banner__badge">NEW</span>
          <p>
            Introducing <strong>NxtGig</strong> — Build real SaaS products like a developer
          </p>
          <Link to="/projects" className="announcement-banner__link">
            Explore →
          </Link>
        </div>
      </div>

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="hero section">
        <div className="container hero__inner">
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-dot" />
            Real SaaS Projects, Real Skills
          </div>

          <h1 className="hero__heading">
            Designed to transform you into a{' '}
            <span className="hero__heading--gradient">real-world developer</span>
          </h1>

          <p className="hero__subtext">
            Work on real SaaS ideas, get shortlisted through assignments, and collaborate in teams.
            No more tutorial hell — just real work, real skills.
          </p>

          <div className="hero__cta-row">
            <Link to="/projects" className="btn btn-primary hero__cta-main">
              Explore Projects
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <button className="btn btn-outline" onClick={() => document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })}>
              How It Works
            </button>
          </div>

          <div className="hero__stats">
            {STATS.map(s => (
              <div key={s.label} className="hero__stat">
                <span className="hero__stat-value">{s.value}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative blobs */}
        <div className="hero__blob hero__blob--1" />
        <div className="hero__blob hero__blob--2" />
      </section>

      {/* ── How It Works ───────────────────────────────────────── */}
     {/* ── How It Works ───────────────────────────────────────── */}
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
      className={`timeline-item ${i % 2 === 0 ? "left" : "right"}`}
    >
      <div className="timeline-dot" />

      <div className="timeline-content">

        {/* HEADER */}
        <div className="timeline-header">

          {/* ICON LEFT */}
          <div className="timeline-icon">{step.icon}</div>

          {/* NUMBER + TITLE RIGHT */}
          <div className="timeline-title-group">
            <span className="timeline-number">{step.number}</span>
            <h3>{step.title}</h3>
          </div>

        </div>

        {/* DESCRIPTION */}
        <p>{step.desc}</p>

      </div>
    </div>
  ))}
</div>

  </div>
</section>

      <StudentProjects />
      {/* ── Get Started ────────────────────────────────────────── */}
      <section className="section get-started" id="get-started">
        <div className="container">
          <div className="get-started__card">
            <div className="get-started__glow" />
            <div className="get-started__content">
              <div className="section-pill section-pill--light">🎯 Limited Spots</div>
              <h2 className="get-started__title">Start Your Journey Today</h2>
              <p className="get-started__sub">
                Join thousands of students already building their portfolios with live SaaS projects.
                Spots are limited — apply before the next cohort closes.
              </p>
              <div className="get-started__actions">
                <Link to="/projects" className="btn btn-ghost">
                  Browse Projects
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
