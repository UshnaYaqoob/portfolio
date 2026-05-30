"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import {NAVBAR_CONFIG} from "@/constants/navbar.ts";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(
                window.scrollY > NAVBAR_CONFIG.scrollThreshold
            );
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`
        fixed
        top-0
        left-0
        right-0
        z-50
        transition-all
        duration-300
        ${
                scrolled
                    ? "bg-[#0a0e27]/90 backdrop-blur-md border-b border-white/5 shadow-lg"
                    : "bg-transparent"
            }
      `}
        >
            <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <a
                    href={NAVBAR_CONFIG.brand.href}
                    className="text-white font-semibold text-base tracking-tight"
                >
                    {NAVBAR_CONFIG.brand.firstName}.
                    <span className="text-blue-400">
            {NAVBAR_CONFIG.brand.lastName}
          </span>
                </a>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center gap-8">
                    {NAVBAR_CONFIG.links.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="
                  relative
                  text-sm
                  font-medium
                  text-slate-400
                  hover:text-white
                  transition-colors
                  duration-200
                  group
                "
                            >
                                {link.label}

                                <span
                                    className="
                    absolute
                    left-0
                    -bottom-1
                    h-px
                    w-0
                    bg-blue-400
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                                />
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    className="
            md:hidden
            text-slate-400
            hover:text-white
            transition-colors
          "
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    {menuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </nav>

            {/* Mobile Navigation */}
            {menuOpen && (
                <div
                    className="
            md:hidden
            bg-[#0a0e27]/95
            backdrop-blur-md
            border-t
            border-white/5
            px-6
            py-4
          "
                >
                    <ul className="flex flex-col gap-4">
                        {NAVBAR_CONFIG.links.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="
                    text-sm
                    font-medium
                    text-slate-300
                    hover:text-white
                    transition-colors
                  "
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
}