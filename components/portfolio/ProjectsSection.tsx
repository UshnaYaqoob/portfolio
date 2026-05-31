/**
 * ProjectsSection — "Projects I've Built"
 *
 * Alternating left/right layout with project cards.
 * Each project gets its own row in a vertical stack.
 */

import { GraduationCap, Building2, Zap } from "lucide-react";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";

const PROJECTS = [
    {
        layout: "left" as const,
        image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800",
        badge: "LawCuria",
        icon: Building2,
        title: "Legal Management Platform",
        description:
            "A structured, role-based system enabling law firms to manage operations efficiently.",
        points: [
            "Built secure role-based access and permission management",
            "Developed frontend workflows for lawyer schedules, meetings, and case timelines",
            "Collaborated closely with backend teams to improve API consistency and performance",
        ],
        techs: ["React", "TypeScript", "Django", "Python", "MLI"],
    },
    {
        layout: "right" as const,
        image: "https://images.pexels.com/photos/5632395/pexels-photo-5632395.jpeg?auto=compress&cs=tinysrgb&w=800",
        badge: "Greensource",
        icon: GraduationCap,
        title: "Real-Time School Pickup Queue System",
        description:
            "Improved parent experience and smoothed another school pickup operations.",
        points: [
            "Implemented live notifications using Supabase subscriptions and triggers",
            "Built advanced filters and multi-language (Hindi) support",
            "Implemented secure authentication with JWT and Row Level Security (RLS)",
        ],
        techs: ["React", "TypeScript", "Supabase", "SharkNUI"],
    },
    {
        layout: "left" as const,
        image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
        badge: "Nexus-Pro",
        icon: Zap,
        title: "Laboratory Payment System",
        description:
            "A stable, scalable payment system for high-volume laboratory transactions.",
        points: [
            "Worked on the payment module used by laboratories globally",
            "Modeled complex entities (Vat, WeakSub, Payments)",
            "Built and optimized APIs for faster payments and visit processing",
            "Improved backend reliability by resolving F# initialization issues",
        ],
        techs: ["React", "TypeScript", ".NET (F# Core)", "SharkNUI"],
    },
    {
        layout: "right" as const,
        image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
        badge: "ShopLink",
        icon: Building2,
        title: "Final Year Project",
        description:
            "Enabled shop owners to make informed, data-driven decisions.",
        points: [
            "Built a centralized platform for managing multiple shop branches",
            "Integrated NLP-based CV parsing to extract accident skills",
            "Connected Power BI dashboards for sales trends and profitability insights",
        ],
        techs: ["React", "Node.js", "Express", "MySQL", "Power BI", "NLP"],
    },
];

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-24 px-6 bg-[#050b18]">
            <div className="max-w-6xl mx-auto">

                {/* Section header */}
                <div className="mb-16 border-l-2 border-dashed border-blue-500/30 pl-6">
                    <SectionHeader
                        overline="My Projects"
                        title="Projects I've <span class='text-blue-400'>Built</span>"
                        subtitle="Below are some of the systems I've worked on, focusing on functionality, performance, and real-world impact."
                    />
                </div>

                {/* Projects stack */}
                <div className="space-y-12 md:space-y-16">
                    {PROJECTS.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
