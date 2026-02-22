import { BRAND } from "../constants/data";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">

        {/* ── Left: Contact Details ── */}
        <div className="contact-details">
          <span className="section-tag light">Reach Out</span>
          <h2>Contact Us</h2>
          <p className="contact-sub">
            Get in touch directly or send us a quote request — we respond
            promptly on all working days.
          </p>

          <div className="contact-items">

            {/* Phone — opens dialer on mobile, Skype/FaceTime prompt on desktop */}
            <a href={`tel:${BRAND.phoneTel}`} className="contact-item contact-item-link">
              <div className="contact-item-icon">📞</div>
              <div>
                <span className="contact-item-label">Call Us</span>
                <span className="contact-item-value">{BRAND.phone}</span>
              </div>
            </a>

            {/* Email — opens default mail app on both mobile & desktop */}
            <a
              href={`mailto:${BRAND.email}?subject=Enquiry - Shyam Minerals & Logistics`}
              className="contact-item contact-item-link"
            >
              <div className="contact-item-icon">✉️</div>
              <div>
                <span className="contact-item-label">Email Us</span>
                <span className="contact-item-value">{BRAND.email}</span>
              </div>
            </a>

            {/* Address */}
            <div className="contact-item">
              <div className="contact-item-icon">📍</div>
              <div>
                <span className="contact-item-label">Our Location</span>
                <span className="contact-item-value">{BRAND.address}</span>
              </div>
            </div>

            {/* Hours */}
            <div className="contact-item">
              <div className="contact-item-icon">🕐</div>
              <div>
                <span className="contact-item-label">Working Hours</span>
                <span className="contact-item-value">{BRAND.hours}</span>
              </div>
            </div>

          </div>
        </div>

        {/* ── Right: Get a Quote form ── */}
        <div className="contact-form-wrap">
          <h3>📩 Get a Quote</h3>
          <p className="form-sub">
            Tell us about your requirement and we'll get back to you within
            one business day.
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
                <option value="mineral-trading">Mineral Trading & Logistics</option>
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
