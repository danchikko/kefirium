import styled from 'styled-components'
import Title from '../../components/UI/typography/Title'
import WhatIsNFT from '../../aseets/images/whatIsNFT.png'
import BuyNFT from '../../aseets/images/buyNFT.png'
import CreateCollectionNFT from '../../aseets/images/createNFTcollection.png'

const NeedKnow = () => {
	return (
		<Container>
			<Title size='40px' color='#000000' margin='80px 0 50px 20px'>
				Что нужно знать
			</Title>
			<Show>
				<Card>
					<Photo src={WhatIsNFT} alt='whatIsNFT' />
					<Title color='#000000' size='14px' margin='20px 0 0 0'>
						Что такое NFT?
					</Title>
				</Card>
				<Card>
					<Photo src={BuyNFT} alt='buyNFT' />
					<Title color='#000000' size='14px' margin='20px 0 0 0'>
						Безопасность при покупке NFT
					</Title>
				</Card>
				<Card>
					<Photo src={CreateCollectionNFT} alt='createCollection' />
					<Title color='#000000' size='14px' margin='20px 30px'>
						Как сделать свою NFT коллекцию? Руководство для
						начинающих
					</Title>
				</Card>
			</Show>
		</Container>
	)
}

const Container = styled.div`
	max-width: 1270px;
	width: 100%;
	margin: 0 auto;
	padding: 20px;
    margin-bottom: 70px;
`

const Show = styled.div`
	display: flex;
	justify-content: space-around;
`

const Card = styled.div`
	width: 368px;
	height: 275px;
	border-radius: 12px;
	border: 1px solid #e7e7e7;
	text-align: center;
`

const Photo = styled.img`
	width: 368px;
	height: 198px;
	border-radius: 12px;
`

export default NeedKnow
