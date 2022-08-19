import styled from 'styled-components'
import Title from '../../components/UI/typography/Title'
import { BiRuble } from 'react-icons/bi'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Collaction = () => {
	const [state, setState] = useState([])

	useEffect(() => {
		fetch('http://localhost:3000/Categories')
			.then((responce) => responce.json())
			.then((data) => setState(data.slice(0, 6)))
	}, [])

	return (
		<Container>
			<Title margin='100px 0 30px 20px' color='#000000' size='40px'>
				Топ Коллекций
			</Title>
			{state.map((el) => {
				return (
					<Link key={el.id} to={`/collection/${el.id}`}>
						<Card key={el.id}>
							<Photo src={el.collectionImage} alt='img' />
							<Content>
								<Title size='16px'>{el.collectionName}</Title>
								<Description>
									{el.collectionDescription}
								</Description>
								<Title size='16px'>
									{Math.floor(Math.random() * 1000)} <Ruble />
								</Title>
							</Content>
						</Card>
					</Link>
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
	width: 370px;
	height: 527px;
	border-radius: 12px;
	display: inline-block;
	margin: 20px;
	background: #000004;
	text-align: center;
`

const Photo = styled.img`
	width: 370px;
	height: 370px;
	border-radius: 12px;
	object-fit: cover;
	background-size: cover;
`

const Content = styled.div`
	padding: 25px;
	height: 100%;
`

const Ruble = styled(BiRuble)`
	font-weight: 700;
	padding-top: 1px;
	margin-bottom: -1px;
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

export default Collaction
