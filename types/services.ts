import { IconType } from "react-icons";

export interface ServiceItem {
    icon: IconType;
    title: string;
    description: string;
    points: string[];
    techs: string[];
}