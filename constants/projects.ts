import {
    FaBuilding,
    FaGraduationCap,
    FaBolt,
} from "react-icons/fa";

import type { Project } from "@/types/projects";

export const PROJECTS: Project[] = [
    {
        layout: "left",
        image:
            "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800",
        badge: "LawCuria",
        icon: FaBuilding,
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
        layout: "right",
        image:
            "https://images.pexels.com/photos/5632395/pexels-photo-5632395.jpeg?auto=compress&cs=tinysrgb&w=800",
        badge: "Greensource",
        icon: FaGraduationCap,
        title: "Real-Time School Pickup Queue System",
        description:
            "Improved parent experience and smoothed school pickup operations.",
        points: [
            "Implemented live notifications using Supabase subscriptions and triggers",
            "Built advanced filters and multi-language support",
            "Implemented secure authentication with JWT and Row Level Security",
        ],
        techs: ["React", "TypeScript", "Supabase", "SharkNUI"],
    },
    {
        layout: "left",
        image:
            "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
        badge: "Nexus-Pro",
        icon: FaBolt,
        title: "Laboratory Payment System",
        description:
            "A stable, scalable payment system for high-volume laboratory transactions.",
        points: [
            "Worked on payment module used globally",
            "Modeled complex entities (Vat, Payments, Subscriptions)",
            "Optimized APIs for faster processing",
            "Improved backend reliability and performance",
        ],
        techs: ["React", "TypeScript", ".NET (F# Core)", "SharkNUI"],
    },
    {
        layout: "right",
        image:
            "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
        badge: "ShopLink",
        icon: FaBuilding,
        title: "Final Year Project",
        description:
            "Enabled shop owners to make data-driven decisions.",
        points: [
            "Built centralized multi-branch system",
            "Integrated NLP-based data extraction",
            "Connected Power BI dashboards",
        ],
        techs: ["React", "Node.js", "Express", "MySQL", "Power BI", "NLP"],
    },
];