import { ABOUT, BRAND } from "../constants/data";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-inner">

        {/* ── Left Column ── */}
        <div className="about-left">
          <span className="section-tag">{ABOUT.tag}</span>
          <h2>{ABOUT.headline}</h2>

          {ABOUT.paragraphs.map((para, i) => (
            <p key={i} className="about-para">{para}</p>
          ))}

          {/* Strength pills */}
          <div className="about-strengths">
            {ABOUT.strengths.map((s) => (
              <div key={s.text} className="strength-pill">
                <span>{s.icon}</span>
                <span>{s.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right Column ── */}
        <div className="about-right">

          {/* Key highlights grid */}
          <div className="about-highlights">
            {ABOUT.highlights.map((h) => (
              <div key={h.label} className="highlight-card">
                <span className="highlight-icon">{h.icon}</span>
                <span className="highlight-value">{h.value}</span>
                <span className="highlight-label">{h.label}</span>
              </div>
            ))}
          </div>

          {/* Identity badge */}
          <div className="about-badge">
            <div className="about-badge-top">
              <span className="about-badge-abbr">{ABOUT.shortName}</span>
              <span className="about-badge-divider" />
              <span className="about-badge-full">{BRAND.name}</span>
            </div>
            <p className="about-badge-address">
              📍 {BRAND.address}
            </p>
            <p className="about-badge-since">
              🗓️ Established {BRAND.established}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
