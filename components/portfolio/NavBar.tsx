"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import { NAVBAR_CONFIG } from "@/constants/navbar";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const threshold = NAVBAR_CONFIG.scrollThreshold;

        const handleScroll = () => {
            setScrolled(window.scrollY > threshold);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`
                fixed top-0 left-0 right-0 z-50
                transition-all duration-300
                ${
                scrolled
                    ? "bg-[#0a0e27]/90 light:bg-white/90 backdrop-blur-md border-b border-white/5 light:border-slate-900/10 shadow-lg"
                    : "bg-transparent"
            }
            `}
        >
            <nav
                aria-label="Main navigation"
                className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between"
            >
                {/* Logo */}
                <a
                    href="#home"
                    className="flex-shrink-0 hover:opacity-80 transition-opacity"
                    aria-label="Home"
                >
                    <Image
                        src="/logo.svg"
                        alt="Logo"
                        width={113}
                        height={53}
                        priority
                        className="h-8 w-auto light:brightness-0"
                    />
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex items-center gap-8">
                        {NAVBAR_CONFIG.links.map((link) => (
                            <li key={link.href} className="flex flex-col gap-2.5 group">
                                <span className="h-px w-full bg-white/15 light:bg-slate-900/15 group-hover:bg-blue-400 transition-colors duration-300" />
                                <a
                                    href={link.href}
                                    className="
                                        inline-flex items-center gap-1
                                        text-sm font-medium text-slate-400 light:text-slate-600
                                        hover:text-white light:hover:text-slate-900 transition-colors
                                    "
                                >
                                    {link.label}
                                    <FiArrowUpRight size={13} className="opacity-70" />
                                </a>
                            </li>
                        ))}
                    </ul>
                    <ThemeToggle />
                </div>

                {/* Mobile: theme toggle + menu button */}
                <div className="flex md:hidden items-center gap-2">
                    <ThemeToggle />
                    <button
                        type="button"
                        className="text-slate-400 hover:text-white light:text-slate-600 light:hover:text-slate-900 transition-colors"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Navigation */}
            <div
                className={`
                    md:hidden bg-[#0a0e27]/95 light:bg-white/95 backdrop-blur-md
                    border-t border-white/5 light:border-slate-900/10 px-6 py-4
                    transition-all duration-300 overflow-hidden
                    ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                `}
            >
                <ul className="flex flex-col gap-4">
                    {NAVBAR_CONFIG.links.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="text-sm font-medium text-slate-300 light:text-slate-700 hover:text-white light:hover:text-slate-900 transition-colors"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}