import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const SettingNavbar = () => {
	const { setting, safety, withdrawals } = useSelector(
		(state) => state.profile,
	)
	return (
		<Container>
			{setting ? (
				<ActiveLinks to='/profile/settings/profileSettings'>
					Настройки профиля
				</ActiveLinks>
			) : (
				<Links to='/profile/settings/profileSettings'>
					Настройки профиля
				</Links>
			)}
            {safety ? ()}
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	max-width: 475px;
	width: 100%;
	height: 44px;
	border-bottom: 1.5px solid #8f9499;
`

const Links = styled(Link)`
	font-weight: 700;
	font-size: 15px;
	color: #b5b9bd;
	text-decoration: none;
	padding: 13px 15px 15px 15px;
	:hover {
		color: #8f9499;
	}
`

const ActiveLinks = styled(Link)`
	font-weight: 700;
	font-size: 15px;
	height: 100%;
	border-bottom: 3px solid #673bb7;
	text-decoration: none;
	color: #000000;
	padding: 13px 17px 15px 17px;
`

export default SettingNavbar
