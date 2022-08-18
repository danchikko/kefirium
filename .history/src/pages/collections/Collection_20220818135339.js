import styled from "styled-components"
import Text from "../../components/UI/typography/Text"
import Title from "../../components/UI/typography/Title"


const Collection = ({image, title, user, description}) => {
    return (
        <Container>
            <CollectionHead>
                <HeadBox>
                    <CollectionImage src={image} alt="collectionImage"/>
                    <div>
                        <Title size="40px" color="000000" margin='10px 0'>Азбука NFT</Title>
                        <Text color="#959595" size="16px">Автор <Span>{user}</Span></Text>
                    </div>
                </HeadBox>
                <Actions>

                </Actions>
            </CollectionHead>
        </Container>
    )
}

const Container = styled.div`
    max-width: 1170px;
    width: 100%;
    margin: 0 auto;
`

const CollectionHead = styled.div`
    max-width: 1170px;
    width: 100%;
    height: 160px;
    display: flex;
`

const HeadBox = styled.div`
    width: 460px;
    display: flex;
    align-items: center;
`

const CollectionImage = styled.img`
    width: 160px;
    height: 160px;
    object-fit: cover;
    border-radius: 12px;
    margin-right: 30px;
`

const Span = styled.span`
    color: #e7246a;
    font-weight: 700;
    margin-left: 20px;
`

const Actions = styled.div`
    display: flex;
    grid-gap: 30px;
    gap: 30px;
    width: 210px;
    height: 100%;
`

export default Collection