import { Text as MantineText, TextProps as MantineTextProps } from '@mantine/core';

interface TextProps extends MantineTextProps {
    text: string;
}

export function Text(props: TextProps) {
    return <MantineText {...props}>
        {props.text}
    </MantineText>
}