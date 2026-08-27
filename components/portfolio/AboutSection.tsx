/**
 * AboutSection — "The Mind Behind the Code"
 *
 * Left: rounded image with blue gradient background
 * Right: heading, bio text, stats (Years of experience, Projects completed), CTAs
 */
import { MdFlashOn } from "react-icons/md";import {
    ABOUT_CONTENT,
    ABOUT_STATS,
    ABOUT_CTA,
    ABOUT_IMAGE,
} from "@/constants/about";
import Reveal from "./Reveal";
import AnimatedCounter from "./AnimatedCounter";

export default function AboutSection() {
    return (
        <section id="about" className="py-24 px-6 bg-[#050b18] light:bg-white border-t border-white/5 light:border-slate-900/10">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left: Image */}
                    <Reveal className="flex justify-center lg:justify-start">
                        <div className="relative w-full max-w-md">

                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-500 rounded-3xl blur-2xl opacity-40" />

                            <div className="relative rounded-3xl overflow-hidden aspect-[3/4]">
                                <img
                                    src={ABOUT_IMAGE.src}
                                    alt={ABOUT_IMAGE.alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </Reveal>

                    {/* Right: Content */}
                    <Reveal delay={120} className="flex flex-col gap-6">

                        {/* Overline */}
                        <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
              {ABOUT_CONTENT.overline}
            </span>

                        {/* Heading */}
                        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-white light:text-slate-900">
                            The <span className="text-blue-400">{ABOUT_CONTENT.heading.highlight}</span> Behind
                            <br />
                            {ABOUT_CONTENT.heading.line2}
                        </h2>

                        {/* Bio */}
                        <div className="flex flex-col gap-3 text-slate-400 light:text-slate-600 text-sm leading-relaxed">
                            {ABOUT_CONTENT.bio.map((text, i) => (
                                <p key={i}>{text}</p>
                            ))}
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4 py-4">
                            {ABOUT_STATS.map((stat, i) => (
                                <div key={i}>
                                    <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-slate-100 light:text-slate-900">
                      <AnimatedCounter value={stat.value} />
                    </span>
                                        <span className="text-slate-400 light:text-slate-600 text-sm">
                      {stat.suffix}
                    </span>
                                    </div>
                                    <span className="text-slate-400 light:text-slate-600 text-xs mt-1 block">
                    {stat.label}
                  </span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col gap-3 pt-2 w-full max-w-[240px] mx-auto">
                            <a
                                href={ABOUT_CTA.primary.href}
                                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold text-white rounded-full bg-blue-600 hover:bg-blue-500 transition-all duration-200"
                            >
                                <MdFlashOn size={15} />
                                {ABOUT_CTA.primary.label}
                            </a>

                            <a
                                href={ABOUT_CTA.secondary.href}
                                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold text-slate-300 light:text-slate-700 rounded-full border border-slate-700 light:border-slate-300 hover:border-slate-500 light:hover:border-slate-500 hover:text-white light:hover:text-slate-900 transition-all duration-200"
                            >
                                {ABOUT_CTA.secondary.label}
                            </a>
                        </div>

                    </Reveal>
                </div>
            </div>
        </section>
    );
}
