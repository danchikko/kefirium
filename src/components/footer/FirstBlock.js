import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../aseets/svg/logo.svg'

const FirstBlock = () => {
	return (
		<Container>
			<Logo src={logo} alt='logo' />
			<Links to='/'>О NFT</Links>
			<Links to='/'>Оферта пользователя</Links>
			<Links to='/'>Правила обработки платежей</Links>
			<Links to='/'>Правила использования сервиса</Links>
			<Links to='/'>Информация об оплате</Links>
			<Links to='/'>FAQ</Links>
		</Container>
	)
}

const Container = styled.div`
	max-width: 1270px;
	width: 100%;
	height: 130px;
	display: flex;
	justify-content: center;
	gap: 40px;
	align-items: center;
	margin: 0 auto;
`

const Logo = styled.img`
	width: 172px;
	height: 60px;
`

const Links = styled(Link)`
	text-decoration: none;
	color: #ffffff;
	font-size: 14px;
    font-weight: 500;
`

export default FirstBlock
