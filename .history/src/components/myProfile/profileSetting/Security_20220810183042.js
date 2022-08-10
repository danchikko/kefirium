import styled from "styled-components";
import Title from '../../../components/UI/typography/Title'

const Security = () => {
    return (
        <Container>
            <Title size="25px" color="#000000" >Сменить пароль</Title>
            <Label>Старый пароль</Label>
            <Inputs type="password />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
`

const Label = styled.label`
	font-size: 16px;
	color: #000000;
	font-weight: 700;
`

const Inputs = styled.input`
	width: 100%;
	border-radius: 30px;
	color: #000000;
	padding: 0 10px 0 30px;
	margin: 12px 0 20px 0;
	height: 62px;
	border: none;
	outline: none;
	background-color: #fafafa;
	box-shadow: 0 4px 3px rgb(103 59 183 / 10%);
	font-size: 16px;
`
 
export default Security;