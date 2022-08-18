import styled from "styled-components";
import CollectionTokens from "./CollectionTokens";

const Collection = () => {
    return (
        <Container>
            <CollectionTokens />
        </Container>
    )
}

const Container = styled.div`
    max-width: 1170px;
    width: 100%;
    margin: 0 auto;
    padding-top: 130px;
`

export default Collection