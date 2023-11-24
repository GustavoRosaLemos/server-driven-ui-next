import renderComponents from "@/app/modules/renderComponents";
import { Paper as MantinePaper, PaperProps as MantinePaperProps } from "@mantine/core";

interface PaperProps extends MantinePaperProps {
    children: any[]
}

export function Paper(props: PaperProps) {
    return <MantinePaper {...props}>{renderComponents(props.children ?? [])}</MantinePaper>
}