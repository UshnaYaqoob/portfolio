import { FaLightbulb, FaCode, FaRocket, FaPenNib, FaVial } from "react-icons/fa6";
import type { ProcessStepItem } from "@/types/process";

export const PRIMARY_STEPS: ProcessStepItem[] = [
    {
        icon: FaLightbulb,
        title: "Understand Requirements",
        description: "Listen to business goals, users, and technical needs.",
    },
    {
        icon: FaCode,
        title: "Develop & Integrate",
        description: "Clean, scalable code with secure authentication and APIs.",
    },
    {
        icon: FaRocket,
        title: "Deliver & Support",
        description: "Final delivery with documentation and long-term support.",
    },
];

export const SECONDARY_STEPS: ProcessStepItem[] = [
    {
        icon: FaPenNib,
        title: "Plan & Design",
        description: "Architecture, UI decisions, and system design.",
    },
    {
        icon: FaVial,
        title: "Test & Refine",
        description: "Debugging, validation, and performance tuning.",
    },
];