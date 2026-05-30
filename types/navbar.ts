export interface NavLink {
    label: string;
    href: string;
}

export interface NavbarConfig {
    brand: {
        firstName: string;
        lastName: string;
        href: string;
    };
    scrollThreshold: number;
    links: NavLink[];
}