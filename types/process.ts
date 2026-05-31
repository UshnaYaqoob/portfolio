import { IconType } from "react-icons";

export interface ProcessStepItem {
    icon: IconType;
    title: string;
    description: string;
}

export interface ProcessStepProps {
    number: number;
    title: string;
    description: string;
    isLast?: boolean;
}