import { Link } from "react-router-dom";
import styled from "styled-components";

const Own = () => {
    return (
        <Container>
            <Link to="/createNFT">
                <CreateNFTButton></CreateNFTButton>
            </Link>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
`

const CreateNFTButton = styled.button`

`

export default Own;