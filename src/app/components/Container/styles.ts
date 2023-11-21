import styled from "styled-components";

interface ContainerProps {
  align?: string;
  justify?: string;
  direction?: string;
  gap?: number;
  padding?: "sm";
}

const padding = {
  sm: 1,
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  gap: ${(props) => props.gap || 0}rem;
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  padding: ${(props) => padding[props.padding ?? "sm"] || 0}rem;
`;
