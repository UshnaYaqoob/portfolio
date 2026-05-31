export interface ServiceItem {
    iconKey: "code" | "bolt" | "database" | "microchip";
    title: string;
    description: string;
    points: string[];
    techs: string[];
}

export type ServiceCardProps = ServiceItem;