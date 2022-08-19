import { Fragment } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { UserAuth } from '../../../context/AuthContext'
import { IoIosArrowDown } from 'react-icons/io'
import { RiSearchLine } from 'react-icons/ri'

const Own = () => {
	const [tokens, setTokens] = useState([])
	const { user } = UserAuth()
	let email = user.email

	useEffect(() => {
		fetch(`http://localhost:3000/Categories`)
			.then((responce) => responce.json())
			.then((data) => setTokens(data.filter((el) => el.email === email)))
	}, [email])
	console.log(tokens)
	return (
		<Container>
			<Link to='/createNFT'>
				<CreateNFTButton>+ Создать NFT</CreateNFTButton>
			</Link>
			{tokens && (
				<Fragment>
					<EmptyText>
						Создайте или купите свой первый токен, и он отобразится
						в этом разделе.
					</EmptyText>
					<CardImage
						src='https://kefirium.ru/_nuxt/img/ownNoTokens.43d1319.png'
						alt='image'
					/>
				</Fragment>
			
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
`

const CreateNFTButton = styled.button`
	width: 158px;
	height: 30px;
	margin-left: 20px;
	background-color: #673bb7;
	border-radius: 16px;
	font-size: 14px;
	font-weight: 600;
	color: white;
	border: none;
	cursor: pointer;
`

const EmptyText = styled.p`
	font-size: 16px;
	color: #000000;
	margin: 50px 0 70px 0;
`

const CardImage = styled.img`
	width: 100%;
	height: 300px;
	margin-bottom: 180px;
`

const FlexBlock = styled.div`
	display: flex;
	align-items: center;
`

const Search = styled.div`
	max-width: 670px;
	width: 100%;
	height: 30px;
	display: flex;
	border-radius: 12px;
	background-color: #f4f4f4;
	align-items: center;
`

const InputSearch = styled.input`
	max-width: 630px;
	width: 100%;
	background-color: #f4f4f4;
	padding: 0 0 0 20px;
	border: none;
	border-radius: 12px;
	outline: none;
`

const ImageSearch = styled(RiSearchLine)`
	width: 20px;
	height: 20px;
	color: #000000;
`

const CreateCollectionButton = styled.button`
	width: 158px;
	background-color: #673bb7;
	margin: 0 80px 0 20px;
	color: #ffffff;
	font-size: 12px;
	height: 28.5px;
	border: none;
	border-radius: 16px;
	cursor: pointer;
`

const Controlls = styled.div`
	width: 240px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

const ArrowDown = styled(IoIosArrowDown)`
	cursor: pointer;
`

const SortingDrop = styled.div`
	width: 188px;
	height: 115px;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	/* border: 1px solid gray; */
	position: absolute;
	right: 110px;
	top: 855px;
	padding: 0 16px 25px 16px;
`

export default Own
