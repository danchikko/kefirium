import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import Title from '../../UI/typography/Title'
import Navbar from './Navbar'

const ProfileSetting = () => {
	return (
		<Container>
			<Title color='#000000' size='40px' margin='0 0 25px 0'>
				Настройки профиля
			</Title>
            <Navbar />
            <Routes>
                <Route path=''/>
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
