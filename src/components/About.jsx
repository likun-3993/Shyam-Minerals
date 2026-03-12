import { useEffect, useRef } from "react";
import { ABOUT, BRAND } from "../constants/data.jsx";

export default function About() {
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
    el.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale").forEach((node) =>
      observer.observe(node)
    );
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="about-inner">

        {/* Left Column */}
        <div className="about-left reveal-left">
          <div className="section-eyebrow">
            <span className="section-eyebrow-line" /> {ABOUT.tag}
          </div>
          <h2 className="section-h2">{ABOUT.headline}</h2>

          {ABOUT.paragraphs.map((para, i) => (
            <p key={i} className="about-para">{para}</p>
          ))}

        </div>

        {/* Right Column */}
        <div className="about-right reveal-right">
          {/* Identity Badge with Contact Details */}
          <div className="about-badge reveal-scale">
            <div className="about-badge-top">
              <span className="about-badge-abbr">{ABOUT.shortName}</span>
              <span className="about-badge-divider" />
              <span className="about-badge-full">{BRAND.name}</span>
            </div>

            <div className="about-badge-info">
              <p className="about-badge-address">📍 {BRAND.address}</p>
            </div>

            <div className="about-contact-details">
              <p><span>📞</span> <a href={`tel:${BRAND.phoneTel}`}>{BRAND.phone}</a></p>
              <p><span>✉️</span> <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a></p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
