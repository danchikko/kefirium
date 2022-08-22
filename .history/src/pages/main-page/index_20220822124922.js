import styled from 'styled-components'
import TrendPage from './TrendPage'
import backround from '../../aseets/images/backround.webp'
import Flex from '../../components/UI/position/Flex'
import Text from '../../components/UI/typography/Text'
import Title from '../../components/UI/typography/Title'
import img from '../../aseets/images/recomended.png'
import author from '../../aseets/images/author.webp'
import { BiRuble } from 'react-icons/bi'
import Button from '../../components/UI/buttons/Button'
import Collaction from './Collaction'
import Famous from './Famous'
import CategoriesPage from './CategoriesPage'
import NeedKnow from './NeedKnow'
import InformationNFT from './Information'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { allClick } from '../../store/optionsSlice'
import { useEffect } from 'react'
import { useState } from 'react'

const MainPage = () => {
	const [state, setState] = useState([])
	const dispatch = useDispatch()

	useEffect(() => {
		fetch('http://localhost:3000/NFTtokens')
			.then((responce) => responce.json())
			.then((data) => setState(data.slice(5, 6)))
	}, [])
	return (
		<Container>
			<Background>
				<Flex width='1250px' justify='space-around'>
					<Flex direction='column' width='510px' margin='40px 0 0 0'>
						<Title margin='30px 0 8px 0' size='46px'>
							Кефириум - NFT за рубли. NFT для всех.
						</Title>
						<Text line='23px' size='16px'>
							Вступай в NFT сообщество сегодня. Только на
							Kefirium.ru ты можешь создавать, продавать и
							покупать NFT легко, ведь здесь всё на русском языке,
							а все расчеты в рублях!
						</Text>
						<Text size='16px'>Подробнее</Text>
						<Flex margin='15px 0 0 0' justify='space-between'>
							<Link
								onClick={() => dispatch(allClick())}
								to='/categories'
							>
								<Button
									width='270px'
									height='60px'
									color='#673bb7'
									size='16px'
									radius='35px'
									weight='700'
								>
									Смотреть коллекции
								</Button>
							</Link>
							<Link to='/createCollection'>
								<Button
									width='200px'
									height='60px'
									color='#fafafa'
									background='#673bb7'
									radius='35px'
									weight='700'
									size='16px'
								>
									Создать NFT
								</Button>
							</Link>
						</Flex>
					</Flex>
					{state.map((el) => {
						return (
							<Link key={el.id} >
								<SecondDiv>
									<MainImg src={img} alt='mainImg' />
									<Title
										margin='15px 0 0 15px'
										color='#002946'
										size='16px'
									>
										Желтый треугольник 004
									</Title>
									<Price>
										<Flex>
											<AuthorImg
												src={author}
												alt='authorImg'
											/>
											<Text color='#d9226e' size='12px'>
												Evgenyi
											</Text>
										</Flex>
										<Flex>
											1100 <BiRuble />
										</Flex>
									</Price>
								</SecondDiv>
							</Link>
						)
					})}
				</Flex>
			</Background>
			<TrendPage />
			<Collaction />
			<Famous />
			<CategoriesPage />
			<InformationNFT />
			<NeedKnow />
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
	margin: 0 auto;
`

const Background = styled.div`
	width: 100%;
	height: 640px;
	display: flex;
	justify-content: space-around;
	background: url(${backround}) no-repeat;
	background-size: cover;
	background-position: center;
	background-attachment: fixed;
	padding: 80px 20px;
`

const SecondDiv = styled.div`
	width: 450px;
	height: 450px;
	display: flex;
	flex-direction: column;
	border-radius: 18px;
	background: #ffff;
	margin-top: 50px;
`

const MainImg = styled.img`
	width: 450px;
	height: 358px;
	border-radius: 18px;
`

const Price = styled.h3`
	color: #d9226e;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 15px;
`

const AuthorImg = styled.img`
	width: 30px;
	height: 30px;
	border-radius: 50%;
	margin: 2px 10px 0 0;
`
export default MainPage
