import styled from 'styled-components'
import { FiHeart } from 'react-icons/fi'
import { FiShare2 } from 'react-icons/fi'
import { TiInfoLargeOutline } from 'react-icons/ti'
import Title from '../../components/UI/typography/Title'
import Text from '../../components/UI/typography/Text'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'

const CollectionTokens = () => {
	const { id } = useParams()
	const [tokens, setTokens] = useState(null)

	useEffect(() => {
		fetch(`http://localhost:3000/NFTtokens/${id}`)
			.then((responce) => responce.json())
			.then((data) => setTokens(data))
	}, [id])

	return (
		<Container>
			{tokens && (
				<>
					<HeadBox>
						<HeadImage
							src={tokens.NFTImage}
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
						<Title size='40px' color='#000000' margin='0 0 15px 0'>
							{tokens.NFTName}
						</Title>
						<Text color='#8f9499' weight='700' size='15px'>
							Коллекция<Span>Геометрия эстетики</Span>
						</Text>
						<Text
							style={{ margin: '5px 0 0 0' }}
							color='#8f9499'
							weight='700'
							size='15px'
						>
							Владелец <Span>evgenykrist</Span>
						</Text>
						<PriceBox>
							<Text color='#673bb7' size='40px' weight='700'>
								1 100 ₽
							</Text>
							<ButtonBuy>Купить</ButtonBuy>
						</PriceBox>
						<LikesBlock>
							<Like />
							<LikesCount>1</LikesCount>
						</LikesBlock>
						<Text color='#8f9499' size='15px' weight='700'>
							Описание
						</Text>
						<Text style={{ margin: 0 }} size='17px' color='#000000'>
							{}
						</Text>
						<Text color='#8f9499' size='15px' weight='700'>
							Ссылка на оригинал{' '}
							<Span2>https://gateway.pinata.cloud/</Span2>
						</Text>
						<Text
							style={{ margin: '5px 0 0 0' }}
							color='#8f9499'
							size='15px'
							weight='700'
						>
							Автор <Span2>evgenykrist</Span2>
						</Text>
					</HeadInfo>
				</>
			)}
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

const Heart = styled(FiHeart)`
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
	color: #a2349e;
	margin-left: 19px;
`

const PriceBox = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	grid-column-gap: 37px;
	grid-row-gap: 21px;
`

const ButtonBuy = styled.button`
	width: 162px;
	height: 60px;
	font-size: 16px;
	border-radius: 30px;
	background: linear-gradient(88.83deg, #a2349e 7.88%, #e7246a 85.15%);
	border: none;
	color: #ffffff;
	font-weight: 700;
`

const LikesBlock = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
`

const Like = styled(FiHeart)`
	width: 16px;
	height: 20px;
	margin-right: 10px;
	color: #8f9499;
`

const LikesCount = styled.div`
	height: 17px;
	font-size: 14px;
	color: #8f9499;
`

const Span2 = styled.span`
	color: #673bb7;
	margin-left: 19px;
`

export default CollectionTokens
