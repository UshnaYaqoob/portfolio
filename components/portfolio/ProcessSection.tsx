"use client";

import { useEffect, useRef, useCallback } from "react";
import SectionHeader from "./SectionHeader";
import ProcessStep from "./ProcessStep";

const STEPS = [
    {
        id: 0, position: "top",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>
                <rect x="9" y="3" width="6" height="4" rx="2"/>
                <path d="m9 12 2 2 4-4"/>
            </svg>
        ),
        title: "Understand Requirements",
        description: "I start by understanding business goals, users, and technical needs.",
    },
    {
        id: 1, position: "bottom",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
            </svg>
        ),
        title: "Plan & Design",
        description: "System architecture, data flow, and UI decisions are defined early.",
    },
    {
        id: 2, position: "top",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
            </svg>
        ),
        title: "Develop & Integrate",
        description: "Clean, scalable code with secure authentication and optimized APIs.",
    },
    {
        id: 3, position: "bottom",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 11 12 14 22 4"/>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
            </svg>
        ),
        title: "Test & Refine",
        description: "Debugging, validation, and iteration to ensure stability and performance.",
    },
    {
        id: 4, position: "top",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
            </svg>
        ),
        title: "Deliver & Support",
        description: "Final delivery with documentation and support for future improvements.",
    },
];

const NS = "http://www.w3.org/2000/svg";

function getRelRect(el: Element, stage: Element) {
    const r = el.getBoundingClientRect();
    const s = stage.getBoundingClientRect();
    return {
        top:    r.top    - s.top,
        left:   r.left   - s.left,
        right:  r.right  - s.left,
        bottom: r.bottom - s.top,
        cx:     r.left - s.left + r.width  / 2,
        cy:     r.top  - s.top  + r.height / 2,
    };
}

export default function ProcessSection() {
    const stageRef = useRef<HTMLDivElement>(null);
    const svgRef   = useRef<SVGSVGElement>(null);
    const pathsRef = useRef<SVGPathElement[]>([]);
    const offRef   = useRef(0);
    const rafRef   = useRef<number | null>(null);

    const buildArrows = useCallback(() => {
        const stage = stageRef.current;
        const svg   = svgRef.current;
        if (!stage || !svg) return;

        svg.innerHTML = "";
        pathsRef.current = [];

        const pairs = [[0,1],[1,2],[2,3],[3,4]];
        const LINE_COLOR = "#3b82f6";
        const LIFT = 6;

        pairs.forEach(([fi, ti], idx) => {
            const fromBadge = stage.querySelector(`#proc-badge-${fi}`);
            const toBadge   = stage.querySelector(`#proc-badge-${ti}`);
            if (!fromBadge || !toBadge) return;

            const fb = getRelRect(fromBadge, stage);
            const tb = getRelRect(toBadge, stage);

            const x1 = fb.right;
            const y1 = fb.cy;

            const x2 = tb.left;
            const y2 = tb.cy;

            const dx = x2 - x1;
            const cp1x = x1 + dx * 0.5;
            const cp1y = y1 - LIFT;
            const cp2x = x2 - dx * 0.5;
            const cp2y = y2 - LIFT;

            const markerId = `proc-arrow-${idx}`;
            const defs = document.createElementNS(NS, "defs");
            const marker = document.createElementNS(NS, "marker");
            marker.setAttribute("id", markerId);
            marker.setAttribute("markerWidth", "9");
            marker.setAttribute("markerHeight", "9");
            marker.setAttribute("refX", "4.5");
            marker.setAttribute("refY", "4.5");
            marker.setAttribute("orient", "auto");
            const tip = document.createElementNS(NS, "path");
            tip.setAttribute("d", "M0,0.75 L7.5,4.5 L0,8.25 Z");
            tip.setAttribute("fill", LINE_COLOR);
            marker.appendChild(tip);
            svg.appendChild(defs);

            defs.appendChild(marker);
            const path = document.createElementNS(NS, "path");
            path.setAttribute("d", `M${x1},${y1} C${cp1x},${cp1y} ${cp2x},${cp2y} ${x2},${y2}`);
            path.setAttribute("fill", "none");
            path.setAttribute("stroke", LINE_COLOR);
            path.setAttribute("stroke-opacity", "0.85");
            path.setAttribute("stroke-width", "2.2");
            path.setAttribute("stroke-linecap", "round");
            path.setAttribute("stroke-dasharray", "0.1 7");
            path.setAttribute("marker-end", `url(#${markerId})`);

            const startDot = document.createElementNS(NS, "circle");
            startDot.setAttribute("cx", String(x1));
            startDot.setAttribute("cy", String(y1));
            startDot.setAttribute("r", "2.2");
            startDot.setAttribute("fill", LINE_COLOR);
            svg.appendChild(startDot);

            svg.appendChild(path);
            pathsRef.current.push(path);
        });
    }, []);

    useEffect(() => {
        const t = setTimeout(buildArrows, 80);
        window.addEventListener("resize", buildArrows);

        const tick = () => {
            offRef.current -= 0.25;
            pathsRef.current.forEach((p) =>
                p.setAttribute("stroke-dashoffset", String(offRef.current))
            );
            rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);

        return () => {
            clearTimeout(t);
            window.removeEventListener("resize", buildArrows);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [buildArrows]);

    return (
        <section className="py-24 px-6 bg-[#050b18] light:bg-white">
            <div className="max-w-6xl mx-auto">
                <SectionHeader
                    overline="— My Process!"
                    title={<>How I <span className="text-blue-400">Work</span></>}
                    subtitle="Step-by-step development workflow I follow, from first conversation to final delivery."
                    accent="blue"
                    center
                />

                {/* Mobile/tablet: simple vertical timeline (zigzag layout doesn't fit narrow screens) */}
                <div className="lg:hidden mt-16 flex flex-col">
                    {STEPS.map((step, idx) => (
                        <ProcessStep
                            key={step.id}
                            number={idx + 1}
                            title={step.title}
                            description={step.description}
                            isLast={idx === STEPS.length - 1}
                        />
                    ))}
                </div>

                {/* Desktop: staggered zigzag layout with animated connector arrows */}
                <div className="hidden lg:block relative mt-24" ref={stageRef}>
                    <div className="grid grid-cols-5 gap-5">
                        {STEPS.map((step) => {
                            const isTop = step.position === "top";
                            return (
                                <div
                                    key={step.id}
                                    id={`proc-col-${step.id}`}
                                    data-pos={step.position}
                                    className={`relative z-10 ${isTop ? "mb-24" : "mt-24"}`}
                                >
                                    {/* Card */}
                                    <div
                                        id={`proc-card-${step.id}`}
                                        className="relative bg-[#0d1420] light:bg-slate-50 border border-white/10 light:border-slate-900/10 rounded-2xl pt-9 pb-5 px-5 text-left w-full z-10"
                                    >
                                        {/* Icon badge — overlapping the top-left corner of the card */}
                                        <div
                                            id={`proc-badge-${step.id}`}
                                            className="absolute -top-5 left-4 w-11 h-11 rounded-xl bg-black text-white flex items-center justify-center z-20 shadow-lg shadow-black/30"
                                        >
                                            {step.icon}
                                        </div>

                                        <h3 className="text-white light:text-slate-900 font-bold text-base leading-snug mb-2 mt-1">
                                            {step.title}
                                        </h3>
                                        <p className="text-slate-400 light:text-slate-600 text-xs leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Absolute SVG layer for dotted curved arrows */}
                    <svg
                        ref={svgRef}
                        className="absolute inset-0 w-full h-full pointer-events-none z-0"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ overflow: "visible" }}
                    />
                </div>
            </div>
        </section>
    );
}
