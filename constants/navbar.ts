import type { NavbarConfig } from "@/types/navbar";

export const NAVBAR_CONFIG: NavbarConfig = {
    brand: {
        firstName: "Ushna",
        lastName: "yaqoob",
        href: "#home",
    },

    scrollThreshold: 20,

    links: [
        {
            label: "About Me",
            href: "#about",
        },
        {
            label: "My Projects",
            href: "#projects",
        },
        {
            label: "Services",
            href: "#services",
        },
        {
            label: "Achievements",
            href: "#achievements",
        },
        {
            label: "Contact Me",
            href: "#contact",
        },
    ],
};