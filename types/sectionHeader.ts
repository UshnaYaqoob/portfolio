import { ReactNode } from "react";

export interface SectionHeaderProps {
    overline: string;
    title: ReactNode;
    subtitle?: string;
    center?: boolean;
}