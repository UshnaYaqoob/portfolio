"use client";

import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle() {
    const [isLight, setIsLight] = useState(false);

    useEffect(() => {
        setIsLight(document.documentElement.classList.contains("light"));
    }, []);

    const toggle = () => {
        const next = !isLight;
        setIsLight(next);
        document.documentElement.classList.toggle("light", next);
        localStorage.setItem("theme", next ? "light" : "dark");
    };

    return (
        <button
            type="button"
            onClick={toggle}
            aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
            className="
                flex items-center justify-center w-9 h-9 rounded-full
                text-slate-400 hover:text-white light:text-slate-500 light:hover:text-slate-900
                hover:bg-white/5 light:hover:bg-slate-900/5
                transition-colors
            "
        >
            {isLight ? <FiMoon size={17} /> : <FiSun size={17} />}
        </button>
    );
}
