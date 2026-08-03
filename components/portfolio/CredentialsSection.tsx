"use client";

import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { CREDENTIALS } from "@/constants/credentials";

export default function CredentialsSection() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollByAmount = (amount: number) => {
        scrollRef.current?.scrollBy({ left: amount, behavior: "smooth" });
    };

    return (
        <section className="py-10 px-6 bg-[#0a1628] border-b border-white/5">            <div className="max-w-5xl mx-auto relative">

                {/* Left arrow */}
                <button
                    onClick={() => scrollByAmount(-240)}
                    aria-label="Scroll left"
                    className="
            hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10
            w-9 h-9 items-center justify-center rounded-full
            bg-[#0d1f35] border border-white/10 text-slate-300
            hover:text-white hover:border-blue-500/50 transition-colors
          "
                >
                    <FaChevronLeft size={12} />
                </button>

                <div
                    ref={scrollRef}
                    className="flex flex-nowrap items-center justify-start lg:justify-center gap-0 overflow-x-auto themed-scrollbar pb-4"
                >
                    {CREDENTIALS.map((cred, idx) => (
                        <div key={idx} className="flex items-center flex-shrink-0">

                            {/* Credential item */}
                            <div className="flex items-center gap-3 px-8 py-3">
                                {/* Logo */}
                                <img
                                    src={cred.image}
                                    alt={cred.title}
                                    className="w-10 h-10 object-contain rounded-md flex-shrink-0"
                                />

                                {/* Text */}
                                <div className="flex flex-col">
                                    <span className="text-white text-sm font-bold leading-snug">
                                        {cred.title}
                                    </span>
                                    <span className="text-slate-400 text-xs mt-0.5">
                                        {cred.subtitle}
                                    </span>
                                </div>
                            </div>

                            {/* Vertical divider — skip after last item */}
                            {idx < CREDENTIALS.length - 1 && (
                                <div className="w-px h-30 bg-white/10 flex-shrink-0" />
                            )}

                        </div>
                    ))}
                </div>

                {/* Right arrow */}
                <button
                    onClick={() => scrollByAmount(240)}
                    aria-label="Scroll right"
                    className="
            hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10
            w-9 h-9 items-center justify-center rounded-full
            bg-[#0d1f35] border border-white/10 text-slate-300
            hover:text-white hover:border-blue-500/50 transition-colors
          "
                >
                    <FaChevronRight size={12} />
                </button>

            </div>
        </section>
    );
}
