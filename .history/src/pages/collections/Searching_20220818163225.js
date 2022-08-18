import styled from "styled-components";
import

const Searching = () => {
    return (
        <Container>
            <Search>
                <SearchInput />
            </Search>
        </Container>
    )
}

const Container = styled.div`
    max-width: 1170px;
    width: 100%;
`

const Search = styled.div`
    max-width: 867px;
    width: 100%;
    display: flex;
    border-radius: 12px;
    box-shadow: 0 4px 3px rgb(103 59 183 / 10%);
    background: #f4f4f4;
    height: 30px;
`

const SearchInput = styled.input`
    background-color: #f4f4f4;
    border: none;
    outline: none;
`

export default Searching;