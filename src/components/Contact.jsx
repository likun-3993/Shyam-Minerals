import { useEffect, useRef } from "react";
import { BRAND } from "../constants/data.jsx";

export default function Contact() {
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
    el.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-unfold").forEach((node) =>
      observer.observe(node)
    );
    return () => observer.disconnect();
  }, []);

  const contactItems = [
    {
      icon: "📞",
      label: "Call Us",
      value: BRAND.phone,
      href: `tel:${BRAND.phoneTel}`,
    },
    {
      icon: "✉️",
      label: "Email Us",
      value: BRAND.email,
      href: `mailto:${BRAND.email}?subject=Enquiry - Shyam Minerals & Logistics`,
    },
    {
      icon: "📍",
      label: "Our Location",
      value: BRAND.address,
      href: null,
    },
    {
      icon: "🕐",
      label: "Working Hours",
      value: BRAND.hours,
      href: null,
    },
  ];

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="contact-inner">

        {/* Left: Info */}
        <div className="contact-info reveal-left">
          <div className="section-eyebrow">
            <span className="section-eyebrow-line" /> Reach Out
          </div>
          <h2 className="section-h2">Contact Us</h2>
          <p>
            Get in touch directly or send us a quote request — we respond
            promptly on all working days.
          </p>

          <div className="contact-items" style={{ marginTop: "2rem" }}>
            {contactItems.map((item, i) => {
              const Tag = item.href ? "a" : "div";
              return (
                <Tag
                  key={item.label}
                  href={item.href || undefined}
                  className={`contact-item ${item.href ? "contact-item-link" : ""} reveal-unfold reveal-delay-${i + 1}`}
                >
                  <div className="contact-item-icon">{item.icon}</div>
                  <div>
                    <span className="contact-item-label">{item.label}</span>
                    <span className="contact-item-value">{item.value}</span>
                  </div>
                </Tag>
              );
            })}
          </div>
        </div>

        {/* Right: Form */}
        <div className="contact-form-wrap reveal-right">
          <h3>📩 Get a Quote</h3>
          <p className="form-sub">
            Tell us about your requirement and we'll get back to you within one
            business day.
          </p>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input id="name" type="text" placeholder="Full name" required />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company / Organisation</label>
                <input id="company" type="text" placeholder="Company name" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input id="email" type="email" placeholder="you@example.com" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="service">Service Required</label>
              <select id="service">
                <option value="">Select a service</option>
                <option value="mineral-trading">Mineral Trading &amp; Logistics</option>
                <option value="aggregates">Black Stone Aggregates</option>
                <option value="both">Both Services</option>
                <option value="other">Other / General Enquiry</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message / Requirement Details</label>
              <textarea
                id="message"
                rows={4}
                placeholder="Describe your requirement, quantity, delivery location..."
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              Send Enquiry →
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
