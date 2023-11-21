import { COMPONENT_MAP } from "@/app/constants"

export default function renderComponents(children: any[], extraProps?: any) {
    const elements = children.map((element, index) => {
        console.log("element", extraProps?.[element.__typename])
        const Component = COMPONENT_MAP[element.__typename];

        if (!Component) return <></>;

        return <Component key={index} {...element} />;
    })

    if (!elements.length) return <></>;

    return elements;
}