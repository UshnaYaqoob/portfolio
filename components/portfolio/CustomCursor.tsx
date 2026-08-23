"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const [hovering, setHovering] = useState(false);

    useEffect(() => {
        if (!window.matchMedia("(pointer: fine)").matches) return;

        document.documentElement.classList.add("custom-cursor-active");
        dotRef.current?.classList.remove("hidden");
        ringRef.current?.classList.remove("hidden");

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let ringX = mouseX;
        let ringY = mouseY;
        let raf = 0;

        const handleMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (dotRef.current) {
                dotRef.current.style.transform = "translate(" + mouseX + "px, " + mouseY + "px)";
            }
        };

        const animateRing = () => {
            ringX += (mouseX - ringX) * 0.18;
            ringY += (mouseY - ringY) * 0.18;
            if (ringRef.current) {
                ringRef.current.style.transform = "translate(" + ringX + "px, " + ringY + "px)";
            }
            raf = requestAnimationFrame(animateRing);
        };

        const handleOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            setHovering(!!target.closest('a, button, [role="button"], input, textarea'));
        };

        window.addEventListener("mousemove", handleMove);
        window.addEventListener("mouseover", handleOver);
        raf = requestAnimationFrame(animateRing);

        return () => {
            document.documentElement.classList.remove("custom-cursor-active");
            window.removeEventListener("mousemove", handleMove);
            window.removeEventListener("mouseover", handleOver);
            cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <>
            <div
                ref={dotRef}
                aria-hidden="true"
                className="hidden fixed top-0 left-0 w-1.5 h-1.5 -ml-[3px] -mt-[3px] rounded-full bg-blue-400 pointer-events-none z-[70]"
                style={{ willChange: "transform" }}
            />
            <div
                ref={ringRef}
                aria-hidden="true"
                className={
                    "hidden fixed top-0 left-0 rounded-full border pointer-events-none z-[70] transition-[width,height,border-color,background-color] duration-200 " +
                    (hovering
                        ? "w-10 h-10 -ml-5 -mt-5 border-blue-400 bg-blue-400/10"
                        : "w-7 h-7 -ml-3.5 -mt-3.5 border-blue-400/50 bg-transparent")
                }
                style={{ willChange: "transform" }}
            />
        </>
    );
}
