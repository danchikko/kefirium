import styled from 'styled-components'
import Flex from '../UI/position/Flex'
import Text from '../UI/typography/Text'
import { useDispatch } from 'react-redux'
import { useRef } from 'react'
import { modalSignIn, modalSignUp, onRegister } from '../../store/registerSlice'

const Form = () => {
	const dispatch = useDispatch()
	
	const emailRef = useRef()
	const passwordRef = useRef()

	return (
		<form onSubmit={}>
			<Text color='#000000' weight='700'>
				Email
			</Text>
			<Inputs ref={emailRef} type='email' />
			<Text color='#000000' weight='700'>
				Пароль
			</Text>
			<Inputs ref={passwordRef} type='password' />
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
				<Button>Зарегистрироваться</Button>
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
