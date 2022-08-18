import styled from 'styled-components'
import Flex from '../UI/position/Flex'
import Text from '../UI/typography/Text'
import Title from '../UI/typography/Title'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { modalSignUp } from '../../store/optionsSlice'
import { agree } from '../../store/registerSlice'
import { useRef } from 'react'

const FormPhysic = () => {
	const dispatch = useDispatch()
	const onCheckBoxHandler = () => {
		dispatch(agree())
	}
	const [email, setEmail]

	return (
		<Form>
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
			<Inputs placeholder='Введите свой Email' type='email' />
			<Text color='#000000' weight='700'>
				Пароль*
			</Text>
			<Inputs placeholder='Пароль' type='password' />
			<Flex margin='0 0 40px 0' align='center'>
				<InputCheck type='checkbox' onChange={onCheckBoxHandler} />
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
	}
`

export default FormPhysic