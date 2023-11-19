import ButtonComponent from "@/app/components/button";
import InputComponent from "@/app/components/input";

export const COMPONENT_TYPES = [
    {
        type: "input",
        component: InputComponent
    },
    {
        type: "button",
        component: ButtonComponent
    }
]

export type ComponentTypes = typeof COMPONENT_TYPES[number]['type'];