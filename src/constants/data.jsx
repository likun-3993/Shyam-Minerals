import smlLogo from "../assets/SML_Main.png";


// ── NAVBAR ──
export const NAV_LINKS = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Vision", href: "#vision" },
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
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
        title: "Experienced Operations Team",
        desc: "Years of ground-level expertise in mineral handling and aggregate production across Odisha."
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>,
        title: "Strong Local Network",
        desc: "Deep-rooted connections around key mining belts ensure faster, smoother movement of materials."
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
        title: "Safety, Compliance & Timelines",
        desc: "Every operation follows regulatory standards while keeping delivery schedules intact."
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>,
        title: "Long-Term Relationship Mindset",
        desc: "We invest in partnerships, not just transactions — building trust with every client."
    },
    {
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>,
        title: "Quality-First in Aggregates",
        desc: "Strict grading and quality checks on every batch ensure consistent output for your projects."
    },
];


// ── VISION & MISSION ──
export const VISION_MISSION = {
    vision: {
        tag: "Our Vision",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>,
        headline: "Powering India's Infrastructure Growth",
        body: "To be a trusted leader in mineral trading and logistics, expanding our footprint pan-India while upgrading into value-added ferro-chrome manufacturing. At Shyam Minerals & Logistics, our vision is to power India's infrastructure and industrial expansion by providing ethical supplies, world-class logistics, and high-quality materials.",
    },
    mission: {
        tag: "Our Mission",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>,
        headline: "Deliver With Quality & Integrity",
        body: "Our mission is to deliver quality mineral commodities and construction resources efficiently, responsibly, and with transparency. By providing precise trading services and top-grade aggregates, we aim to build long-term trust and foster sustainable partnerships across the entire industrial ecosystem.",
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
    proprietor: "Binod Bihari Parida",
    gst: "21AFNPP3265L1Z5",
    quickLinks: [
        { label: "Home", href: "#home" },
        { label: "About Us", href: "#about" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Vision", href: "#vision" },
    ],
    services: [
        { label: "Mineral Trading & Logistics", href: "#portfolio" },
        { label: "Black Stone Aggregate Supply", href: "#portfolio" },
        { label: "Iron Ore & Chromite Transport", href: "#portfolio" },
        { label: "Crushing Unit Operations", href: "#portfolio" },
    ],
    socialLinks: [
        // Add real URLs when available
        { label: "WhatsApp", icon: "💬", href: `https://wa.me/919437077818` },
        { label: "Email", icon: "✉️", href: `mailto:mineralshyam@gmail.com` },
    ],
};
