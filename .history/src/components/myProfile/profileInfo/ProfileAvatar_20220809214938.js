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
							<p>Поделиться</p>
						</ActionsButtons>
						<ActionsButtons>
							<Setting />
							<p>Настройки</p>
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
	box-shadow: 0 4px 3px rgb(103 59 183 / 10%);
	cursor: pointer;
	& p {
		display: none;
		color: #000000;
		font-size: 12px;
		box-shadow: 0 4px 3px rgb(103 59 183 / 10%);
		border-radius: 8px;
		background-color: #fafafa;
		animation: bloy;
	}
	:hover {
		margin-bottom: ;
		& p {
			display: block;
		}
	}
`

const Share = styled(FiShare2)`
	width: 30px;
	height: 30px;
	color: #673bb7;
`

const Setting = styled(IoSettingsOutline)`
	width: 30px;
	height: 30px;
	color: #673bb7;
`

export default ProfileAvatar
