"use client";

import { useEffect, useRef, useCallback } from "react";
import SectionHeader from "./SectionHeader";
import ProcessStep from "./ProcessStep";

const STEPS = [
    {
        id: 0, position: "top",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
            </svg>
        ),
        title: "Deliver & Support",
        description: "Final delivery with documentation and support for future improvements.",
    },
];

const NS = "http://www.w3.org/2000/svg";

function getRelRect(el, stage) {
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
    const stageRef = useRef(null);
    const svgRef   = useRef(null);
    const pathsRef = useRef([]);
    const offRef   = useRef(0);
    const rafRef   = useRef(null);

    const buildArrows = useCallback(() => {
        const stage = stageRef.current;
        const svg   = svgRef.current;
        if (!stage || !svg) return;

        svg.innerHTML = "";
        pathsRef.current = [];

        const pairs = [[0,1],[1,2],[2,3],[3,4]];

        pairs.forEach(([fi, ti], idx) => {
            const fromCard = stage.querySelector(`#proc-card-${fi}`);
            const toBadge  = stage.querySelector(`#proc-badge-${ti}`);
            const fromCol  = stage.querySelector(`#proc-col-${fi}`);
            const toCol    = stage.querySelector(`#proc-col-${ti}`);
            if (!fromCard || !toBadge) return;

            const fc = getRelRect(fromCard, stage);
            const tb = getRelRect(toBadge,  stage);
            const fromIsTop = fromCol?.dataset.pos === "top";
            const toIsTop   = toCol?.dataset.pos   === "top";

            const x1 = fc.right;
            const y1 = fc.cy;

            const x2 = tb.left;
            const y2 = tb.cy;

            const dx = x2 - x1;
            const cp1x = x1 + dx * 0.5;
            const cp1y = y1;  
            const cp2x = x2 - dx * 0.5;
            const cp2y = y2;  
            const mid = `proc-arr-${idx}`;
            const defs   = document.createElementNS(NS, "defs");
            const marker = document.createElementNS(NS, "marker");
            marker.setAttribute("id", mid);
            marker.setAttribute("markerWidth", "6");
            marker.setAttribute("markerHeight", "6");
            marker.setAttribute("refX", "3");
            marker.setAttribute("refY", "3");
            marker.setAttribute("orient", "auto");
            const tip = document.createElementNS(NS, "path");
            tip.setAttribute("d", "M0,0.5 L5,3 L0,5.5 Z");
            tip.setAttribute("fill", "#3b82f6");
            tip.setAttribute("opacity", "0.75");
            marker.appendChild(tip);
            defs.appendChild(marker);
            svg.appendChild(defs);

            const path = document.createElementNS(NS, "path");
            path.setAttribute("d", `M${x1},${y1} C${cp1x},${cp1y} ${cp2x},${cp2y} ${x2},${y2}`);
            path.setAttribute("fill", "none");
            path.setAttribute("stroke", "#3b82f6");
            path.setAttribute("stroke-opacity", "0.55");
            path.setAttribute("stroke-width", "1.4");
            path.setAttribute("stroke-dasharray", "4 3.5");
            path.setAttribute("marker-end", `url(#${mid})`);
            path.setAttribute('d', `M${x1},${y1} C${cp1x},${cp1y} ${cp2x},${cp2y} ${x2},${y2}`);

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
                p.setAttribute("stroke-dashoffset", offRef.current)
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
                <div className="border border-dashed border-blue-500/30 rounded-2xl p-8 md:p-12">
                    <SectionHeader
                        overline="My Process"
                        title={<>How I <span className="text-blue-400">Work</span></>}
                        subtitle="Step-by-step development workflow I follow"
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
                    <div className="hidden lg:block relative mt-16" ref={stageRef}>
                        <div className="grid grid-cols-5 gap-3">
                            {STEPS.map((step) => {
                                const isTop = step.position === "top";
                                return (
                                    <div
                                        key={step.id}
                                        id={`proc-col-${step.id}`}
                                        data-pos={step.position}
                                        className={`relative flex flex-col items-center z-10 ${
                                            isTop ? "pt-5 mb-20" : "pt-5 mt-20"
                                        }`}
                                    >
                                        {/* Icon badge — absolute, sitting on top edge of card */}
                                        <div
                                            id={`proc-badge-${step.id}`}
                                            className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 rounded-xl bg-[#101e33] light:bg-blue-50 border border-blue-800/40 light:border-blue-200 flex items-center justify-center text-blue-400 light:text-blue-600 z-20"
                                        >
                                            {step.icon}
                                        </div>

                                        {/* Card — top padding makes room for the overlapping badge */}
                                        <div
                                            id={`proc-card-${step.id}`}
                                            className="bg-[#0a1628] light:bg-slate-50 border border-blue-900/50 light:border-blue-200/60 rounded-xl pt-8 pb-5 px-3 text-center w-full z-10"
                                        >
                                            <h3 className="text-white light:text-slate-900 font-bold text-base leading-snug mb-2">
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
            </div>
        </section>
    );
}

