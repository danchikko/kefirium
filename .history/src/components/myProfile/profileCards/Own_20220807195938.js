import { Link } from "react-router-dom";
import styled from "styled-components";

const Own = () => {
    return (
        <Container>
            <Link to="/createNFT">
                <CreateNFTButton>
                    Создать NFT
                </CreateNFTButton>
            </Link>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
`

const CreateNFTButton = styled.button`
    width: 158px;
    height: 30px;
    margin: 0 ;
`

export default Own;