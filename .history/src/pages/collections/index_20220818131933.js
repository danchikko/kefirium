import { useState } from "react"
import { useEffect } from "react"
import styled from "styled-components"

const Collections = () => {
    const [, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/Categories')
        .then((responce) => )
    }, [])
    return (
        <Container>
            <BackgroundBlock />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    padding-top: 80px;
`

const BackgroundBlock = styled.div`
    width: 100%;
    height: 250px;
`

export default Collections