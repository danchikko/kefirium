import styled from 'styled-components'
import Flex from '../UI/position/Flex'
import Text from '../UI/typography/Text'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { modalSignIn, modalSignUp, onRegister } from '../../store/registerSlice'
import { UserAuth } from '../../context/AuthContext'

const Form = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const {signIn} = UserAuth()
	const dispatch = useDispatch()

	const handleSubmit = async (e) => {
		e.preventDefault()
		setError('')
		try{
			await signIn(email, password)
			dispatch(modalSignIn())
		}catch(e) {
			setError(e.message)
			console.log(e.message)
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<Text color='#000000' weight='700'>
				Email
			</Text>
			<Inputs onChange={(e) => setEmail(e.target.value)} type='email' />
			<Text color='#000000' weight='700'>
				Пароль
			</Text>
			<Inputs onChange={(e) => setPassword(e.target.value)} type='password' />
			<Flex margin='20px 0 30px 0' align='center' justify='space-between'>
				<SpecialText>Забыл пароль</SpecialText>
				<Flex width='285px'>
					<Text color='#8f9499' weight='700'>
						Ещё нет аккаунта?
					</Text>
					<SpecialText
						onClick={() =>
							dispatch(modalSignIn(), dispatch(modalSignUp()))
						}
					>
						Зарегистрироваться
					</SpecialText>
				</Flex>
			</Flex>
			<Flex justify='center'>
				<Button>Войти</Button>
			</Flex>
		</form>
	)
}

const Inputs = styled.input`
	width: 100%;
	height: 62px;
	padding: 21px 28px 21px 30px;
	outline: none;
	box-shadow: 0 4px 3px rgb(103 59 183 / 10%);
	font-size: 16px;
	border: none;
	border-radius: 30px;
	margin-bottom: 15px;
`

const SpecialText = styled.p`
	color: #8f9499;
	font-size: 14px;
	border-bottom: 1px solid #8f9499;
	font-weight: 700;
	cursor: pointer;
`

const Button = styled.button`
	width: 327px;
	height: 60px;
	border-radius: 30px;
	font-size: 16px;
	line-height: 20px;
	margin: 0 auto;
	background-color: #673bb7;
	color: #ffffff;
	font-weight: 700;
	border: none;
	:hover {
		background: #670bb7;
	}
`

export default Form
