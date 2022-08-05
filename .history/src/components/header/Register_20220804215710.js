import styled from "styled-components"
import { useDispatch } from "react-redux"
import { modalRegister } from "../../store/registerSlice"

const Register = () => {
    const dispatch = useDispatch()
	return (
		<RegisterModal>
			<RegisterButtons
				onClick={() =>
					dispatch(modalSignIn(), dispatch(modalRegister()))
				}
			>
				Войти
			</RegisterButtons>
			<RegisterButtons
				onClick={() =>
					dispatch(modalSignUp(), dispatch(modalRegister()))
				}
			>
				Зарегистрироваться
			</RegisterButtons>
		</RegisterModal>
	)
}

const RegisterModal = styled.div`
	width: 200px;
	height: 115px;
	border-radius: 16px;
	background-color: #fafafa;
	box-shadow: 0 4px 3px 0 rgb(103 59 183 / 10%);
	padding: 25px 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	position: absolute;
	top: 75px;
	right: 105px;
	align-items: flex-start;
`

const RegisterButtons = styled.button`
	font-family: Montserrat-Medium;
	font-size: 14px;
	line-height: 17px;
	color: #673bb7;
	transition: background 0.3s ease;
	background-color: transparent;
	border: none;
	padding: 0;
	font-weight: 700;
	cursor: pointer;
	:hover {
		color: violet;
	}
`

export default Register
