import styled from "styled-components"
import MainPage from "./MainPage"

const Main = () => {
    return (
        <Container>
            <MainPage />
        </Container>
    )
}

const Container = styled.div`
    max-width: 1350px;
    width: 100%;
    margin: 0 auto;
`

export default Main