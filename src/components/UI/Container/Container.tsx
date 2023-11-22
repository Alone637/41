import React from "react"

interface IContainerProps {
    children: React.ReactNode
}

export const Container = ({children}: IContainerProps) => {
    return(
        <Container>
            {children}
        </Container>
    )
}