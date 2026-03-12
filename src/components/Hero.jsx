import { useState, useEffect } from "react";
import { HERO_SLIDES, BRAND } from "../constants/data.jsx";

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[current];

  return (
    <section id="home" className="hero">
      {/* Left: Text Content */}
      <div className="hero-left">
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-line" />
          Est. {BRAND.established} · Odisha, India
        </div>

        <h1 className="hero-headline">
          {BRAND.name.split(" ").slice(0, 2).join(" ")}<br />
          <span>{BRAND.name.split(" ").slice(2).join(" ")}</span>
        </h1>

        <span className="hero-short">{BRAND.tagline}</span>

        <p className="hero-tagline">
          From mines to markets — trusted mineral transport &amp; aggregate
          supply across Odisha since {BRAND.established}.
        </p>

        <p className="hero-slide-sub">{slide.sub}</p>

        <div className="hero-actions">
          <a href="#portfolio" className="primary-btn">Our Services</a>
          <a href="#contact" className="secondary-btn">Get In Touch</a>
        </div>

        {/* Carousel dots */}
        <div className="carousel-dots">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === current ? "active" : ""}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Stats strip */}
        <div className="hero-stats">
          <div>
            <div className="hero-stat-value">17+</div>
            <div className="hero-stat-label">Years Operating</div>
          </div>
          <div>
            <div className="hero-stat-value">5</div>
            <div className="hero-stat-label">Aggregate Sizes</div>
          </div>
          <div>
            <div className="hero-stat-value">Pan-Odisha</div>
            <div className="hero-stat-label">Logistics Reach</div>
          </div>
        </div>
      </div>

      {/* Right: Background Image Panel */}
      <div className="hero-right">
        <div
          className="hero-bg-img"
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      </div>
    </section>
  );
}
