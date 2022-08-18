import { useState } from "react"
import styled from "styled-components"

const CollectionNavbar = () => {
    const [tokens, setTokens] = useState(true)
    return (
        <Container>
            <Navbar>
                {tokens ? <ButtonTrue>Токены</ButtonTrue> : <ButtonFalse>Токены</ButtonFalse>}
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

const ButtonTrue = styled.div`
    border-bottom: 3px solid #673bb7;
    padding: 10px 15px;
    color: #000000;
    cursor: pointer;
    background-color: #ffffff;
    font-weight: 700;
    marg
`

const ButtonFalse = styled.div`
    padding: 10px 15px;
    color: #8f9499;
    cursor: pointer;
    background-color: #ffffff;
    font-weight: 700;
`

export default CollectionNavbar