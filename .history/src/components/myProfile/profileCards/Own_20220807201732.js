import { Link } from "react-router-dom";
import styled from "styled-components";

const Own = () => {
    return (
        <Container>
            <Link to="/createNFT">
                <CreateNFTButton>
                   + Создать NFT
                </CreateNFTButton>
            </Link>
            <EmptyText>Создайте или купите свой первый токен, и он отобразится в этом разделе.</EmptyText>
            <CardImage src="" />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
`

const CreateNFTButton = styled.button`
    width: 158px;
    height: 30px;
    margin-left: 20px;
    background-color: #673bb7;
    border-radius: 16px;
    font-size: 14px;
    font-weight: 600;
    color: white;
    border: none;
`

const EmptyText = styled.p`
    font-size: 16px;
    color: #000000;
    margin: 50px 0 70px 0;
`

const CardImage = styled.img`
    width: 100%;
    height: 300px;
`

export default Own;