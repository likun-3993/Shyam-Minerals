import { useEffect, useRef } from "react";
import { VISION_MISSION } from "../constants/data.jsx";

export default function Vision() {
  const { vision, mission } = VISION_MISSION;
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

  return (
    <section id="vision" className="vis-section" ref={sectionRef}>

      {/* ── Section Header Banner ── */}
      <div className="vis-banner">
        <div className="vis-banner-inner">
          <span className="vis-banner-tag">Purpose &amp; Direction</span>
          <h2 className="vis-banner-title">Vision &amp; Mission</h2>
          <p className="vis-banner-sub">
            What drives us every day — from mine to market and into the future.
          </p>
        </div>
      </div>

      {/* ── Cards Grid ── */}
      <div className="vis-body">
        <div className="vis-grid">

          {/* Vision Card */}
          <div className="vis-card vis-card-vision reveal-left">
            <h3 className="vis-card-title">{vision.headline}</h3>
            <p className="vis-card-body">{vision.body}</p>
          </div>

          {/* Mission Card */}
          <div className="vis-card vis-card-mission reveal-right">
            <h3 className="vis-card-title">{mission.headline}</h3>
            <p className="vis-card-body">{mission.body}</p>
          </div>
        </div>

        {/* ── Accent Strip ── */}
        <div className="vis-strip reveal-up">
          <div className="vis-strip-inner">
            {["Ethical", "Compliant", "Reliable", "Future‑Ready"].map((word, i) => (
              <span key={word} className="vis-strip-word">
                {i > 0 && <span className="vis-strip-sep">·</span>}
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
