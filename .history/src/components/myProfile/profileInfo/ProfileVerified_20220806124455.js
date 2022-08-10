import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Text from '../../UI/typography/Text'
import {BsCheckCircle} from 'react-icons/bs'

const ProfileVerified = () => {
	return (
		<Verified>
			<Text size='11px' color='#000000'>
				Для получения отметки
			</Text>
			<Links to="/">"Проверенный автор"</Links>
            <Check />
            <Text color="#000000" size="11px">нужно заполнить данные своего</Text>
            <Links to="/">профиля полностью</Links>
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

const Check = styled(BsCheckCircle)`
    width: 18px;
    height: 18px;
    color: green;
`

const SpecialText = styled.p`
    fons
`

export default ProfileVerified
