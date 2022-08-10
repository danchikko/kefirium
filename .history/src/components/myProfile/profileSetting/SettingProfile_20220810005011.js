import styled from 'styled-components'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import Text from '../../UI/typography/Text'

const SettingProfile = () => {
	return (
		<Container>
			<LeftBlock>
				
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
	width: 15px;
	height: 15px;
`

const SettingPrompt = styled.div`
	display: flex;
	width: 100%;
	text-align: center;
`

export default SettingProfile
