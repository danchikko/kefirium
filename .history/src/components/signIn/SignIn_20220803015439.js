import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { modalSignIn } from '../../store/optionsSlice'
import Flex from '../UI/position/Flex'
import Title from '../UI/typography/Title'
import {IoCloseCircleOutline} from 'react-icons/io5'
import Form from './Form'

const SignIn = () => {
	const dispatch = useDispatch()
	return (
		<ContainerModal onClick={() => dispatch(modalSignIn())}>
			<Content onClick={(e) => e.stopPropagation()}>
				<Flex margin="0 0 30px 0" align="center" justify="space-between">
					<Title size="22px" color="#673bb7">Войти</Title>
					<Close onClick={() => dispatch(modalSignIn())} />
				</Flex>
				<Form />
			</Content>
		</ContainerModal>
	)
}

const ContainerModal = styled.div`
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
	padding-top: 80px;
	padding-bottom: 80px;
	z-index: var(--vs-zindex-2);
`

const Content = styled.div`
	padding: 30px 30px 50px 40px;
	border-radius: 20px;
	background-color: #fafafa;
	max-width: 560px;
	width: 100%;
	min-height: min-content;
	max-height: max-content;
`

const Close = styled(IoCloseCircleOutline)`
	color: #8f9499;
	width: 38px;
	height: 38px;
    cursor: pointer;
`

export default SignIn
