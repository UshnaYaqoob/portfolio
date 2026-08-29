import {
    FaBuilding,
    FaGraduationCap,
    FaBolt,
} from "react-icons/fa6";

import type { Project } from "@/types/projects";

export const PROJECTS: Project[] = [
    {
        layout: "left",
        image: "/lawcurgus-project.jpg",
        badge: "LawCurgus",
        icon: FaBuilding,
        title: "Legal Management Platform",
        description: "A structured, role-based system enabling law firms to manage operations efficiently.",
        points: [
            "Built secure role-based access and permission management",
            "Developed frontend workflows for lawyer schedules, meetings, and case timelines",
            "Collaborated closely with backend teams to improve API consistency and performance",
        ],
        techs: ["React", "TypeScript", "Django", "Python", "MLI"],
    },
    {
        layout: "right",
        image: "/greenounce-project.jpg",
        badge: "Greenounce",
        icon: FaGraduationCap,
        title: "Real-Time School Pickup Queue System",
        description: "Improved parent experience and smoothed school pickup operations.",
        points: [
            "Implemented live notifications using Supabase subscriptions",
            "Built advanced filters and multi-language support",
            "Implemented secure authentication with JWT",
        ],
        techs: ["React", "TypeScript", "Supabase", "SharkNUI"],
    },
    {
        layout: "left",
        image: "/nexuspro-project.jpg",
        badge: "Nexus-Pro",
        icon: FaBolt,
        title: "Laboratory Payment System",
        description: "A stable, scalable payment system for high-volume laboratory transactions.",
        points: [
            "Worked on payment module used globally",
            "Optimized APIs for faster processing",
            "Improved backend reliability and performance",
        ],
        techs: ["React", "TypeScript", ".NET (F# Core)", "SharkNUI"],
    },
    {
        layout: "right",
        image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
        badge: "ShopLink",
        icon: FaBuilding,
        title: "Final Year Project",
        description: "Enabled shop owners to make data-driven decisions.",
        points: [
            "Built centralized multi-branch system",
            "Integrated NLP-based data extraction",
            "Connected Power BI dashboards",
        ],
        techs: ["React", "Node.js", "Express", "MySQL", "Power BI", "NLP"],
    },
];