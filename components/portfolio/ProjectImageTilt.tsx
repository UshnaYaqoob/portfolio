"use client";

import { useRef } from "react";

interface ProjectImageTiltProps {
    image: string;
    alt: string;
}

export default function ProjectImageTilt({ image, alt }: ProjectImageTiltProps) {
    const tiltRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const el = tiltRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = ((y / rect.height) - 0.5) * -10;
        const rotateY = ((x / rect.width) - 0.5) * 10;
        el.style.transform =
            "perspective(800px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) scale3d(1.02, 1.02, 1.02)";
        el.style.setProperty("--glow-x", (x / rect.width) * 100 + "%");
        el.style.setProperty("--glow-y", (y / rect.height) * 100 + "%");
    };

    const handleMouseLeave = () => {
        const el = tiltRef.current;
        if (!el) return;
        el.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    };

    return (
        <div
            ref={tiltRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group relative rounded-xl overflow-hidden transition-transform duration-300 ease-out will-change-transform"
        >
            <img src={image} alt={alt} className="rounded-xl w-full object-cover block" />
            <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    background:
                        "radial-gradient(circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(59,130,246,0.35), transparent 60%)",
                }}
            />
        </div>
    );
}
