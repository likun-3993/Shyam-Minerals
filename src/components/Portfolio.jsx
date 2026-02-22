import { SERVICES, WHY_US_POINTS } from "../constants/data";

function ServiceCard({ icon, title, description, points }) {
  return (
    <div className="service-card">
      <div className="service-card-header">
        <span className="service-icon">{icon}</span>
        <h3>{title}</h3>
      </div>
      <p className="service-desc">{description}</p>
      <ul className="service-points">
        {points.map((point) => (
          <li key={point}>
            <span className="point-dot" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ReliabilityCard({ icon, title, desc }) {
  return (
    <div className="reliability-card">
      <div className="reliability-icon">{icon}</div>
      <div>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section">

      {/* ── BLOCK 1: What We Do ── */}
      <div className="portfolio-block">
        <div className="section-inner">
          <span className="section-tag">What We Do</span>
          <h2>Our Core Services</h2>
          <p className="section-sub">
            Two focused verticals powering mineral supply chains and
            construction infrastructure across Odisha since 2007.
          </p>
          <div className="services-grid">
            {SERVICES.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </div>

      {/* ── DIVIDER ── */}
      <div className="portfolio-divider" />

      {/* ── BLOCK 2: What Makes Us Reliable ── */}
      <div className="portfolio-block portfolio-block-dark">
        <div className="section-inner">
          <span className="section-tag light">Why Work With Us</span>
          <h2>What Makes Us Reliable</h2>
          <p className="section-sub light-sub">
            Our reputation is built on consistent delivery, deep local
            knowledge, and an uncompromising focus on quality.
          </p>
          <div className="reliability-grid">
            {WHY_US_POINTS.map((p) => (
              <ReliabilityCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
