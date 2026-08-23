"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
    const glowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!window.matchMedia("(pointer: fine)").matches) return;

        const el = glowRef.current;
        if (!el) return;

        let x = window.innerWidth / 2;
        let y = window.innerHeight / 2;
        let raf = 0;

        const handleMove = (e: MouseEvent) => {
            x = e.clientX;
            y = e.clientY;
            if (!raf) {
                raf = requestAnimationFrame(() => {
                    el.style.transform = "translate(" + x + "px, " + y + "px)";
                    raf = 0;
                });
            }
        };

        window.addEventListener("mousemove", handleMove);
        return () => {
            window.removeEventListener("mousemove", handleMove);
            if (raf) cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <div
            ref={glowRef}
            aria-hidden="true"
            className="fixed top-0 left-0 z-[2] hidden md:block w-[560px] h-[560px] -ml-[280px] -mt-[280px] rounded-full pointer-events-none light:opacity-0"
            style={{
                background: "radial-gradient(circle, rgba(59,130,246,0.16), rgba(6,182,212,0.06) 45%, transparent 70%)",
                willChange: "transform",
            }}
        />
    );
}
