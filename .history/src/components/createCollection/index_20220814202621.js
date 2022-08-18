import styled from "styled-components";
import NewCollection from "./NewCollection";

const CreateNewCollection = () => {
    return (
        <Container>
            <NewCollection />
        </Container>
    )
}

const Container = styled.div`
    max-width: 1270px;
    width: 100%;
    padding: 100px 50px 100px;
`

export default CreateNewCollection;