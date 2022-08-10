import { Link } from "react-router-dom";
import styled from "styled-components";

const Own = () => {
    return (
        <Container>
            <Link to="/create"></Link>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
`

export default Own;