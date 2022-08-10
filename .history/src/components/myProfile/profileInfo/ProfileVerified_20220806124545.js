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
    font-size: 11px;
    color: #000000;
    margin: 0;
`

export default ProfileVerified
