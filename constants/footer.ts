import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiCode } from "react-icons/fi";
import type { NavLink, SocialLink } from "@/types/footer";

export const BRAND = {
    name: "DevFolio",
    tagline:
        "Building scalable, performance web applications for ambitious teams.",
};

export const QUICK_LINKS: NavLink[] = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
    { icon: FaGithub, label: "GitHub", href: "#" },
    { icon: FaLinkedin, label: "LinkedIn", href: "#" },
    { icon: FaTwitter, label: "Twitter", href: "#" },
];

export const BRAND_ICON = FiCode;