import styled from 'styled-components'
import Text from '../../components/UI/typography/Text'
import Title from '../../components/UI/typography/Title'
import { BiRuble } from 'react-icons/bi'
import { BsHeart } from 'react-icons/bs'
import Flex from '../../components/UI/position/Flex'

const TrendPage = () => {

	
	fetch('http://localhost:3000/NFTtokens') 
	.then((responce) => responce.json)
	.then((data) => )
	return (
		<Container>
			<Title margin='100px 0 20px 20px' color='#000000' size='40px'>
				Сейчас в тренде
			</Title>
			{data.map((el) => {
				return (
					<Card key={el.id}>
						<Photo src={el.img} alt='photo' />
						<Information>
							<Title
								margin='0 0 16px 0'
								size='14px'
								color='#959595'
							>
								{el.nameImg}
							</Title>
							<Title margin='0 0 0 0' size='14px' color='#000000'>
								{el.description}
							</Title>
							<PriceAndLike>
								<Text weight='700' size='14px' color='#a2349e'>
									{el.price} <Ruble />
								</Text>
								<Like>
									<Heart />
									<Text color='#959595'>{el.like}</Text>
								</Like>
							</PriceAndLike>
							<Flex
                                margin='3px 0 0 0'
								justify='space-between'
								height='60px'
								align='center'
							>
								<Flex>
									<UserImg src={el.userImg} alt='userPhoto' />
									<Author>
										<Title
											margin='0'
											size='12px'
											color='#8F9499'
										>
											Автор
										</Title>
										<UserName>{el.name}</UserName>
									</Author>
								</Flex>
                                <Buy>
                                    Купить
                                </Buy>
							</Flex>
						</Information>
					</Card>
				)
			})}
		</Container>
	)
}

const Container = styled.div`
	max-width: 1270px;
	width: 100%;
	margin: 0 auto;
	padding: 20px;
`

const Card = styled.div`
	width: 368px;
	height: 552px;
	border-radius: 12px;
	display: inline-block;
	margin: 20px;
	border: 0.2px solid #e7e7e7;
`

const Photo = styled.img`
	width: 368px;
	height: 356px;
	border-radius: 12px;
`

const Information = styled.div`
	width: 100%;
	padding: 20px;
`

const PriceAndLike = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 53px;
	border-bottom: 2px dashed #ececec;
`

const Ruble = styled(BiRuble)`
	padding-top: 2.5px;
`

const Like = styled.div`
	display: flex;
	align-items: center;
`

const Heart = styled(BsHeart)`
	margin-right: 8px;
`

const UserImg = styled.img`
	width: 36px;
	height: 36px;
	border-radius: 50%;
`

const Author = styled.div`
	margin-left: 6px;
	display: flex;
	flex-direction: column;
`

const UserName = styled.p`
	color: #8834f2;
	font-size: 14px;
	margin: 5px 0 0 0;
`

const Buy = styled.button`
    width: 86px;
    height: 30px;
    color: #ffffff;
    font-size: 12px;
    background: #a2349e;
    border: none;
    border-radius: 15px;
    font-weight: 700;
`

export default TrendPage
