import {
    FaBuilding,
    FaMedal,
    FaGraduationCap,
    FaUserTie,
} from "react-icons/fa";

import type { Credential } from "@/types/credentials";

export const CREDENTIALS: Credential[] = [
    {
        company: "BITLogix PVT Ltd",
        role: "Software Engineer",
        icon: FaUserTie,
    },
    {
        company: "FAST-NUCES",
        role: "Dean's List Fall 2023 & Spring 2023",
        icon: FaBuilding,
    },
    {
        company: "FAST-NUCES",
        role: "Bronze Medalist (Fall 2023)",
        icon: FaMedal,
    },
    {
        company: "FAST-NUCES",
        role: "BS Computer Science",
        icon: FaGraduationCap,
    },
];