import { ComponentMapType } from "@/types";
import { Container } from "../components/Container";
import { Text } from "../components/Text";

export enum SignalValuePairKey {
    Content = "CONTENT",
    Icon = "ICON",
    Primary = "PRIMARY",
}


export enum SignalType {
    Error = "ERROR",
    Title = "TITLE",
    Toggle = "TOGGLE",
    Update = "UPDATE",
}

export const COMPONENT_MAP: ComponentMapType = {
    Container,
    Text,
}

