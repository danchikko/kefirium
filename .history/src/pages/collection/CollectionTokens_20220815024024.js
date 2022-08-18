import styled from "styled-components";

const CollectionTokens = () => {
    return (
        <Container>
            <HeadBox>
                <HeadImage src=""  alt="imageToken"/>
            </HeadBox>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
`

const HeadBox = styled.div`
    max-width: 470px;
    width: 100%;
    margin: 0 30px 0 0;
`

const HeadImage = styled.img`
    width: 100%;
    height: 470px;
    border-radius: 12px;
    object-fit: fill;
`

export default CollectionTokens;