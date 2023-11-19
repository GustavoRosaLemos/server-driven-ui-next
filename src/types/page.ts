import { COMPONENT_TYPES, ComponentTypes } from "@/constant";

COMPONENT_TYPES

export interface Page {
    components: PageComponent[];
}

export interface PageComponent {
    type: ComponentTypes;
    value: string;
}