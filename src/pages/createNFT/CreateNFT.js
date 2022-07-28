import styled from 'styled-components'
import CreateFormNFT from '../../components/createNFT'
import Title from '../../components/UI/typography/Title'

const CreateNFT = () => {
	return (
		<Container>
			<Title margin="35px 0" color="#000000" size="40px">Создание NFT</Title>
			<CreateFormNFT />
		</Container>
	)
}

const Container = styled.div`
	max-width: 1200px;
	width: 100%;
	padding: 110px 15px 30px 15px;
	margin: 0 auto;
`

export default CreateNFT
