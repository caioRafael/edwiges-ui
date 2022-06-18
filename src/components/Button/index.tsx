import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { Container } from "./styles";

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode
    text: string,
    disable?: boolean,
    width?: number | string
    height?: number | string
    background?: string,
    color?: string 
}

export const Button: React.FC<Props> = ({
    children,
    text,
    disable = false,
    width,
    height,
    background,
    color,
    ...props
}) => {
    return(
        <Container 
            {...props}
            style={{
                width: width,
                height: height,
                background: background,
                color: color,
                ...props.style
            }}
            disabled={disable}
        >
            {children} {text}
        </Container>
    )
}