import TechBadge from "./TechBadge";
import type { ServiceCardProps } from "@/types/service";

export default function ServiceCard({
                                        icon: Icon,
                                        title,
                                        description,
                                        points,
                                        techs,
                                    }: ServiceCardProps) {
    return (
        <div
            className="
        relative rounded-2xl p-6 flex flex-col gap-4 overflow-hidden
        bg-[#0a1628]
        border-2 border-blue-500/20
        hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-600/20
        transition-all duration-300
        group
      "
        >
            {/* Glow */}
            <div
                aria-hidden
                className="
          absolute inset-0 opacity-0 group-hover:opacity-100
          bg-gradient-to-br from-blue-600/5 to-cyan-600/5
          transition-opacity duration-300 pointer-events-none
        "
            />

            <div className="relative z-10 flex flex-col gap-4">

                {/* Icon */}
                <div className="w-11 h-11 rounded-lg flex items-center justify-center bg-blue-600/20 text-blue-400 group-hover:bg-blue-600/30 transition-colors duration-200">
                    <Icon size={22} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-100 leading-snug">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed">
                    {description}
                </p>

                {/* Points */}
                <ul className="flex flex-col gap-2 my-1">
                    {points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-400 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                            {point}
                        </li>
                    ))}
                </ul>

                {/* Techs */}
                <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/10">
                    {techs.map((tech) => (
                        <TechBadge key={tech} label={tech} />
                    ))}
                </div>

            </div>
        </div>
    );
}