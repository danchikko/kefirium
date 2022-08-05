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

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [emailDirty, setEmailDirty] = useState(false)
	const [passwordDirty, setPasswordDirty] = useState(false)
	const [emailError, setEmailError] = useState('Поле email обязательно.')
	const [passwordError, setPasswordError] = useState(
		'Поле password обязательно.',
	)
	const { createUser } = UserAuth()

	const blurHandler = (e) => {
		switch (e.target.name){
			case 'email':
				setEmailDirty(true)
				break
			case 'password':
				setPasswordDirty(true)
				break
		}
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
			{emailDirty && emailError && (
				<Text weight='700' color='red'>
					{emailError}
				</Text>
			)}
			<Inputs
				onBlur={(e) => blurHandler(e)}
				onChange={(e) => setEmail(e.target.value)}
				placeholder='Введите свой Email'
				type='email'
			/>
			<Text color='#000000' weight='700'>
				Пароль*
			</Text>
			{passwordError && passw}
			<Inputs
				onChange={(e) => setPassword(e.target.value)}
				placeholder='Пароль'
				type='password'
			/>
			<Flex margin='0 0 40px 0' align='center'>
				<InputCheck type='checkbox' />
				<Title margin='0 7px' size='15px' color='#8f9499'>
					Согласен с условиями
				</Title>
				<Links onClick={() => dispatch(modalSignUp())} to='/userOffer'>
					договора оферты пользователя
				</Links>
			</Flex>
			<Flex justify='center'>
				<Button>Зарегистрироваться</Button>
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
