import styled from 'styled-components'

const FavoritesNFT = () => {
	return (
		<Container>
            
			<CardImage
				src='https://kefirium.ru/_nuxt/img/ownNoTokens.43d1319.png'
				alt='image'
			/>
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
`

const EmptyText = styled.p`
	font-size: 16px;
	color: #000000;
	margin: 50px 0 70px 0;
`

const CardImage = styled.img`
	width: 100%;
	height: 300px;
	margin-bottom: 180px;
`

export default FavoritesNFT
