import { useState, useEffect } from "react";
import { NAV_LINKS, BRAND } from "../constants/data";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("#home");

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveLink(`#${entry.target.id}`);
                    }
                });
            },
            { threshold: 0.4 }
        );

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>

            {/* Logo */}
            <a href="#home" className="navbar-logo-link">
                <img
                    src={BRAND.logo}
                    alt={BRAND.name}
                    className="navbar-logo"
                />
            </a>

            {/* Hamburger toggle */}
            <button
                className="hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
            >
                {menuOpen ? "✕" : "☰"}
            </button>

            {/* Nav links */}
            <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                        <a
                            href={link.href}
                            className={activeLink === link.href ? "active-link" : ""}
                            onClick={() => {
                                setActiveLink(link.href);
                                setMenuOpen(false);
                            }}
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>

        </nav>
    );
}
