import { useState, useEffect } from "react";

export default function ScrollProgress() {
    const [scrollWidth, setScrollWidth] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTotal = document.documentElement.scrollTop;
            const heightWin =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            const scroll = `${(scrollTotal / heightWin) * 100}%`;
            setScrollWidth(scroll);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="scroll-progress-container">
            <div
                className="scroll-progress-bar"
                style={{ width: scrollWidth }}
            />
        </div>
    );
}
