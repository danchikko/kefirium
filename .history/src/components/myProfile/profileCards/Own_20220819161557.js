import { Fragment } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { UserAuth } from '../../../context/AuthContext'
import { IoIosArrowDown } from 'react-icons/io'
import { RiSearchLine } from 'react-icons/ri'
import Text from '../../UI/typography/Text'

const Own = () => {
	const [tokens, setTokens] = useState([])
	const [sortingModal, setSortingModal] = useState(false)
	const [price, setPrice] = useState(false)
	const [date, setDate] = useState(false)
	const [choice, setChoice] = useState('Выберите')
	const { user } = UserAuth()

	const priceHandler = () => {
		setPrice(true)
		setDate(false)
		setChoice('По цене')
		setSortingModal(false)
	}

	const dateHandler = () => {
		setDate(true)
		setPrice(false)
		setChoice('По дате создания')
		setSortingModal(false)
	}

	let email = user.email

	useEffect(() => {
		fetch(`http://localhost:3000/Categories`)
			.then((responce) => responce.json())
			.then((data) => setTokens(data.filter((el) => el.email === email)))
	}, [email])
	console.log(tokens)
	return (
		<Container>
			{!tokens && (
				<Fragment>
					<Link to='/createNFT'>
						<CreateNFTButton>+ Создать NFT</CreateNFTButton>
					</Link>
					<EmptyText>
						Создайте или купите свой первый токен, и он отобразится
						в этом разделе.
					</EmptyText>
					<CardImage
						src='https://kefirium.ru/_nuxt/img/ownNoTokens.43d1319.png'
						alt='image'
					/>
				</Fragment>
			)}
			{tokens && (
				<Fragment>
					<FlexBlock>
						<Search>
							<InputSearch type='search' />
							<ImageSearch />
						</Search>
						<Link to='/createNFT'>
							<CreateNFTButton>+ Создать NFT</CreateNFTButton>
						</Link>
						<Controlls>
							<Text color='#8f9499' weight='700' size='15px'>
								Сортировка
							</Text>
							<Text
								onClick={() =>
									setSortingModal((prevState) => !prevState)
								}
								style={{ cursor: 'pointer' }}
								color='#000000'
								size='14px'
							>
								{choice}
							</Text>
							<ArrowDown
								onClick={() =>
									setSortingModal((prevState) => !prevState)
								}
							/>
							{sortingModal ? (
								<SortingDrop>
									<Text
										onClick={priceHandler}
										style={{ cursor: 'pointer' }}
										weight='600'
										color='#000000'
										size='14px'
									>
										По цене
									</Text>
									<Text
										onClick={dateHandler}
										style={{ cursor: 'pointer' }}
										weight='600'
										color='#000000'
										size='14px'
									>
										По дате создания
									</Text>
								</SortingDrop>
							) : (
								''
							)}
						</Controlls>
					</FlexBlock>
					<ProfileCards>
						{tokens.map((token) => {
							return (
								<Link
									key={token.id}
									to={`/collection/token/${token.id}`}
								>
									<Card>
                                        <img src={} />
                                    </Card>
								</Link>
							)
						})}
					</ProfileCards>
				</Fragment>
			)}
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
`

const CreateNFTButton = styled.button`
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
	position: absolute;
	right: 110px;
	top: 855px;
	padding: 0 16px 25px 16px;
`

const ProfileCards = styled.div`
	max-width: 1170px;
	width: 100%;
	margin: 0 auto;
	padding: 50px 0;
`

const Card = styled.div`
	max-width: 370px;
	width: 100%;
	height: 530px;
    border-radius: 15px;
`

export default Own
