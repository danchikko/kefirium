import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Flex from '../UI/position/Flex'
import Title from '../UI/typography/Title'
import { RiCloseCircleLine } from 'react-icons/ri'
import question from '../../aseets/svg/question.svg'
import Navs from './Navs'
import FormPhysic from './FormPhysic'
import FormJur from './FormJur'
import Text from '../UI/typography/Text'
import { modalSignIn, modalSignUp } from '../../store/registerSlice'

const SignUp = () => {
	const { physicFace, jurFace } = useSelector((state) => state.register)
	const dispatch = useDispatch()

	return (
		<ModalContainer onClick={() => dispatch(modalSignUp())}>
			<Content
				onClick={(e) => e.stopPropagation()}
			>
				<Flex justify='space-between' align='center'>
					<Title color='#673bb7' size='24px'>
						Регистрация
					</Title>
					<Close onClick={() => dispatch(modalSignUp())} />
				</Flex>
				<Flex align='center'>
					<Navs physicFace={physicFace} jurFace={jurFace} />
					<img
						style={{ marginLeft: '20px' }}
						src={question}
						alt='logo'
					/>
				</Flex>
				{physicFace ? <FormPhysic /> : <FormJur />}
				<Flex justify='center' align='center'>
					<Text weight='700' color='#8f9499'>
						Уже есть аккаунт?
					</Text>
					<SpecialText
						onClick={() =>
							dispatch(modalSignUp(), dispatch(modalSignIn()))
						}
					>
						Войти
					</SpecialText>
				</Flex>
			</Content>
		</ModalContainer>
	)
}

const ModalContainer = styled.div`
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.3);
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow-y: auto;
	overflow-x: hidden;
	padding-top: 460px;
	padding-bottom: 80px;
	z-index: var(--vs-zindex-2);
`

const Content = styled.div`
	padding: 30px 30px 50px 40px;
	border-radius: 12px;
	background-color: #fafafa;
	max-width: 560px;
	width: 100%;
	min-height: min-content;
	max-height: max-content;
`

const Close = styled(RiCloseCircleLine)`
	color: #8f9499;
	width: 32px;
	height: 32px;
	cursor: pointer;
`

const SpecialText = styled.p`
	font-size: 14px;
	color: #8f9499;
	border-bottom: 1px solid #8f9499;
	cursor: pointer;
	font-weight: 700;
`

export default SignUp
