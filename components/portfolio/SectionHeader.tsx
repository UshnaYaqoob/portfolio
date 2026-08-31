import type { SectionHeaderProps } from "@/types/sectionHeader";

export default function SectionHeader({
                                          overline,
                                          title,
                                          subtitle,
                                          center = false,
                                          accent = "blue",
                                      }: SectionHeaderProps) {
    const alignment = center ? "text-center items-center" : "text-left items-start";
    const overlineColor = accent === "purple" ? "text-purple-400" : "text-blue-400";

    return (
        <div className={`flex flex-col gap-3 ${alignment}`}>

            {/* Overline */}
            <span className={`text-xs font-semibold uppercase tracking-widest ${overlineColor}`}>
        {overline}
      </span>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-slate-100 light:text-slate-900">
                {title}
            </h2>

            {/* Subtitle */}
            {subtitle && (
                <p className="text-slate-400 light:text-slate-600 text-base leading-relaxed max-w-full">
                    {subtitle}
                </p>
            )}

        </div>
    );
}
