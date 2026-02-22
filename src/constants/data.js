import smlLogo from "../assets/SML_Main.png";


// ── NAVBAR ──
export const NAV_LINKS = [
    { label: "Home", href: "#home" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Vision", href: "#vision" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
];

// ── BRAND ──
export const BRAND = {
    name: "Shyam Minerals & Logistics",
    shortName: "SML",
    logo: smlLogo,
    tagline: "Mineral Trading · Aggregate Supply · Odisha",
    established: "2007",
    email: "mineralshyam@gmail.com",
    phone: "+91 94370 77818",
    phoneTel: "+919437077818",        // ← no spaces, used in href="tel:"
    address: "Jaraka, Jajpur, Odisha | PIN: 755050",
    hours: "Mon–Sat: 9:00 AM – 6:00 PM",
};

// ── HERO SLIDES ──
export const HERO_SLIDES = [
    {
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400",
        headline: "Mineral Trading & Logistics Across Odisha",
        sub: "Licensed transport of iron ore and chromite from mines to ports and plants.",
    },
    {
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400",
        headline: "Black Stone Aggregates for Every Project",
        sub: "Sizes 10mm to 60mm — consistent quality, bulk supply, on-time delivery.",
    },
    {
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1400",
        headline: "Built on Compliance. Driven by Reliability.",
        sub: "Pan-Odisha operations backed by licensed partners and proven logistics.",
    },
];


// ── SERVICES (What We Do) ──
export const SERVICES = [
    {
        icon: "⛏️",
        title: "Mineral Trading & Logistics",
        description:
            "We provide licensed transport and trading of minerals including iron ore and chromite, moving materials from mines to ports, washing plants, and industrial destinations.",
        points: [
            "Pan-Odisha operations",
            "Compliance with transport licenses",
            "Reliable network of transport partners",
            "Timely delivery to ports and plants",
        ],
    },
    {
        icon: "🪨",
        title: "Black Stone Aggregate Production & Supply",
        description:
            "We operate crushing units to produce and supply high-quality stone aggregates for construction and infrastructure projects.",
        points: [
            "Available sizes: 10mm, 20mm, 25mm, 40mm, 60mm",
            "Multiple operational crushers",
            "Consistent quality & grading",
            "Bulk supply for projects",
        ],
    },
];

// ── WHY US ──
export const WHY_US_POINTS = [
    { icon: "👷", title: "Experienced Operations Team", desc: "Years of ground-level expertise in mineral handling and aggregate production across Odisha." },
    { icon: "🗺️", title: "Strong Local Network", desc: "Deep-rooted connections around key mining belts ensure faster, smoother movement of materials." },
    { icon: "✅", title: "Safety, Compliance & Timelines", desc: "Every operation follows regulatory standards while keeping delivery schedules intact." },
    { icon: "🤝", title: "Long-Term Relationship Mindset", desc: "We invest in partnerships, not just transactions — building trust with every client." },
    { icon: "🏆", title: "Quality-First in Aggregates", desc: "Strict grading and quality checks on every batch ensure consistent output for your projects." },
];


// ── VISION & MISSION ──
export const VISION_MISSION = {
    vision: {
        tag: "Our Vision",
        icon: "🔭",
        headline: "Powering India's Infrastructure & Industrial Growth",
        body: "To be a trusted leader in mineral trading, logistics, and infrastructure materials with a focus on sustainable growth and quality delivery. At Shyam Minerals & Logistics, our vision is to power India's infrastructure and industrial expansion by providing ethical mineral supplies, world-class logistics, and high-quality construction materials. We aspire to expand our footprint from Odisha to pan-India markets while upgrading into value-added operations like establishing a ferro-chrome manufacturing plant — contributing to the steel and specialty alloys industry's demand for quality ferro-chrome.",
    },
    mission: {
        tag: "Our Mission",
        icon: "🎯",
        headline: "Deliver With Quality, Integrity & Responsibility",
        body: "Our mission is to deliver quality mineral commodities and construction resources efficiently, responsibly, and with integrity — while building the capabilities to support advanced metallurgical production.",
        commitments: [
            "Providing timely, compliant, and transparent trading and transport services for minerals including iron ore, chromite, and other bulk materials.",
            "Supplying top-grade black stone aggregates for construction and infrastructure projects.",
            "Expanding capabilities into value-added manufacturing like ferro-chrome production to contribute more deeply to India's industrial ecosystem.",
            "Growing sustainably, maintaining trust with partners, and ensuring community and environmental responsibility.",
        ],
    },
};


// ── ABOUT ──
export const ABOUT = {
    tag: "Who We Are",
    headline: "About Shyam Minerals & Logistics",
    shortName: "SML",
    paragraphs: [
        "Shyam Minerals & Logistics is an Odisha-based mineral trading and logistics company with operations in Jaraka, Jajpur. Since 2007, we have been actively involved in transporting and trading minerals such as iron ore and chromite, serving mines, ports, washing plants, and industrial units.",
        "Alongside logistics, we operate crushing units for the production and supply of black stone aggregates in multiple sizes for infrastructure and construction projects. Our strength lies in ground-level experience, strong vendor networks, and consistent service delivery.",
    ],
    highlights: [
        { icon: "📅", value: "Since 2007", label: "Years in Operation" },
        { icon: "📍", value: "Jaraka, Jajpur", label: "Base of Operations" },
        { icon: "🚛", value: "Pan-Odisha", label: "Logistics Reach" },
        { icon: "🪨", value: "5 Sizes", label: "Aggregate Grades" },
    ],
    strengths: [
        { icon: "🧱", text: "Ground-level operational experience" },
        { icon: "🤝", text: "Strong vendor & transport networks" },
        { icon: "✅", text: "Consistent, on-time service delivery" },
        { icon: "⚖️", text: "Compliant mineral trading practices" },
    ],
};


// ── FOOTER ──
export const FOOTER = {
  copyright: "Shyam Minerals & Logistics Pvt. Ltd.",
  established: "2007",
  cin: "U14200OR2007PTC009XXX",        // ← replace with actual CIN if available
  gst: "21AAXCS0000X1ZX",              // ← replace with actual GST number
  quickLinks: [
    { label: "Home",            href: "#home" },
    { label: "Portfolio",       href: "#portfolio" },
    { label: "Vision & Mission",href: "#vision" },
    { label: "About Us",        href: "#about" },
    { label: "Contact",         href: "#contact" },
  ],
  services: [
    { label: "Mineral Trading & Logistics",            href: "#portfolio" },
    { label: "Black Stone Aggregate Supply",           href: "#portfolio" },
    { label: "Iron Ore & Chromite Transport",          href: "#portfolio" },
    { label: "Crushing Unit Operations",               href: "#portfolio" },
  ],
  socialLinks: [
    // Add real URLs when available
    { label: "WhatsApp", icon: "💬", href: `https://wa.me/919437077818` },
    { label: "Email",    icon: "✉️", href: `mailto:mineralshyam@gmail.com` },
  ],
};
