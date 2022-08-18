import styled from "styled-components"

const Collection = ({img, title, user, description}) => {
    return (
        <Container>
            <CollectionHead>
                <HeadBox /
            </CollectionHead>
        </Container>
    )
}

const Container = styled.div`
    max-width: 1170px;
    width: 100%;
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

export default Collection