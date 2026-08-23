"use client";

import { useEffect, useRef } from "react";
import { SKILL_TAGS, HERO_CONTENT, HERO_CTA } from "@/constants/hero";

const DOT_COLORS = ["#3b82f6", "#06b6d4", "#a855f7"];

export default function HeroSection() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const wrapRef = useRef<HTMLElement>(null);

    const PrimaryIcon = HERO_CTA.primary.icon;

    useEffect(() => {
        const canvas = canvasRef.current;
        const wrap = wrapRef.current;

        if (!canvas || !wrap) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const NODE_COUNT = 80;
        const CONNECTION_DISTANCE = 180;
        const SPEED = 0.35;

        let width = 0;
        let height = 0;
        let animationFrame = 0;

        type Point = {
            x: number;
            y: number;
            vx: number;
            vy: number;
        };

        let points: Point[] = [];

        const initialize = () => {
            width = canvas.width = wrap.offsetWidth;
            height = canvas.height = wrap.offsetHeight;

            points = Array.from({ length: NODE_COUNT }, () => ({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * SPEED,
                vy: (Math.random() - 0.5) * SPEED,
            }));
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            for (let i = 0; i < points.length; i++) {
                const pointA = points[i];

                pointA.x += pointA.vx;
                pointA.y += pointA.vy;

                if (pointA.x <= 0 || pointA.x >= width) {
                    pointA.vx *= -1;
                }

                if (pointA.y <= 0 || pointA.y >= height) {
                    pointA.vy *= -1;
                }

                ctx.beginPath();
                ctx.arc(pointA.x, pointA.y, 2, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(96,165,250,1)";
                ctx.fill();

                for (let j = i + 1; j < points.length; j++) {
                    const pointB = points[j];

                    const dx = pointA.x - pointB.x;
                    const dy = pointA.y - pointB.y;

                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < CONNECTION_DISTANCE) {
                        ctx.beginPath();
                        ctx.moveTo(pointA.x, pointA.y);
                        ctx.lineTo(pointB.x, pointB.y);

                        ctx.strokeStyle = `rgba(
                            96,
                            165,
                            250,
                            ${0.3 * (1 - distance / CONNECTION_DISTANCE)}
                        )`;

                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                    }
                }
            }

            animationFrame = requestAnimationFrame(animate);
        };

        initialize();
        animate();

        window.addEventListener("resize", initialize);

        return () => {
            cancelAnimationFrame(animationFrame);
            window.removeEventListener("resize", initialize);
        };
    }, []);

    return (
        <section
            id="home"
            ref={wrapRef}
            className="
                relative
                min-h-screen
                flex
                items-center
                justify-center
                px-6
                py-20
                overflow-hidden
                bg-[#050d1a] light:bg-white
            "
        >
            {/* Animated background */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050d1a]/20 via-transparent to-[#050d1a]/50 light:from-white/20 light:via-transparent light:to-white/50 pointer-events-none" />

            {/* Vertical scroll indicator */}
            <a
                href="#about"
                aria-label="Scroll to About section"
                className="
                    hidden md:flex flex-col items-center gap-3
                    absolute right-8 bottom-10 z-10
                    text-slate-400 hover:text-blue-400 light:text-slate-500 light:hover:text-blue-600
                    transition-colors
                "
            >
                <span className="animate-bot-float w-px h-14 bg-gradient-to-b from-transparent via-current to-current" />
                <span
                    className="text-[11px] font-semibold tracking-[0.25em] uppercase"
                    style={{ writingMode: "vertical-rl" }}
                >
                    Scroll
                </span>
            </a>

            {/* Content */}
            <div className="relative z-10 max-w-5xl w-full text-center">

                {/* Heading */}
                <h1
                    className="
                        text-5xl
                        sm:text-6xl
                        md:text-[64px]
                        leading-[1.15]
                        text-white light:text-slate-900
                        mb-6
                    "
                    style={{ letterSpacing: "-0.5px" }}
                >
                    <span className="font-extrabold">
                        {HERO_CONTENT.headline.line1}
                    </span>{" "}
                    <span className="font-normal text-blue-400">
                        {HERO_CONTENT.headline.highlight}
                    </span>

                    <br />

                    <span className="font-normal">
                        {HERO_CONTENT.headline.line2}
                    </span>
                </h1>
                {/* Skill Tags */}
                <div className="flex flex-wrap items-center justify-center gap-7 mb-6">
                    {SKILL_TAGS.map((tag, index) => (
                        <span
                            key={tag}
                            className="inline-flex items-center gap-2 text-sm font-medium text-slate-200 light:text-slate-700"
                        >
                            <span
                                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                                style={{
                                    background:
                                        DOT_COLORS[index % DOT_COLORS.length],
                                }}
                            />
                            {tag}
                        </span>
                    ))}
                </div>
                {/* Bio */}
                <p className="text-slate-400 light:text-slate-600 text-base md:text-lg leading-relaxed max-w-4xl mx-auto mb-10">
                    {HERO_CONTENT.bio}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-4">

                    <a
                        href={HERO_CTA.primary.href}
                        className="
                            inline-flex
                            items-center
                            gap-2
                            px-7
                            py-3.5
                            rounded-full
                            text-sm
                            font-semibold
                            text-white
                            transition-all
                            duration-300
                            hover:scale-105
                        "
                        style={{
                            background:
                                "linear-gradient(135deg, #7c3aed, #6366f1)",
                        }}
                    >
                        {HERO_CTA.primary.label}
                        {PrimaryIcon && <PrimaryIcon size={16} />}
                    </a>

                    <a
                        href={HERO_CTA.secondary.href}
                        className="
                            inline-flex
                            items-center
                            gap-2
                            px-7
                            py-3.5
                            rounded-full
                            text-sm
                            font-semibold
                            text-slate-100 light:text-slate-800
                            border-[1.5px] border-white/35 light:border-slate-900/25
                            transition-all
                            duration-300
                            hover:bg-white/5 light:hover:bg-slate-900/5
                        "
                    >
                        {HERO_CTA.secondary.label}
                    </a>

                </div>
            </div>
        </section>
    );
}