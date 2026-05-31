import {
    SKILL_TAGS,
    HERO_CONTENT,
    HERO_CTA,
} from "@/constants/hero";

export default function HeroSection() {
    const PrimaryIcon = HERO_CTA.primary.icon;

    return (
        <section
            id="home"
            className="
        relative min-h-screen flex flex-col justify-center items-center
        pt-24 pb-16 px-6
        bg-gradient-to-b from-[#0a0e27] via-[#050b18] to-[#030812]
      "
        >
            {/* Background blobs */}
            <div className="pointer-events-none absolute top-20 right-10 w-72 h-72 rounded-full bg-blue-600/5 blur-3xl" />
            <div className="pointer-events-none absolute bottom-40 left-20 w-96 h-96 rounded-full bg-cyan-600/5 blur-3xl" />

            <div className="relative max-w-4xl mx-auto w-full text-center">

                {/* Skill tags */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
                    {SKILL_TAGS.map((tag) => (
                        <span
                            key={tag}
                            className="
                inline-flex items-center gap-1 px-3 py-1 text-xs font-medium
                text-blue-300 bg-blue-500/10 border border-blue-500/20
                rounded-full
              "
                        >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                            {tag}
            </span>
                    ))}
                </div>

                {/* Headline */}
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.15] text-slate-100 max-w-5xl mb-6">
                    {HERO_CONTENT.headline.line1}{" "}
                    <span className="text-blue-400">{HERO_CONTENT.headline.highlight}</span>
                    <br />
                    {HERO_CONTENT.headline.line2}
                </h1>

                {/* Bio */}
                <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                    {HERO_CONTENT.bio}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-4">

                    {/* Primary CTA */}
                    <a
                        href={HERO_CTA.primary.href}
                        className="
              inline-flex items-center gap-2 px-6 py-3
              text-sm font-semibold text-white rounded-lg
              bg-blue-600 hover:bg-blue-500
              transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/30
            "
                    >
                        {HERO_CTA.primary.label}
                        {PrimaryIcon && <PrimaryIcon size={16} />}
                    </a>

                    {/* Secondary CTA */}
                    <a
                        href={HERO_CTA.secondary.href}
                        className="
              inline-flex items-center gap-2 px-6 py-3
              text-sm font-semibold text-slate-300 rounded-lg
              border border-slate-700 hover:border-slate-500 hover:text-white
              transition-all duration-200
            "
                    >
                        {HERO_CTA.secondary.label}
                    </a>

                </div>
            </div>
        </section>
    );
}