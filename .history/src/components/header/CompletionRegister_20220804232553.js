import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'
import { useDispatch } from 'react-redux';
import { modalRegister } from '../../store/registerSlice';

const CompletionRegister = () => {
    const { logout} = UserAuth();
    const dispatch = useDispatch()

    const handleLogout = async () => {
        try{
            await logout()
            dispatch(modalRegister()))
        }catch(e) {
            console.log(e.message)
        }
    }
   
	return (
		<CompletionModal>
			<Links to='/'>Мой профиль</Links>
			<Links to='/'>Создать коллекцию</Links>
			<Close onClick={handleLogout}>Выйти</Close>
		</CompletionModal>
	)
}

const CompletionModal = styled.div`
	width: 200px;
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

const Links = styled(Link)`
	text-decoration: none;
	color: #673bb7;
	font-size: 14px;
	line-height: 17px;
	margin: 10px 0;
	font-weight: 700;
	:hover {
		color: #670bb7;
	}
`

const Close = styled.p`
	font-size: 14px;
	font-weight: 700;
	color: #673bb7;
	margin: 10px 0;
	cursor: pointer;
	:hover {
		color: #670bb7;
	}
`

export default CompletionRegister
