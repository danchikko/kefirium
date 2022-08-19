import styled from 'styled-components'
import register from '../../aseets/svg/register.svg'
import Title from '../../components/UI/typography/Title'
import collaction from '../../aseets/svg/collaction.svg'
import create from '../../aseets/svg/createNFT.svg'
import earning from '../../aseets/svg/earning.svg'

const InformationNFT = () => {
	return (
		<Container>
			<Title color='#000' size='40px' margin='80px 0 40px 20px'>
				Стань автором NFT
			</Title>
			<FlexDiv>
				<Card>
					<Images src={register} alt='registerPhoto' />
					<Title margin='5px' size='14px' color='#000000'>
						Регистрируйся на сайте Kefirium.ru
					</Title>
				</Card>
				<Card>
					<Images src={collaction} alt='collaction' />
					<Title margin='5px' size='14px' color='#000000'>
						Придумай свою NFT коллекцию
					</Title>
				</Card>
				<Card>
					<Images src={create} alt='createNFT' />
					<Title margin='5px' size='14px' color='#000000'>
						Создай свой NFT
					</Title>
				</Card>
				<Card>
					<Images src={earning} alt='earningNFT' />
					<Title margin='5px' size='14px' color='#000000'>
						Зарабатывай на NFT
					</Title>
				</Card>
			</FlexDiv>
			<Video>
				<VideoForKefirium
                    poster='https://kefirium.ru/storage/app/uploads/public/628/b51/6e2/628b516e22ff3597890946.png'
					controlsList='nodownload'
					preload='auto'
					controls
					src='https://kefirium.ru/storage/app/uploads/public/628/cb9/af0/628cb9af09d10727575584.mp4'
				/>
			</Video>
		</Container>
	)
}

const Container = styled.div`
	max-width: 1270px;
	width: 100%;
	padding: 20px;
	margin: 0 auto;
`

const FlexDiv = styled.div`
	display: flex;
	justify-content: space-around;
`

const Card = styled.div`
	width: 130px;
	height: 170px;
	text-align: center;
	display: inline-block;
	cursor: pointer;
`

const Images = styled.img`
	width: 130px;
	height: 100px;
`

const Video = styled.div`
    max-width: 1270px;
    width: 100%;
    text-align: center;
`

const VideoForKefirium = styled.video`
	max-width: 970px;
	width: 100%;
	max-height: 470px;
	border-radius: 12px;
	object-fit: cover;
	margin-top: 100px;
`

export default InformationNFT
