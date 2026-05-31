import { IconType } from "react-icons";

export interface HeroCTA {
    primary: {
        label: string;
        href: string;
        icon?: IconType;
    };
    secondary: {
        label: string;
        href: string;
    };
}

export interface HeroContent {
    headline: {
        line1: string;
        highlight: string;
        line2: string;
    };
    bio: string;
}