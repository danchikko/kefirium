import styled from 'styled-components'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import Text from '../../UI/typography/Text'

const SettingProfile = () => {
	return (
		<Container>
			<LeftBlock>
				<Text color='#8f9499' size='16px'>
					<Check /> - Поля отмеченые этим символом обязательны для
					получения отметки “Проверенный автор”
				</Text>
                <Label>Имя <Check /></Label>
                <Inputs />
			</LeftBlock>
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
`

const LeftBlock = styled.div`
	max-width: 480px;
	width: 100%;
`

const Check = styled(AiOutlineCheckCircle)`
	color: green;
	width: 18px;
	height: 18px;
`

const Label = styled.label`
    font-size: 16px;
    color: #000000;
    margin-top: 20px;
`

const Inputs = styled.input`
    width: 100%;
    border-radius: 30px;
    color
`

export default SettingProfile
