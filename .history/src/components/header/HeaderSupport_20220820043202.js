import styled from 'styled-components'
import { FiChevronRight } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { closeCategoriesModal, closeSupportModal, modalSupport } from '../../store/optionsSlice'
import { Link } from 'react-router-dom'

const HeaderSupport = () => {
	const modal = useSelector((state) => state.options.supportModal)
	const dispatch = useDispatch()
	return (
		<div>
			<Topics
				onClick={() =>
					dispatch(modalSupport(), dispatch(closeCategoriesModal()))
				}
			>
				Поддержка <NavRight />
			</Topics>
			{modal ? (
				<ListSupports onClick={() => dispatch(closeSupportModal())}>
					<Links to='/aboutNFT'>O NFT</Links>
					<Links to=''>Оферта пользователя</Links>
					<Links to='/userOffer/paymentRules'>Правила обработки платежей</Links>
					<Links to='/'>Правила использования сервиса</Links>
					<Links to='/'>Информация об оплате</Links>
					<Links to='/'>FAQ</Links>
				</ListSupports>
			) : (
				''
			)}
		</div>
	)
}

const Topics = styled.p`
	font-size: 15px;
	color: #8f9499;
	font-weight: 700;
	display: flex;
	align-items: center;
	cursor: pointer;
`

const NavRight = styled(FiChevronRight)`
	margin-left: 5px;
	width: 14px;
	height: 14px;
`

const ListSupports = styled.div`
	width: 170px;
	height: 360px;
	background: #f4f4f4;
	border-radius: 16px;
	box-shadow: 0 4px 3px 0 rgb(103 59 183 / 10%);
	position: absolute;
	top: 75px;
	right: 400px;
	padding: 20px 25px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`

const Links = styled(Link)`
	text-decoration: none;
	font-size: 14px;
	color: rgb(103, 59, 183);
	:hover {
		color: #e7246a;
	}
`

export default HeaderSupport
