import React, { ReactNode } from "react";

interface Props{
    children: ReactNode
}

export const Button: React.FC<Props> = ({
    children
}) => {
    return(
        <button>{children}</button>
    )
}