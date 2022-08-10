import styled from "styled-components";
import Title from "../../UI/typography/Title";
import Text from "../../UI/typography/Text";

const Payments = () => {
    return (
        <Container>
            <Title margin="40px 0 15px 0" size="25px" color="#000000">Баланс</Title>
            <Text>- После продажи вами токенов вы сможете вывести средства на свою карту</Text>
        </Container>
    )
}

const Container = styled.div`
    max-width: 1170px;
    width: 100%;
`

export default Payments;