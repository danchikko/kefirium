import styled from 'styled-components'
import Text from '../../components/UI/typography/Text'
import Title from '../../components/UI/typography/Title'
import { BiRuble } from 'react-icons/bi'
import { BsHeart } from 'react-icons/bs'
import Flex from '../../components/UI/position/Flex'
import { useEffect, useState } from 'react'

const TrendPage = () => {
	const [state, setState] = useState([])

	useEffect(() => {
		fetch('http://localhost:3000/NFTtokens')
		 .then((responce) => responce.json())
		 .then((data) => setState(data.slice(0,6)))
	}, [])
	return (
		<Container>
			<Title margin='100px 0 20px 20px' color='#000000' size='40px'>
				Сейчас в тренде
			</Title>
			{state.map((el) => {
				return (
					<Link
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
	height: 575px;
	border-radius: 12px;
	display: inline-block;
	margin: 20px;
	border: 0.2px solid #e7e7e7;
`

const Photo = styled.img`
	width: 368px;
	height: 356px;
	border-radius: 12px;
	background-size: cover;
	object-fit: cover;
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
	border-bottom: 2px dashed #ececec;
	margin: 0;
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

const Description = styled.p`
	height: 50px;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	margin: 0;
`

export default TrendPage
