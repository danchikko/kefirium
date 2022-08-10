import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Text from '../../UI/typography/Text'


const ProfileVerified = () => {
	return (
		<Verified>
			<Text size='11px' color='#000000'>
				Для получения отметки
			</Text>
			<Links>"Проверенный автор"</Links>
		</Verified>
	)
}

const Verified = styled.div`
	max-width: 616px;
	height: 35px;
	display: flex;
	align-items: flex-end;
`

const Links = styled(Link)`
	color: #3dabef;
	font-size: 11px;
`

export default ProfileVerified
