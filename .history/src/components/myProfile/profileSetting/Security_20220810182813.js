import styled from "styled-components";
import Title from '../../../components/UI/typography/Title'

const Security = () => {
    return (
        <Container>
            <Title size="25px" color="#000000" >Сменить пароль</Title>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    padding-top: 140px;
`
 
export default Security;