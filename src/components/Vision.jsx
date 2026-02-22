import { VISION_MISSION } from "../constants/data";

export default function Vision() {
  const { vision, mission } = VISION_MISSION;

  return (
    <section id="vision" className="vision-section">
      <div className="vision-inner">

        {/* ── Section Label ── */}
        <div className="vision-header">
          <span className="section-tag light">Purpose & Direction</span>
          <h2>Vision & Mission</h2>
          <p className="vision-intro">
            What drives us every day — from mine to market to the future.
          </p>
        </div>

        {/* ── Cards ── */}
        <div className="vm-grid">

          {/* Vision Card */}
          <div className="vm-card vm-card-vision">
            <div className="vm-card-top">
              <span className="vm-icon">{vision.icon}</span>
              <span className="vm-tag">{vision.tag}</span>
            </div>
            <h3>{vision.headline}</h3>
            <p>{vision.body}</p>
          </div>

          {/* Mission Card */}
          <div className="vm-card vm-card-mission">
            <div className="vm-card-top">
              <span className="vm-icon">{mission.icon}</span>
              <span className="vm-tag">{mission.tag}</span>
            </div>
            <h3>{mission.headline}</h3>
            <p className="mission-body">{mission.body}</p>
            <ul className="mission-commitments">
              {mission.commitments.map((item) => (
                <li key={item}>
                  <span className="commit-dot" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── Bottom accent strip ── */}
        <div className="vm-accent-strip">
          <span>Ethical · Compliant · Reliable · Future-Ready</span>
        </div>

      </div>
    </section>
  );
}
