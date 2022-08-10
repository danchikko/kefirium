import styled from 'styled-components'
import { FiShare2 } from 'react-icons/fi'
import { IoSettingsOutline } from 'react-icons/io5'

const ProfileAvatar = () => {
	return (
			<Block>
				<SecondBlock>
					<Avatar
						src='https://kefirium.ru/storage/app/uploads/public/62d/918/835/62d9188353059146444667.jpg'
						alt='Avatar'
					/>
					<Settings>
						<ActionsButtons>
							<Share />
						</ActionsButtons>
						<ActionsButtons>
							<Setting />
						</ActionsButtons>
					</Settings>
				</SecondBlock>
			</Block>
	)
}

const Block = styled.div`
	width: 100%;
    display: flex;
    justify-content: flex-end;
`

const SecondBlock = styled.div`
	width: 57%;
	display: flex;
    justify-content: space-between;
`

const Avatar = styled.img`
	width: 160px;
	height: 160px;
	border-radius: 50%;
`

const Settings = styled.div`
	width: 130px;
	height: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const ActionsButtons = styled.button`
	width: 50px;
	height: 50px;
	border: none;
	border-radius: 16px;
	background: #fafafa;
	cursor: pointer;
`

const Share = styled(FiShare2)`
	width: 50px;
	height: 25px;
	color: #673bb7;
	:hover {
		margin-bottom: 3px;
	}
`

const Setting = styled(IoSettingsOutline)`
	width: 24px;
	height: 24px;
	color: #673bb7;
`

export default ProfileAvatar
