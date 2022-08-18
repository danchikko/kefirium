import styled from "styled-components"

const CollectionNavbar = () => {
    return (
        <Container>
            <Navbar>
                
            </Navbar>
        </Container>
    )   
}

const Container = styled.div`
    max-width: 1170px; 
    width: 100%;
    margin: 0 auto;
`

const Navbar = styled.div`
    max-width: 1170px;
    width: 100%;
    height: 44px;
    border-bottom: 1px solid #8f9499;
    display: flex;
    justify-content: center;
`

const ButtonTrue = styled.button`
    border-bottom: 2.5px solid #673bb7;
    padding: 10px 15px;
    color: #000000;
`

export default CollectionNavbar