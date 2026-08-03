/**
 * ProcessStep
 * -----------
 * One step in the "How I Work" timeline.
 * Renders a step number, title, and description, connected to the
 * next step via a vertical line (CSS).
 *
 * Props:
 *  - number      : 1-based position (displayed as "01", "02", etc.)
 *  - title       : step name
 *  - description : 1–2 sentence explanation
 *  - isLast      : when true, the connecting line is hidden (no step follows)
 */

interface ProcessStepProps {
    number: number;
    title: string;
    description: string;
    isLast?: boolean;
}

export default function ProcessStep({ number, title, description, isLast = false }: ProcessStepProps) {
    // Zero-pad single-digit numbers: 1 → "01"
    const label = String(number).padStart(2, "0");

    return (
        <div className="flex gap-5">
            {/* ── Left column: number circle + connecting line ── */}
            <div className="flex flex-col items-center shrink-0">
                {/* Step number circle */}
                <div
                    className="
            w-10 h-10 rounded-full flex items-center justify-center shrink-0
            border border-blue-500/40 light:border-blue-300 bg-blue-600/10 light:bg-blue-50 text-blue-400 light:text-blue-600
            text-sm font-bold
          "
                >
                    {label}
                </div>

                {/* Vertical connecting line (hidden for last step) */}
                {!isLast && (
                    <div className="w-px flex-1 mt-2 bg-gradient-to-b from-blue-500/30 to-transparent min-h-[48px]" />
                )}
            </div>

            {/* ── Right column: content ── */}
            <div className={`flex flex-col gap-1 ${isLast ? "" : "pb-10"}`}>
                <h3 className="text-slate-100 light:text-slate-900 font-semibold text-lg">{title}</h3>
                <p className="text-slate-400 light:text-slate-600 text-sm leading-relaxed">{description}</p>
            </div>
        </div>
    );
}
