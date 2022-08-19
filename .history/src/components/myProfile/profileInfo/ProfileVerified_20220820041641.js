import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {BsCheckCircle} from 'react-icons/bs'

const ProfileVerified = () => {
	return (
		<Verified>
			<SpecialText>
				Для получения отметки
			</SpecialText>
			<Links to="/">"Проверенный автор"</Links>
            <Check />
            <SpecialText>нужно заполнить данные своего</SpecialText>
            <Links to="/profileSettings">профиля полностью</Links>
		</Verified>
	)
}

const Verified = styled.div`
	max-width: 616px;
	height: 35px;
	display: flex;
	align-items: center;
    margin: 0 auto;
`

const Links = styled(Link)`
	color: #3dabef;
	font-size: 12.5px;
`

const Check = styled(BsCheckCircle)`
    width: 18px;
    height: 18px;
    color: green;
    margin: 0 7px 0 4px;
`

const SpecialText = styled.p`
    font-size: 12.5px;
    color: #000000;
    margin: 0;
`

export default ProfileVerified
