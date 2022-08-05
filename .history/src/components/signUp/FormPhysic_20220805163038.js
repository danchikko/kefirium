import styled from 'styled-components'
import Flex from '../UI/position/Flex'
import Text from '../UI/typography/Text'
import Title from '../UI/typography/Title'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { modalSignUp } from '../../store/registerSlice'
import { useState } from 'react'
import { UserAuth } from '../../context/AuthContext'

const FormPhysic = () => {
	const dispatch = useDispatch()
	const { createUser } = UserAuth()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [agree, setAgree] =  useState(false)
	const [emailIsVaid, setEmailIsValid] = useState(false)
	const [passwordIsValid, setPasswordIsValid] = useState(false)
	const [formInValid, setFormInValid] = useState(true)

	const agreeHandler = () => {
		setAgree((prevState) => !prevState)
	}

	const emailHandler = (e) => {
		setEmail(e.target.value)
		if(email.length > 0) {
			setEmailIsValid(true)
		}else{
			setEmailIsValid(false)
		}
	}

	const passwordHandler = (e) => {
		setPassword(e.target.value)
		if(password.length > 0) {
			setPasswordIsValid(true) 
		} else{
			setPasswordIsValid(false)
		}
	}

	if(passwordIsValid === true && emailIsVaid === true) {
		setFormInValid(true)
	}else{
		setFormInValid(false)
	}


	const handleSubmit = async (e) => {
		e.preventDefault()
		
		try {
			await createUser(email, password)
			dispatch(modalSignUp())
		} catch (e) {
			console.log(e.message)
		}
	}

	return (
		<Form onSubmit={handleSubmit}>
			<Text color='#000000' weight='700'>
				Фамилия*
			</Text>
			<Inputs placeholder='Введите фамилию' type='text' />
			<Text color='#000000' weight='700'>
				Имя*
			</Text>
			<Inputs placeholder='Введите имя' type='text' />
			<Text color='#000000' weight='700'>
				Никнейм*
			</Text>
			<Inputs placeholder='Введите никнейм' type='text' />
			<Text color='#000000' weight='700'>
				Email*
			</Text>
			{emailIsVaid ? '' : <Text></Text>}
			<Inputs
				name='email'
				onChange={emailHandler}
				placeholder='Введите свой Email'
				type='email'
			/>
			<Text color='#000000' weight='700'>
				Пароль*
			</Text>
			<Inputs
				name='password'
				onChange={passwordHandler}
				placeholder='Пароль'
				type='password'
			/>
			<Flex margin='0 0 40px 0' align='center'>
				<InputCheck onChange={agreeHandler} type='checkbox' />
				<Title margin='0 7px' size='15px' color='#8f9499'>
					Согласен с условиями
				</Title>
				<Links onClick={() => dispatch(modalSignUp())} to='/userOffer'>
					договора оферты пользователя
				</Links>
			</Flex>
			<Flex justify='center'>
				<Button type='submit' disabled={!formInValid}>Зарегистрироваться</Button>
			</Flex>
		</Form>
	)
}

const Form = styled.form`
	width: 100%;
`

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

const InputCheck = styled.input`
	width: 16px;
	height: 16px;
`

const Links = styled(Link)`
	color: #8f9499;
	font-size: 15px;
	font-weight: 700;
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
		opacity: 0.7;
	}
	:active {
		background: #676bb7;
	}
`

export default FormPhysic
