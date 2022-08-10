import styled from 'styled-components'
import Title from '../../../components/UI/typography/Title'

const Security = () => {
	return (
		<Container>
			<Title margin="40px 0 25px 0" size='25px' color='#000000'>
				Сменить пароль
			</Title>
			<Label>Старый пароль</Label>
			<Inputs type='password' />
			<Label>Новый пароль</Label>
			<Inputs type='password' />
			<Label>Новый пароль ещё раз</Label>
            <Inputs type="password" />
            <SaveButton></SaveButton>
		</Container>
	)
}

const Container = styled.div`
    max-width: 470px;
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

const SaveButton = styled.button`
	width: 173px;
	height: 60px;
	font-size: 16px;
	color: #ffffff;
	background-color: #673bb7;
	border-radius: 30px;
	border: none;
	margin-top: 30px;
	font-weight: 700;
`

export default Security
