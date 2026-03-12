export default function Logo({ className = "" }) {
    return (
        <svg
            className={`brand-svg-logo ${className}`}
            viewBox="0 0 340 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* ── Logo Mark ── */}
            <g transform="translate(4, 5)">
                {/* Hexagon Base representing Minerals / Core */}
                <path d="M22 0 L41 11 L41 33 L22 44 L3 33 L3 11 Z" fill="url(#brandGrad)" />
                {/* Geometric 3D Facets */}
                <path d="M22 0 L22 22 L41 11" fill="#ffffff" fillOpacity="0.3" />
                <path d="M22 44 L22 22 L3 33" fill="#000000" fillOpacity="0.15" />

                {/* Movement / Logistics Swooshes */}
                <path d="M-4 30 Q 15 30 22 22 T 48 10" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
                <path d="M-4 37 Q 15 37 22 29 T 48 17" fill="none" stroke="#e85d04" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
            </g>

            {/* ── Brand Typography ── */}
            <text x="64" y="32" fontFamily="var(--font-heading, system-ui, sans-serif)" fontWeight="900" fontSize="28" fill="#ffffff" letterSpacing="-0.02em">Shyam</text>
            <text x="162" y="32" fontFamily="var(--font-heading, system-ui, sans-serif)" fontWeight="800" fontSize="28" fill="#e85d04" letterSpacing="-0.02em">Minerals</text>

            <text x="66" y="50" fontFamily="var(--font-heading, system-ui, sans-serif)" fontWeight="700" fontSize="12.5" fill="#a0aec0" letterSpacing="0.15em">&amp; LOGISTICS</text>

            {/* ── Gradients ── */}
            <defs>
                <linearGradient id="brandGrad" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#ff8533" />
                    <stop offset="100%" stopColor="#cc4a00" />
                </linearGradient>
            </defs>
        </svg>
    );
}
