import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Flex from '../../components/UI/position/Flex'
import Title from '../../components/UI/typography/Title'

const Famous = () => {
	const [state, setState] = useState([])

	useEffect(() => {
		fetch('http://localhost:3000/Categories')
		 .then((responce) => responce.json())
		 .then((data) => setState(data.slice(1,6)))
	}, [])
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
							<Description size='14px'>{el.desckription}</Description>
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

const Description = styled.p`
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	margin: 10px 0;
	color: #ffffff;
	font-size: 17px;
`

export default Famous
