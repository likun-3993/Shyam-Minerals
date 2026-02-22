import { useState, useEffect } from "react";
import { HERO_SLIDES, BRAND } from "../constants/data";

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[current];

  return (
    <section
      id="home"
      className="hero"
      style={{ backgroundImage: `url(${slide.image})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">

          {/* Company badge */}
          <div className="hero-badge">
            {BRAND.icon} Est. {BRAND.established}
          </div>

          {/* Company name as headline */}
          <h1 className="hero-company">{BRAND.name}</h1>
          <span className="hero-short-name">({BRAND.shortName})</span>

          {/* Fixed sub-headline */}
          <p className="hero-tagline">
            From mines to ports and plants — trusted mineral transport &amp;
            aggregate supply since {BRAND.established}
          </p>

          {/* Slide-specific context line */}
          <p className="hero-slide-sub">{slide.sub}</p>

          <div className="hero-actions">
            <a href="#portfolio" className="primary-btn">Our Services</a>
            <a href="#contact" className="secondary-btn">Get In Touch</a>
          </div>
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
      </div>
    </section>
  );
}
