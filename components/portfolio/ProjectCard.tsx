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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">

            <div className={isLeft ? "md:order-1" : "md:order-2"}>
                <img src={image} className="rounded-xl w-full object-cover" />
            </div>

            {/* Content */}
            <div className={`flex flex-col gap-4 ${isLeft ? "md:order-2" : "md:order-1"}`}>

                {/* Badge */}
                {Icon && (
                    <div className="flex items-center gap-2 text-blue-400">
                        <Icon />
                        <span className="text-xs">{badge}</span>
                    </div>
                )}

                <h3 className="text-2xl font-bold text-white">{title}</h3>
                <p className="text-slate-400">{description}</p>

                <ul className="space-y-2">
                    {points.map((p) => (
                        <li key={p} className="text-slate-400 text-sm">• {p}</li>
                    ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                    {techs.map((t) => (
                        <TechBadge key={t} label={t} />
                    ))}
                </div>

            </div>
        </div>
    );
}