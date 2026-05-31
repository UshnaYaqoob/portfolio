import { IconType } from "react-icons";

export type ProjectLayout = "left" | "right";

export interface Project {
    layout: ProjectLayout;
    image: string;
    badge: string;
    title: string;
    description: string;
    points: string[];
    techs: string[];
    icon?: IconType;
}