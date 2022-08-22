import styled from 'styled-components'
import { RiSearchLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import Text from '../../UI/typography/Text'
import { IoIosArrowDown } from 'react-icons/io'
import { useState } from 'react'
import { useEffect } from 'react'
import { UserAuth } from '../../../context/AuthContext'
import { Fragment } from 'react'
import Title from '../../UI/typography/Title'
import { BiRuble } from 'react-icons/bi'

const MyCollection = () => {
	const [collection, setCollection] = useState([])
	const [sortingModal, setSortingModal] = useState(false)
	const [choice, setChoice] = useState('Выберите')
	const { user } = UserAuth()

	const priceHandler = () => {
		setChoice('По цене')
		setSortingModal(false)
	}

	const dateHandler = () => {
		setChoice('По дате создания')
		setSortingModal(false)
	}

	let email = user.email

	useEffect(() => {
		fetch('http://localhost:3000/Categories')
			.then((responce) => responce.json())
			.then((data) =>
				setCollection(data.filter((el) => el.email === email)),
			)
	}, [email])
	return (
		<Container>
			{collection.length && (
				<Fragment>
					<Btn>+ Создать коллекцию</Btn>
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
			{collection && (
				<Fragment>
					<FlexBlock>
						<Search>
							<InputSearch type='search' />
							<ImageSearch />
						</Search>
						<Link to='/createCollection'>
							<CreateCollectionButton>
								+ Создать коллекцию
							</CreateCollectionButton>
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
						{collection.map((el) => {
							return (
								<Link style={{textDecoration: 'none'}} key={el.id} to={`/collection/${el.id}`}>
									<Card key={el.id}>
										<Photo
											src={el.collectionImage}
											alt='img'
										/>
										<Content>
											<Title size='16px'>
												{el.collectionName}
											</Title>
											<Description>
												{el.collectionDescription}
											</Description>
											<Title size='16px'>
												{Math.floor(
													Math.random() * 1000,
												)}{' '}
												<Ruble />
											</Title>
										</Content>
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
	transition: all 0.3s;
	overflow: hidden;
	:hover {
		box-shadow: 0 6px 30px -10px #673bb7;
		transform: translateY(-5px);
	}
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

const Btn = styled.button`
	width: 158px;
	background-color: #673bb7;
	margin: 0 80px 0 20px;
	color: #ffffff;
	font-size: 12px;
	height: 28.5px;
	border: none;
	border-radius: 16px;
	cursor: pointer;
	transition: all 0.3s;
	overflow: hidden;
	:hover {
		box-shadow: 0 6px 30px -10px #673bb7;
		transform: translateY(-5px);
	}
`

const ProfileCards = styled.div`
	max-width: 1170px;
	width: 100%;
	margin: 0 auto;
	padding: 50px 0;
	gap: 30px;
	display: flex;
	flex-wrap: wrap;
`

const Card = styled.div`
	width: 370px;
	height: 527px;
	border-radius: 12px;
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

export default MyCollection
