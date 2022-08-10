import styled from 'styled-components'
import Title from '../../UI/typography/Title'
import ProfileAvatar from './ProfileAvatar'
import ProfileVerified from './ProfileVerified'

const ProfileInfo = () => {
	return (
		<Container>
			<ProfileAvatar />
			<Title margin='20px' color='#673bb7' size='25px'>
				Lts_hg
			</Title>
			<ProfileVerified />
			<Title weight="500" size="18px" color="#8f9499" margin="20px 0">Зарегистрирован 2022-07-21</Title>
		</Container>
	)
}

const Container = styled.div`
	max-width: 1170px;
	margin: 70px 0 0 0;
	text-align: center;
`

export default ProfileInfo
