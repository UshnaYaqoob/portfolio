/**
 * SectionHeader
 * -------------
 * Reusable heading block used at the top of every major section.
 * Renders a small overline label, a large title, and an optional subtitle.
 *
 * Props:
 *  - overline : small uppercase label shown above the title (e.g. "Services")
 *  - title    : main section heading (can contain <br/> for line breaks)
 *  - subtitle : optional supporting text below the title
 *  - center   : when true, centers text (default: left-aligned)
 */

interface SectionHeaderProps {
    overline: string;
    title: string;
    subtitle?: string;
    center?: boolean;
}

export default function SectionHeader({
                                          overline,
                                          title,
                                          subtitle,
                                          center = false,
                                      }: SectionHeaderProps) {
    const alignment = center ? 'text-center items-center' : 'text-left items-start';

    return (
        <div className={`flex flex-col gap-3 ${alignment}`}>
            {/* Overline: small coloured label */}
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
        {overline}
      </span>

            {/* Main heading */}
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-slate-100">
                {title}
            </h2>

            {/* Optional supporting text */}
            {subtitle && (
                <p className="text-slate-400 text-base leading-relaxed max-w-xl">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
