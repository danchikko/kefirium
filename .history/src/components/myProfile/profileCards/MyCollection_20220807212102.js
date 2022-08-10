import styled from "styled-components";

const MyCollection = () => {
    return (
        <Container>
            <FlexBlock>
                <InputSearch type="search" />
            </FlexBlock>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
`

const FlexBlock = styled.div`
    display: flex;
`

const Search = styled.div`
    max
`

const InputSearch = styled.input`
    max-width: 700px;
    width: 100%;
    height: 30px;
    background-color: #fafafa;
    padding: 0 0 0 20px;
`

export default MyCollection;