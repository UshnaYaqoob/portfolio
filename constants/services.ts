import {
    FaCode,
    FaDatabase,
    FaBolt,
    FaMicrochip,
} from "react-icons/fa";

import type { ServiceItem } from "@/types/services";

export const SERVICES: ServiceItem[] = [
    {
        icon: FaCode,
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
        icon: FaBolt,
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
        icon: FaDatabase,
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
        icon: FaMicrochip,
        title: "Backend & API Engineering",
        description:
            "Robust backend architectures and APIs built for scalability, data integrity, and long-term maintainability.",
        points: [
            "REST API development",
            "Database modeling & validation",
            "Performance & scalability improvements",
        ],
        techs: [".NET", "Django", "Node", "SQL"],
    },
];