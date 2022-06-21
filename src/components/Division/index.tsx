import React from "react"
import { Container } from './styles';

export interface IDivisionProps {
    color?: string
}

export const Division: React.FC<IDivisionProps> = ({color}) => {
    return (
        <Container
            style={{
                borderColor: color
            }}
        />
    )
}