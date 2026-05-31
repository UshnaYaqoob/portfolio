import TechBadge from "./TechBadge";
import type { Project } from "@/types/projects";

export default function ProjectCard({
                                        layout,
                                        image,
                                        badge,
                                        title,
                                        description,
                                        points,
                                        techs,
                                        icon: Icon,
                                    }: Project) {
    const isLeft = layout === "left";

    return (
        <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12"
        >
            {/* Image */}
            <div className={isLeft ? "md:order-1" : "md:order-2"}>
                <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Content */}
            <div className={`flex flex-col gap-4 ${isLeft ? "md:order-2" : "md:order-1"}`}>

                {/* Badge */}
                {Icon && (
                    <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30">
                        <Icon size={16} className="text-blue-400" />
                        <span className="text-blue-300 text-xs font-semibold">
              {badge}
            </span>
                    </div>
                )}

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-slate-100">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed">
                    {description}
                </p>

                {/* Points */}
                <ul className="flex flex-col gap-2 my-1">
                    {points.map((point, idx) => (
                        <li
                            key={idx}
                            className="flex items-start gap-2 text-slate-400 text-sm"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                            {point}
                        </li>
                    ))}
                </ul>

                {/* Techs */}
                <div className="flex flex-wrap gap-2 mt-2 pt-4 border-t border-white/10">
                    {techs.map((tech) => (
                        <TechBadge key={tech} label={tech} />
                    ))}
                </div>

            </div>
        </div>
    );
}