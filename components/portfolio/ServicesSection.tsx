/**
 * ServicesSection — "What I Help You Build"
 *
 * 2x2 grid layout with larger bordered cards.
 * Each card has points and tech tags.
 */

import {
    Code2,
    Database,
    Zap,
    Cpu,
} from "lucide-react";
import SectionHeader from "./SectionHeader";
import ServiceCard from "./ServiceCard";

const SERVICES = [
    {
        icon: Code2,
        title: "Full-Stack Web Applications",
        description:
            "End-to-end development of scalable web applications, from clean user interfaces to reliable backend systems.",
        points: [
            "React & TypeScript frontends",
            "Backend APIs & databases",
            "Secure authentication & data flow",
        ],
        techs: ["React", "TypeScript", "Node", ".NET", "Supabase"],
    },
    {
        icon: Zap,
        title: "Real-Time & Secure Systems",
        description:
            "Design and implementation of real-time features with secure access control for modern web platforms.",
        points: [
            "Live queues & notifications",
            "Role-based access control (RBAC)",
            "JWT authentication & RLS",
        ],
        techs: ["Supabase", "JWT", "Subscriptions", "APIs"],
    },
    {
        icon: Database,
        title: "Dashboards & Analytics",
        description:
            "Interactive dashboards and reporting systems that help businesses visualize data and make informed decisions.",
        points: [
            "Power BI dashboards",
            "Sales & performance insights",
            "Data modeling & reporting",
        ],
        techs: ["Power BI", "SQL", "PostgreSQL", "MySQL"],
    },
    {
        icon: Cpu,
        title: "Backend & API Engineering",
        description:
            "Robust backend architectures and APIs built for scalability, data integrity, and long-term maintainability.",
        points: [
            "REST API development",
            "Database modeling & validation",
            "Performance & scalability improvements",
        ],
        techs: [".NET (F# Core)", "Django", "Node", "SQL"],
    },
];

export default function ServicesSection() {
    return (
        <section id="services" className="py-24 px-6 bg-[#050b18] border-t border-white/5">
            <div className="max-w-6xl mx-auto">

                <div className="mb-14 border-l-2 border-dashed border-blue-500/30 pl-6">
                    <SectionHeader
                        overline="Services"
                        title="What I Help You Build"
                        subtitle="I design and develop production-ready web applications from scalable frontends to secure backends with strong focus on performance, reliability, and real-world requirements."
                    />
                </div>

                {/* 2x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {SERVICES.map((service) => (
                        <ServiceCard key={service.title} {...service} />
                    ))}
                </div>

                {/* CTA at bottom */}
                <div className="flex justify-center mt-12">
                    <a
                        href="#contact"
                        className="
              inline-flex items-center gap-2 px-6 py-3 rounded-full
              text-sm font-semibold text-white
              bg-blue-600 hover:bg-blue-500
              transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/30
            "
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </section>
    );
}
