// "use client";
//
// import { useState } from "react";
// import { FaCode, FaBolt, FaDatabase, FaMicrochip } from "react-icons/fa";
// import type { IconType } from "react-icons";
// import type { ServiceCardProps } from "@/types/services";
//
// const ICON_MAP: Record<string, IconType> = {
//     code:      FaCode,
//     bolt:      FaBolt,
//     database:  FaDatabase,
//     microchip: FaMicrochip,
// };
//
// const SERVICE_IMAGES: Record<string, string> = {
//     "Full-Stack Web Applications": "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=700&q=80",
//     "Real-Time & Secure Systems":  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=700&q=80",
//     "Dashboards & Analytics":      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80",
//     "Backend & API Engineering":   "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&q=80",
// };
//
// export default function ServiceCard({
//                                         iconKey,
//                                         title,
//                                         description,
//                                         points,
//                                         techs,
//                                     }: ServiceCardProps) {
//     const [hovered, setHovered] = useState(false);
//     const Icon = ICON_MAP[iconKey];
//     const image = SERVICE_IMAGES[title];
//
//     return (
//         <div
//             onMouseEnter={() => setHovered(true)}
//             onMouseLeave={() => setHovered(false)}
//             className="relative rounded-2xl overflow-hidden flex flex-col bg-[#0d1b2e] border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer min-h-[340px]"
//         >
//             {/* Full-card background image — only visible + blurred on hover */}
//             {image && (
//                 <div
//                     className="absolute inset-0 bg-cover bg-center transition-all duration-500"
//                     style={{
//                         backgroundImage: `url(${image})`,
//                         opacity: hovered ? 1 : 0,
//                         filter: "blur(3px) brightness(0.3)",
//                         transform: hovered ? "scale(1.05)" : "scale(1)",
//                     }}
//                 />
//             )}
//
//             {/* Dark overlay on hover to deepen the blur effect */}
//             {hovered && (
//                 <div className="absolute inset-0 bg-[#050d1a]/60 z-[1]" />
//             )}
//
//             {/* Content */}
//             <div className="relative z-20 p-7 flex flex-col gap-3 flex-1">
//
//                 {Icon && (
//                     <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-600/20 text-blue-400 mb-1">
//                         <Icon size={20} />
//                     </div>
//                 )}
//
//                 <h3 className="text-xl font-bold text-white leading-snug">{title}</h3>
//
//                 <p className="text-[#8a9bb5] text-sm leading-relaxed">{description}</p>
//
//                 {/* Revealed on hover */}
//                 <div
//                     className="flex flex-col gap-4 mt-2 transition-all duration-500"
//                     style={{
//                         opacity: hovered ? 1 : 0,
//                         transform: hovered ? "translateY(0)" : "translateY(12px)",
//                         maxHeight: hovered ? "300px" : "0px",
//                         overflow: "hidden",
//                     }}
//                 >
//                     <div>
//                         <p className="text-white/60 text-sm mb-2">What's Included:</p>
//                         <ul className="flex flex-col gap-1.5">
//                             {points.map((point, idx) => (
//                                 <li key={idx} className="flex items-start gap-2 text-[#dce8f8] text-sm">
//                                     <span className="flex-shrink-0 mt-0.5">•</span>
//                                     {point}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                     <div className="flex flex-wrap gap-2">
//                         {techs.map((tech) => (
//                             <span
//                                 key={tech}
//                                 className="px-3 py-1.5 rounded-full text-xs font-medium text-white border border-white/35 bg-transparent"
//                             >
//                                 {tech}
//                             </span>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//
//             {/* Bottom image thumbnail — visible by default, fades out on hover */}
//             <div
//                 className="relative z-20 mx-5 mb-5 rounded-xl overflow-hidden transition-all duration-500"
//                 style={{
//                     opacity: hovered ? 0 : 1,
//                     maxHeight: hovered ? "0px" : "200px",
//                     marginBottom: hovered ? "0px" : "",
//                 }}
//             >
//                 {image && (
//                     <img src={image} alt={title} className="w-full h-44 object-cover rounded-xl" />
//                 )}
//             </div>
//         </div>
//     );
// }


"use client";

import { useEffect, useRef, useState } from "react";
import { FaCode, FaBolt, FaDatabase, FaMicrochip } from "react-icons/fa";
import type { IconType } from "react-icons";
import type { ServiceCardProps } from "@/types/services";

const ICON_MAP: Record<string, IconType> = {
    code:      FaCode,
    bolt:      FaBolt,
    database:  FaDatabase,
    microchip: FaMicrochip,
};

const SERVICE_IMAGES: Record<string, string> = {
    "Full-Stack Web Applications": "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=700&q=80",
    "Real-Time & Secure Systems":  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=700&q=80",
    "Dashboards & Analytics":      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80",
    "Backend & API Engineering":   "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&q=80",
};

export default function ServiceCard({
                                        iconKey,
                                        title,
                                        description,
                                        points,
                                        techs,
                                    }: ServiceCardProps) {
    const [visible, setVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);
    const Icon = ICON_MAP[iconKey];
    const image = SERVICE_IMAGES[title];

    useEffect(() => {
        const el = cardRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setVisible(entry.isIntersecting);
            },
            { threshold: 0.7 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={cardRef}
            className={`relative rounded-2xl overflow-hidden bg-[#0d1b2e] light:bg-slate-50 border border-white/10 light:border-slate-900/10 hover:border-white/20 light:hover:border-slate-900/20 cursor-pointer h-[420px] transition-all duration-700 ease-out ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
            {/* BG image — always rendered, fades in on hover */}
            {image && (
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${image})`,
                        opacity: visible ? 1 : 0,
                        filter: "blur(4px) brightness(0.5)",
                        transform: visible ? "scale(1.06)" : "scale(1.0)",
                        transition: "opacity 0.5s ease, transform 0.5s ease",
                    }}
                />
            )}

            {/* Dark overlay on hover */}
            <div
                className="absolute inset-0 z-[1]"
                style={{
                    background: visible ? "rgba(5,13,26,0.3)" : "transparent",
                    transition: "background 0.5s ease",
                }}
            />

            {/* Text content — fixed at top, always visible */}
            <div className="absolute top-0 left-0 right-0 z-20 p-7 flex flex-col gap-3">
                {Icon && (
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-600/20 light:bg-blue-50 text-blue-400 light:text-blue-600 mb-1">
                        <Icon size={20} />
                    </div>
                )}

                <h3
                    className="text-xl font-bold text-white light:text-slate-900 leading-snug transition-colors duration-300"
                    style={visible ? { color: "#ffffff" } : undefined}
                >
                    {title}
                </h3>

                <p
                    className="text-[#8a9bb5] light:text-slate-600 text-sm leading-relaxed transition-colors duration-300"
                    style={visible ? { color: "#c9d6e8" } : undefined}
                >
                    {description}
                </p>

                {/* Slides in on hover */}
                <div
                    style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(10px)",
                        maxHeight: visible ? "300px" : "0px",
                        overflow: "hidden",
                        transition: "opacity 0.4s ease 0.15s, transform 0.4s ease 0.15s, max-height 0.5s ease",
                    }}
                >
                    <div className="flex flex-col gap-4 mt-2">
                        <div>
                            <p className="text-white/60 text-sm mb-2">What's Included:</p>
                            <ul className="flex flex-col gap-1.5">
                                {points.map((point, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-[#dce8f8] text-sm">
                                        <span className="flex-shrink-0 mt-0.5">•</span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-wrap gap-2 pb-2">
                            {techs.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1.5 rounded-full text-xs font-medium text-white border border-white/35 bg-transparent"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Image thumbnail — absolute at bottom, slides UP and out on hover */}
            <div
                className="absolute bottom-0 left-0 right-0 z-20 px-5 pb-5"
                style={{
                    transform: visible ? "translateY(-100%)" : "translateY(0%)",
                    opacity: visible ? 0 : 1,
                    transition: "transform 0.5s ease, opacity 0.4s ease",
                }}
            >
                {image && (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-44 object-cover rounded-xl"
                    />
                )}
            </div>

        </div>
    );
}