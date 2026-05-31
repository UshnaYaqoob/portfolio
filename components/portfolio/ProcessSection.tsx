/**
 * ProcessSection — "How I Work"
 *
 * Premium bordered container with:
 *  - Dotted border frame
 *  - 3 primary steps + 2 secondary steps
 *  - Curved connecting paths between steps
 *  - Responsive layout
 */

import { Lightbulb, Pencil, Code, TestTube, Rocket } from "lucide-react";

const PRIMARY_STEPS = [
    {
        icon: Lightbulb,
        title: "Understand Requirements",
        description: "Listen to your understanding, business goals, users, and technical needs.",
    },
    {
        icon: Code,
        title: "Develop & Integrate",
        description: "Clean, scalable code with secure authentication and optimized APIs.",
    },
    {
        icon: Rocket,
        title: "Deliver & Support",
        description: "Final delivery with documentation and support for future improvements.",
    },
];

const SECONDARY_STEPS = [
    {
        icon: Pencil,
        title: "Plan & Design",
        description: "System architecture, data flows, and UI decisions are defined early.",
    },
    {
        icon: TestTube,
        title: "Test & Refine",
        description: "Debugging, validation, and iteration to ensure stability and performance.",
    },
];

export default function ProcessSection() {
    return (
        <section className="py-24 px-6 bg-[#050b18]">
            <div className="max-w-6xl mx-auto">
                {/* Bordered container with dotted border */}
                <div className="border-2 border-dashed border-blue-500/30 rounded-lg p-8 md:p-12">

                    {/* Section header */}
                    <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 block mb-3">
              My Process
            </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
                            How I <span className="text-blue-400">Work</span>
                        </h2>
                        <p className="text-slate-400 text-base max-w-2xl mx-auto">
                            Below are some of the systems I've worked on, focusing on functionality, performance, and real-world impact.
                        </p>
                    </div>

                    {/* Desktop - Horizontal flow with connectors */}
                    <div className="hidden lg:block relative">
                        {/* SVG for curved connecting paths */}
                        <svg
                            className="absolute inset-0 w-full h-full pointer-events-none"
                            style={{ height: "320px" }}
                            viewBox="0 0 1200 320"
                            preserveAspectRatio="none"
                        >
                            <defs>
                                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0.2)" />
                                    <stop offset="50%" stopColor="rgba(59, 130, 246, 0.3)" />
                                    <stop offset="100%" stopColor="rgba(59, 130, 246, 0.2)" />
                                </linearGradient>
                            </defs>

                            {/* Step 1 -> Plan & Design (curve down) */}
                            <path
                                d="M 180 80 Q 180 160, 300 240"
                                stroke="url(#pathGradient)"
                                strokeWidth="1.5"
                                fill="none"
                                strokeDasharray="5,5"
                            />

                            {/* Plan & Design -> Step 2 (curve up) */}
                            <path
                                d="M 400 240 Q 480 160, 520 80"
                                stroke="url(#pathGradient)"
                                strokeWidth="1.5"
                                fill="none"
                                strokeDasharray="5,5"
                            />

                            {/* Step 2 -> Test & Refine (curve down) */}
                            <path
                                d="M 680 80 Q 680 160, 800 240"
                                stroke="url(#pathGradient)"
                                strokeWidth="1.5"
                                fill="none"
                                strokeDasharray="5,5"
                            />

                            {/* Test & Refine -> Step 3 (curve up) */}
                            <path
                                d="M 900 240 Q 980 160, 1020 80"
                                stroke="url(#pathGradient)"
                                strokeWidth="1.5"
                                fill="none"
                                strokeDasharray="5,5"
                            />
                        </svg>

                        <div className="relative z-10">
                            {/* Primary steps (top row) */}
                            <div className="grid grid-cols-3 gap-8 mb-32">
                                {PRIMARY_STEPS.map((step) => (
                                    <div key={step.title} className="flex flex-col items-center text-center">
                                        {/* Icon circle */}
                                        <div className="w-14 h-14 rounded-lg bg-slate-900/60 border-2 border-blue-500/40 flex items-center justify-center text-blue-400 mb-4 hover:border-blue-500/60 transition-colors">
                                            <step.icon size={24} />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-slate-100 font-bold text-base mb-2 leading-snug">
                                            {step.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-slate-400 text-xs leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Secondary steps (bottom row, centered) */}
                            <div className="flex justify-center gap-16">
                                {SECONDARY_STEPS.map((step) => (
                                    <div key={step.title} className="flex flex-col items-center text-center max-w-xs">
                                        {/* Small edit icon */}
                                        <div className="w-11 h-11 rounded-lg bg-slate-800/40 border border-slate-700 flex items-center justify-center text-slate-500 mb-3 hover:border-blue-500/40 transition-colors">
                                            <step.icon size={18} />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-slate-200 font-semibold text-sm mb-1">
                                            {step.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-slate-500 text-xs leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Mobile - Vertical stack */}
                    <div className="lg:hidden flex flex-col gap-8 relative">
                        {/* All steps stacked vertically */}
                        {PRIMARY_STEPS.map((step, idx) => (
                            <div key={step.title} className="flex gap-4 items-start">
                                {/* Icon circle */}
                                <div className="w-12 h-12 rounded-lg bg-slate-900/60 border-2 border-blue-500/40 flex items-center justify-center text-blue-400 flex-shrink-0">
                                    <step.icon size={20} />
                                </div>

                                {/* Content */}
                                <div className="flex-1 pt-1">
                                    <h3 className="text-slate-100 font-bold text-sm mb-1">
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-400 text-xs leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}

                        {/* Secondary steps */}
                        <div className="mt-4 pt-4 border-t border-slate-700 space-y-6">
                            {SECONDARY_STEPS.map((step) => (
                                <div key={step.title} className="flex gap-4 items-start">
                                    {/* Icon */}
                                    <div className="w-11 h-11 rounded-lg bg-slate-800/40 border border-slate-700 flex items-center justify-center text-slate-500 flex-shrink-0">
                                        <step.icon size={16} />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 pt-0.5">
                                        <h3 className="text-slate-200 font-semibold text-sm mb-0.5">
                                            {step.title}
                                        </h3>
                                        <p className="text-slate-500 text-xs leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
