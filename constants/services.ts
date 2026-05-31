import type { ServiceItem } from "@/types/services";

export const SERVICES: ServiceItem[] = [
    {
        iconKey: "code",
        title: "Full-Stack Web Applications",
        description: "End-to-end development of scalable web applications, from clean user interfaces to reliable backend systems.",
        points: [
            "React & TypeScript frontends",
            "Backend APIs & databases",
            "Secure authentication & data flow",
        ],
        techs: ["React", "TypeScript", "Node", ".NET", "Supabase"],
    },
    {
        iconKey: "bolt",
        title: "Real-Time & Secure Systems",
        description: "Design and implementation of real-time features with secure access control for modern web platforms.",
        points: [
            "Live queues & notifications",
            "Role-based access control (RBAC)",
            "JWT authentication & RLS",
        ],
        techs: ["Supabase", "JWT", "Subscriptions", "APIs"],
    },
    {
        iconKey: "database",
        title: "Dashboards & Analytics",
        description: "Interactive dashboards and reporting systems that help businesses visualize data and make informed decisions.",
        points: [
            "Power BI dashboards",
            "Sales & performance insights",
            "Data modeling & reporting",
        ],
        techs: ["Power BI", "SQL", "PostgreSQL", "MySQL"],
    },
    {
        iconKey: "microchip",
        title: "Backend & API Engineering",
        description: "Robust backend architectures and APIs built for scalability, data integrity, and long-term maintainability.",
        points: [
            "REST API development",
            "Database modeling & validation",
            "Performance & scalability improvements",
        ],
        techs: [".NET", "Django", "Node", "SQL"],
    },
];