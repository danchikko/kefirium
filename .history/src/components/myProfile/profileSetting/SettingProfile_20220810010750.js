import styled from 'styled-components'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import Text from '../../UI/typography/Text'

const SettingProfile = () => {
	return (
		<Container>
			<LeftBlock>
				<SettingPrompt>
					
					<Text color='#8f9499' size='16px'>
						- Поля отмеченые этим символом обязательны для получения
						отметки “Проверенный автор”
					</Text>
				</SettingPrompt>
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
	width: 20px;
	height: 20px;
`

const SettingPrompt = styled.div`
	display: flex;
	width: 100%;
`

export default SettingProfile
