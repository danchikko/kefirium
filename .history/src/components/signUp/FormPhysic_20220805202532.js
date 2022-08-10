import styled from 'styled-components'
import Flex from '../UI/position/Flex'
import Text from '../UI/typography/Text'
import Title from '../UI/typography/Title'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { modalSignUp } from '../../store/registerSlice'
import { useEffect, useState } from 'react'
import { UserAuth } from '../../context/AuthContext'
import { validEmailRegex } from '../../utils/helpers/constants'
import {BiCheck} from 'react-icons/bi'  

const FormPhysic = () => {
	const dispatch = useDispatch()
	const { createUser } = UserAuth()
	const [agree, setAgree] = useState(false)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [emailDirty, setEmailDirty] = useState(false)
	const [passwordDirty, setPasswordDirty] = useState(false)
	const [emailError, setEmailError] = useState('Поле email обязательно.')
	const [passwordError, setPasswordError] = useState('Поле password обязательно.')
	const [formValid, setFormValid] = useState(false)
	cons

	useEffect(() => {
		if (emailError && passwordError && agree===false) {
			setFormValid(false)
		}else {
			setFormValid(true)
		}
	}, [emailError, passwordError, agree])

	const agreeHandler = () => {
		setAgree((prevState) => !prevState)
	}

	const emailHandler = (e) => {
		setEmail(e.target.value)
		if(!validEmailRegex.test(String(email).toLowerCase())) {
			setEmailError('Некорректный email.')
		}else{
			setEmailError('')
		}
	}

	const passwordHandler = (e) => {
		setPassword(e.target.value)
		if (e.target.value.length < 8 ) {
			setPasswordError('Поле password должно быть не менее 8 символов(а).')
			if(!e.target.value) {
				setPasswordError('Поле password обязательно.')
			}
		}else {
			setPasswordError('')
		}
	}

	const blurHandler = (e) => {
		// eslint-disable-next-line default-case
		switch (e.target.name) {
			case 'email':
				setEmailDirty(true)
				break
				case 'password' : 
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
			<Inputs type='text' placeholder='Введите никнейм' />
			<Text color='#000000' weight='700'>
				Email*
			</Text>
			{(emailDirty && emailError) && <Text color="red" weight="700">{emailError}</Text>}
			<Inputs
				onChange={(e) => emailHandler(e)}
				value={email}
				onBlur={(e) => blurHandler(e)}
				name='email'
				type="text"
				placeholder='Введите свой Email'
			/>
			<Text color='#000000' weight='700'>
				Пароль*
			</Text>
			{(passwordDirty && passwordError) && <Text color="red" weight="700">{passwordError}</Text>}
			<Inputs
				onChange={(e) => passwordHandler(e)}
				value={password}
				onBlur={(e) => blurHandler(e)}
				name='password'
				type='password'
				placeholder='Пароль'
			/>
			{agree ? '' : <Text color='red'>Поле agreement обязательно.</Text>}
			<Flex margin='0 0 40px 0' align='center'>
				<Agree onClick={agreeHandler} style={{background: agree ? '#673bb7' : '#ffffff'}}>
					<Check />
				</Agree>
				<Title margin='0 7px' size='15px' color='#8f9499'>
					Согласен с условиями
				</Title>
				<Links onClick={() => dispatch(modalSignUp())} to='/userOffer'>
					договора оферты пользователя
				</Links>
			</Flex>
			<Flex justify='center'>
				<Button disabled={!formValid} type="submit" >
					Зарегистрироваться
				</Button>
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

const Agree = styled.div`
	width: 16px;
	height: 16px;
	border: 2px solid #8f9499;
	display: flex;
	align-items: center;
	justify-content: center;
`

const Check = styled(BiCheck)`
	color: #ffffff;
	width: 18px;
	height: 18px;
`

export default FormPhysic
