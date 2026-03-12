import { useEffect, useRef } from "react";
import { SERVICES, WHY_US_POINTS } from "../constants/data.jsx";

function useReveal() {
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const el = sectionRef.current;
    if (!el) return;
    el.querySelectorAll(".reveal, .reveal-up, .reveal-left, .reveal-right").forEach((node) =>
      observer.observe(node)
    );
    return () => observer.disconnect();
  }, []);
  return sectionRef;
}

// SVG icons to replace emojis
const SERVICE_SVGS = [
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
];

export default function Portfolio() {
  const sectionRef = useReveal();

  return (
    <section id="portfolio" className="port-section" ref={sectionRef}>

      {/* ── Top banner strip ── */}
      <div className="port-banner">
        <div className="port-banner-inner">
          <span className="port-banner-tag">What We Do</span>
          <h2 className="port-banner-title">Our Core Services</h2>
          <p className="port-banner-sub">
            Two focused verticals powering mineral supply chains and construction
            infrastructure across Odisha since 2007.
          </p>
        </div>
      </div>

      {/* ── Service Cards ── */}
      <div className="port-services-wrap">
        <div className="port-services-grid reveal">
          {SERVICES.map((service, idx) => (
            <div key={service.title} className="port-service-card reveal-up" style={{ "--delay": `${idx * 0.15}s` }}>

              <div className="port-service-card-top">
                <div className="port-service-icon-circle">
                  {SERVICE_SVGS[idx]}
                </div>
              </div>

              <div className="port-service-card-body">
                <h3 className="port-service-card-title">{service.title}</h3>
                <p className="port-service-card-desc">{service.description}</p>
                <ul className="port-service-points">
                  {service.points.map((p) => (
                    <li key={p}>
                      <span className="port-point-dot" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="port-service-card-footer">
                <div className="port-service-timing">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  <div>
                    <span className="timing-label">Since</span>
                    <strong className="timing-value">2007</strong>
                  </div>
                </div>
                <div className="port-service-stat">
                  {idx === 0 ? "Pan-Odisha" : "5 Sizes"}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="port-orange-divider" />

      {/* ── Why Us ── */}
      <div className="port-whyus-wrap">
        <div className="port-whyus-inner">
          <div className="port-whyus-header reveal">
            <span className="port-section-tag">Why Work With Us</span>
            <h2 className="port-whyus-title">What Makes Us Reliable</h2>
            <p className="port-whyus-sub">
              Our reputation is built on consistent delivery, deep local knowledge,
              and an uncompromising focus on quality.
            </p>
          </div>

          <div className="port-whyus-grid">
            {WHY_US_POINTS.map((point, idx) => (
              <div
                key={point.title}
                className="port-whyus-card reveal-up"
                style={{ "--delay": `${idx * 0.1}s` }}
              >
                <div className="port-whyus-icon-wrap">
                  <span className="port-whyus-icon">{point.icon}</span>
                </div>
                <h4 className="port-whyus-card-title">{point.title}</h4>
                <p className="port-whyus-card-desc">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
