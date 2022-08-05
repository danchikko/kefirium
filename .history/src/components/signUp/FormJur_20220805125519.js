import styled from 'styled-components'
import Flex from '../UI/position/Flex'
import Text from '../UI/typography/Text'
import Title from '../UI/typography/Title'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'

const FormJur = () => {
    const dispatch = useDispatch()


	return (
		<form onSubmit={handleSubmit}>
			<Text weight="700" color='#000000'>
				Название организации*
			</Text>
			<Inputs type='text' />
			<Text weight="700" color='#000000'>
				Email*
			</Text>
			<Inputs type='email' />
			<Text weight="700" color='#000000'>
				Пароль*
			</Text>
			<Inputs type='password' />
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

export default FormJur
