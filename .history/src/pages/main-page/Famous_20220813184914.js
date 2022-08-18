import styled from 'styled-components'
import Flex from '../../components/UI/position/Flex'
import Text from '../../components/UI/typography/Text'
import Title from '../../components/UI/typography/Title'

const Famous = () => {
	const data = [
		{
			id: 1,
			img: 'https://kefirium.ru/storage/app/uploads/public/627/fa7/a90/627fa7a90c395300445830.png',
			title: 'Мемасики',
			desckription:
				'Никакой дополнительной ценности, к ним не привязан скрытый контент, но это не точно.',
			price: '888',
			userImg:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTXwBJPJKBK7goAjIEQy4W3nPOxmJX72Y_Iw&usqp=CAU',
			author: 'Maksat',
		},
		{
			id: 2,
			img: 'https://kefirium.ru/storage/app/uploads/public/627/fa7/a90/627fa7a90c395300445830.png',
			title: 'Мемасики',
			desckription:
				'Никакой дополнительной ценности, к ним не привязан скрытый контент, но это не точно.',
			price: '888',
			userImg:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTXwBJPJKBK7goAjIEQy4W3nPOxmJX72Y_Iw&usqp=CAU',
			author: 'Maksat',
		},
		{
			id: 3,
			img: 'https://kefirium.ru/storage/app/uploads/public/627/fa7/a90/627fa7a90c395300445830.png',
			title: 'Мемасики',
			desckription:
				'Никакой дополнительной ценности, к ним не привязан скрытый контент, но это не точно.',
			price: '888',
			userImg:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTXwBJPJKBK7goAjIEQy4W3nPOxmJX72Y_Iw&usqp=CAU',
			author: 'Maksat',
		},
		{
			id: 4,
			img: 'https://kefirium.ru/storage/app/uploads/public/627/fa7/a90/627fa7a90c395300445830.png',
			title: 'Мемасики',
			desckription:
				'Никакой дополнительной ценности, к ним не привязан скрытый контент, но это не точно.',
			price: '888',
			userImg:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTXwBJPJKBK7goAjIEQy4W3nPOxmJX72Y_Iw&usqp=CAU',
			author: 'Maksat',
		},
		{
			id: 5,
			img: 'https://kefirium.ru/storage/app/uploads/public/627/fa7/a90/627fa7a90c395300445830.png',
			title: 'Мемасики',
			desckription:
				'Никакой дополнительной ценности, к ним не привязан скрытый контент, но это не точно.',
			price: '888',
			userImg:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTXwBJPJKBK7goAjIEQy4W3nPOxmJX72Y_Iw&usqp=CAU',
			author: 'Maksat',
		},
		{
			id: 6,
			img: 'https://kefirium.ru/storage/app/uploads/public/627/fa7/a90/627fa7a90c395300445830.png',
			title: 'Мемасики',
			desckription:
				'Никакой дополнительной ценности, к ним не привязан скрытый контент, но это не точно.',
			price: '888',
			userImg:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTXwBJPJKBK7goAjIEQy4W3nPOxmJX72Y_Iw&usqp=CAU',
			author: 'Maksat',
		},
	]
	return (
		<Container>
			<Title size='40px' color='black' margin='100px 0 20px 20px'>
				Коллекции известных авторов
			</Title>
			{data.map((el) => {
				return (
					<Card key={el.id}>
						<Photo src={el.img} alt='img' />
						<Content>
							<Title size='16px'>{el.title}</Title>
							<Text size='14px'>{el.desckription}</Text>
							<Flex>
								<UserImg
									src='https://kefirium.ru/storage/app/uploads/public/626/ac8/566/626ac8566ac13328111555.jpg'
									alt='userPhoto'
								/>
								<div>
									<Title margin='2px 0' size='12px'>
										Автор
									</Title>
									<Title size='14px'>{el.author}</Title>
								</div>
							</Flex>
						</Content>
					</Card>
				)
			})}
		</Container>
	)
}

const Container = styled.div`
	max-width: 1270px;
	width: 100%;
	padding: 20px;
	margin: 0 auto;
`

const Card = styled.div`
	width: 370px;
	height: 529px;
	border-radius: 12px;
	background: #e20000;
	display: inline-block;
	margin: 20px;
`

const Photo = styled.img`
	width: 370px;
	height: 370px;
	border-radius: 12px;
`

const Content = styled.div`
	padding: 20px 25px;
`

const UserImg = styled.img`
	width: 36px;
	height: 36px;
	border-radius: 50%;
	margin-right: 15px;
`

export default Famous
