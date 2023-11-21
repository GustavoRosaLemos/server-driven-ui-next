import renderComponents from "@/app/modules/renderComponents";
import { Container as MantineContainer, ContainerProps as MantineContainerProps } from "@mantine/core";

export interface ContainerDataProps extends MantineContainerProps {
    children: any[];
}

export function Container(props: ContainerDataProps) {
    return <MantineContainer {...props}>
        {renderComponents(props.children ?? [])}
    </MantineContainer>
}