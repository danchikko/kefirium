import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Flex from '../../components/UI/position/Flex'
import Title from '../../components/UI/typography/Title'

const Famous = () => {
	const [state, setState] = useState([])

	useEffect(() => {
		fetch('http://localhost:3000/Categories')
		 .then((responce) => responce.json())
		 .then((data) => setState(data.slice(0,6)))
	}, [])
	return (
		<Container>
			<Title size='40px' color='black' margin='100px 0 20px 20px'>
				Коллекции известных авторов
			</Title>
			{state.map((el) => {
				return (
					<Link>
					</Link>
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
	height: 539px;
	border-radius: 12px;
	background: #e20000;
	display: inline-block;
	margin: 20px;
`

const Photo = styled.img`
	width: 370px;
	height: 370px;
	border-radius: 12px;
    object-fit: cover;
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
