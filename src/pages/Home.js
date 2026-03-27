import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import StudentProjects from "./StudentProjects";
import HowItWorks from './Howitworks';

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
            Introducing <strong>NxtGig</strong> — Build Like a Developer. Ship Real Products.
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
            Turn Your Skills into Real-World Experience
          </div>

          <h1 className="hero__heading">
            Designed to transform you into a{' '}
            <span className="hero__heading--gradient">real-world developer</span>
          </h1>

          <p className="hero__subtext">
           Work on real product ideas, get shortlisted through assignments, and collaborate in teams.
No more tutorial hell — just real work and real skills.

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
     <HowItWorks/>
      <StudentProjects />
      {/* ── Get Started ────────────────────────────────────────── */}
      <section className="section get-started" id="get-started">
  <div className="container">

    <div className="get-started__content">

      <div className="section-pill">ARE YOU READY ?</div>

      <h2 className="get-started__title">
        Start Your Journey Today
      </h2>

      <p className="get-started__sub">
        Join thousands of students already building their portfolios with live SaaS projects.
        Spots are limited — apply before the next cohort closes.
      </p>

      <div className="get-started__actions">
        <Link to="/projects" className="btn-primary">
          Browse Projects →
        </Link>
      </div>

    </div>

  </div>
</section>
    </main>
  );
}
