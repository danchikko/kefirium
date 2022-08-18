import styled from 'styled-components'
import { AiOutlineHeart } from 'react-icons/ai'
import { FiShare2 } from 'react-icons/fi'
import { TiInfoLargeOutline } from 'react-icons/ti'
import Title from '../../components/UI/typography/Title'
import Text from '../../components/UI/typography/Text'

const CollectionTokens = () => {
	return (
		<Container>
			<HeadBox>
				<HeadImage
					src='https://kefirium.ru/storage/app/uploads/public/627/40f/2f4/62740f2f48edf319297309.jpg'
					alt='imageToken'
				/>
				<Actions>
					<HeartButton>
						<Heart />
					</HeartButton>
					<SharingButton>
						<Sharing />
					</SharingButton>
					<ComplaintButton>
						<Complain />
					</ComplaintButton>
				</Actions>
			</HeadBox>
			<HeadInfo>
				<Title size='40px' color='#000000' margin='0 0 30px 0'>
					Желтый треугольник 004
				</Title>
				<Text color='#8f9499' weight='700' size='15px'>
					Коллекция<Span>Геометрия эстетики</Span>
				</Text>
				<Text color='#8f9499' weight='700' size='15px'>
					Владелец <Span>evgenykrist</Span>
				</Text>
			</HeadInfo>
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
	display: flex;
	margin-bottom: 50px;
`

const HeadBox = styled.div`
	max-width: 470px;
	width: 100%;
	margin: 0 30px 0 0;
`

const HeadImage = styled.img`
	width: 100%;
	height: 470px;
	border-radius: 12px;
	object-fit: fill;
`

const Actions = styled.div`
	display: flex;
	width: 100%;
	height: 50px;
	margin-top: 40px;
	gap: 20px;
`

const HeartButton = styled.button`
	width: 50px;
	height: 50px;
	cursor: pointer;
	border-radius: 16px;
	box-shadow: 0px 4px 3px rgba(103, 59, 183, 0.1);
	border: none;
	background-color: #fafafa;
	transition: margin-top 0.3s ease;
	display: flex;
	align-items: center;
	justify-content: center;
`

const Heart = styled(AiOutlineHeart)`
	width: 28px;
	height: 28px;
	color: #673bb7;
`

const SharingButton = styled.button`
	width: 50px;
	height: 50px;
	cursor: pointer;
	border-radius: 16px;
	box-shadow: 0px 4px 3px rgba(103, 59, 183, 0.1);
	border: none;
	background-color: #fafafa;
	transition: margin-top 0.3s ease;
	display: flex;
	align-items: center;
	justify-content: center;
`

const Sharing = styled(FiShare2)`
	width: 28px;
	height: 28px;
	color: #673bb7;
`

const ComplaintButton = styled.button`
	width: 50px;
	height: 50px;
	cursor: pointer;
	border-radius: 16px;
	box-shadow: 0px 4px 3px rgba(103, 59, 183, 0.1);
	border: none;
	background-color: #fafafa;
	transition: margin-top 0.3s ease;
	display: flex;
	align-items: center;
	justify-content: center;
`

const Complain = styled(TiInfoLargeOutline)`
	width: 28px;
	height: 28px;
	color: #673bb7;
`

const HeadInfo = styled.div`
	max-width: 560px;
	width: 100%;
	display: flex;
	flex-direction: column;
`

const Span = styled.span`
	/* background: linear-gradient(88.83deg,#a2349e 7.88%,#e7246a 85.15%); */
	color: #a2349e;
	margin-left: 19px;
`

const PriceBox = styled.div`

`

export default CollectionTokens
