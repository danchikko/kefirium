import styled from "styled-components";
import Title from "../../UI/typography/Title";

const Payments = () => {
    return (
        <Container>
            <Title>Баланс</Title>
        </Container>
    )
}

const Container = styled.div`
    max-width: 1170px;
    width: 100%;
`

export default Payments;