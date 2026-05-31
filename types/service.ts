import { IconType } from "react-icons";

export interface ServiceCardProps {
    icon: IconType;
    title: string;
    description: string;
    points: string[];
    techs: string[];
}