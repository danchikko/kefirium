import styled from "styled-components";
import ActivityHistory from "./ActivityHistory";
import CollectionTokens from "./CollectionTokens";

const CollectionToken = () => {
    return (
        <Container>
            <CollectionTokens />
            <ActivityHistory />
        </Container>
    )
}

const Container = styled.div`
    max-width: 1170px;
    width: 100%;
    margin: 0 auto;
    padding-top: 140px;
`

export default Collection