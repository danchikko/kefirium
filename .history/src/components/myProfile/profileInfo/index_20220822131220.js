import { useState } from 'react'
import { Fragment } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import { UserAuth } from '../../../context/AuthContext'
import Title from '../../UI/typography/Title'
import ProfileAvatar from './ProfileAvatar'
import ProfileVerified from './ProfileVerified'

const ProfileInfo = () => {
	const [userDate, setUserDate] = useState([])
	const { user } = UserAuth()
	let email = user.email

	useEffect(() => {
		fetch('http://localhost:3000/users')
			.then((responce) => responce.json())
			.then((data) =>
				setUserDate(data.filter((el) => el.email === email)),
			)
	}, [email])
	console.log()
	return (
		<Container>
			{userDate.map((el) => {
				return (
					<Fragment key={el.id}>
						<ProfileAvatar />
						<Title margin='20px' color='#673bb7' size='25px'>
							{el.nickname}
						</Title>
						<ProfileVerified />
						<Title
							weight='500'
							size='18px'
							color='#8f9499'
							margin='20px 0'
						>
							{el.date}
						</Title>
					</Fragment>
				)
			})}
		</Container>
	)
}

const Container = styled.div`
	max-width: 1170px;
	margin: 70px 0 0 0;
	text-align: center;
`

export default ProfileInfo
