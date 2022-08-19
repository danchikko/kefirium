import { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import { UserAuth } from '../../../context/AuthContext'
import Title from '../../UI/typography/Title'
import ProfileAvatar from './ProfileAvatar'
import ProfileVerified from './ProfileVerified'

const ProfileInfo = () => {
	const [userDate, setUserDate] = useState(null)
	const {user} = UserAuth()
	let email = user.email

	useEffect(() => {
		fetch('http://localhost:3000/users')
			.then((responce) => responce.json())
			.then((data) =>
				setUserDate(data.filter((el) => el.email === email)),
			)
	}, [email])
	return (
		<Container>
			{userDate.map(())}
		</Container>
	)
}

const Container = styled.div`
	max-width: 1170px;
	margin: 70px 0 0 0;
	text-align: center;
`

export default ProfileInfo
