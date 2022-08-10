import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import Title from '../../UI/typography/Title'
import Payments from './Payments'
import Security from './Security'
import SettingNavbar from './SettingNavbar'
import SettingProfile from './SettingProfile'

const ProfileSetting = () => {
	return (
		<Container>
			<Title color='#000000' size='40px' margin='0 0 25px 0'>
				Настройки профиля
			</Title>
            <SettingNavbar />
            <Routes>
                <Route path='profileSettings' element={<SettingProfile />}/>
                <Route path='security' element={<Security />} />
                <Route path='payments' element={<Payments />} />
            </Routes>
		</Container>
	)
}

const Container = styled.div`
	max-width: 1170px;
	width: 100%;
    padding-top: 140px;
    margin: 0 auto;
`

export default ProfileSetting
