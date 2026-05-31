import type { SectionHeaderProps } from "@/types/sectionHeader";

export default function SectionHeader({
                                          overline,
                                          title,
                                          subtitle,
                                          center = false,
                                      }: SectionHeaderProps) {
    const alignment = center ? "text-center items-center" : "text-left items-start";

    return (
        <div className={`flex flex-col gap-3 ${alignment}`}>

            {/* Overline */}
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
        {overline}
      </span>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-slate-100">
                {title}
            </h2>

            {/* Subtitle */}
            {subtitle && (
                <p className="text-slate-400 text-base leading-relaxed max-w-xl">
                    {subtitle}
                </p>
            )}

        </div>
    );
}