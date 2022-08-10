import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { safetyProfile, settingProfile, withdrawalsProfile } from '../../../store/profileSlice'

const SettingNavbar = () => {
	const { setting, safety, withdrawals } = useSelector(
		(state) => state.profile,
	)
	const dispatch = useDispatch()
	return (
		<Container>
			{setting ? (
				<ActiveLinks to='/profile/settings/profileSettings'>
					Настройки профиля
				</ActiveLinks>
			) : (
				<Links
					onClick={() => dispatch(settingProfile())}
					to='/profile/settings/profileSettings'
				>
					Настройки профиля
				</Links>
			)}
			{safety ? (
				<ActiveLinks to='/profile/settings/security'>
					Безопасность
				</ActiveLinks>
			) : (
				<Links
					onClick={() => dispatch(safetyProfile())}
					to='/profile/settings/security'
				>
					Безопасность
				</Links>
			)}
			{withdrawals ? (
				<ActiveLinks to='/profile/settings/payments'>
					Вывод средств
				</ActiveLinks>
			) : (
				<Links
					onClick={() => dispatch(withdrawalsProfile())}
					to='/profile/settings/payments'
				>
					Вывод средств
				</Links>
			)}
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	max-width: 471px;
	width: 100%;
	height: 44px;
	border-bottom: 1.5px solid #8f9499;
    margin-bottom: 50px;
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
