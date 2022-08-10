import styled from "styled-components";

const MyTokens = () => {
    return (
        <Container>
             <Link to="/createNFT">
                <CreateNFTButton>
                   + Создать NFT
                </CreateNFTButton>
            </Link>
        </Container>
    )
}

const Container = styled.div`

`

export default MyTokens;