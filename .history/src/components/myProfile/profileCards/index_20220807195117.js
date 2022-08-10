import { Route, Routes } from "react-router-dom"
import styled from "styled-components"
import Own from "./Own"

const ProfileCards = () => {
    return (
        <Container>
            <Routes>
                <Route path="/" element={<Own />} />
            </Routes>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    padding-top: 20px;
    height: 30px;
`

export default ProfileCards