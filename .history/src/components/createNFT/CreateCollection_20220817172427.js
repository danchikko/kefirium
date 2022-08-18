import { Fragment, useEffect, useState } from 'react'
import styled from 'styled-components'
import Text from '../UI/typography/Text'
import Title from '../UI/typography/Title'
import { AiOutlineClose } from 'react-icons/ai'
import {
	createCollectionBanner,
	createCollectionCategories,
	createCollectionDescription,
	createCollectionImage,
	createCollectionName,
} from '../../store/postsSlice'
import { useDispatch, useSelector } from 'react-redux'
import Flex from '../UI/position/Flex'
import { UserAuth } from '../../context/AuthContext'

const CreateCollection = () => {
	const [modal, setModal] = useState(false)
	const [formIsValid, setFormIsValid] = useState(false)
	const [nicknameFilter]
	const { mainImage, banner, name, categories, collectionDescription } =
		useSelector((state) => state.posts)
	const dispatch = useDispatch()
	const {user} = UserAuth()

	useEffect(() => {
		fetch('http://localhost:3000/users')
			.then((responce) => responce.json())
			.then((result) => {
				setNicknameFilter(result)
			})
	}, [])

	let nickname = nicknameFilter.filter((el) => el.email === user.email)

	const collectionImageChange = (e) => {
		const [img] = e.target.files
		dispatch(createCollectionImage(URL.createObjectURL(img)))
	}

	const collectionBannerChange = (e) => {
		const [banner] = e.target.files
		dispatch(createCollectionBanner(URL.createObjectURL(banner)))
	}

	useEffect(() => {
		if (mainImage && banner && name.length > 0 && categories.length > 0) {
			setFormIsValid(true)
		} else {
			setFormIsValid(false)
		}
	}, [mainImage, banner, name, categories])

	const submitChangeHandler = (e) => {
		e.preventDefault()
		const data = {
			id: new Date().toLocaleString(),
			collectionImage: mainImage,
			collectionBanner: banner,
			collectionName: name,
			collectionCategories: categories,
			collectionDescription: collectionDescription,
			email: user.email
		}
		fetch('http://localhost:3000/Categories', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-type': 'application/json',
			},
		})
		dispatch(createCollectionImage(null))
		dispatch(createCollectionBanner(null))
		dispatch(createCollectionName(''))
		dispatch(createCollectionCategories(''))
		dispatch(createCollectionDescription(''))
		setModal(false)
	}

	return (
		<Fragment>
			<Text size='15px' weight='700' color='#000'>
				Коллекция*
			</Text>
			<Text>
				<SpecialText>
					Выберите одну из своих коллекций или добавьте новую
				</SpecialText>
			</Text>
			<CollectionContainer>
				<CollectionInput type='text' />
				<CollectionButton onClick={() => setModal(true)}>
					+
				</CollectionButton>
				{modal ? (
					<Modal onClick={() => setModal(false)}>
						<ModalContent
							onClick={(e) => e.stopPropagation()}
						>
							<ModalHeader>
								<Title color='#000000' size='22px'>
									Создание коллекции
								</Title>
								<CloseBtn onClick={() => setModal(false)}>
									<ImageClose />
								</CloseBtn>
							</ModalHeader>
							<Text weight='700' color='#000000' size='14px'>
								Главное изображение*
							</Text>
							<Text>
								<SpecialText>
									Будет отображаться как превью коллекции
								</SpecialText>
							</Text>
							<SpecialText>
								Рекомендуемые размеры для изображения
							</SpecialText>
							<SpecialText>
								2000х2000 пикселей. (Минимальный 1000х1000)
							</SpecialText>
							<input
								id='mainImg'
								style={{ display: 'none' }}
								type='file'
								onChange={collectionImageChange}
							/>
							<BackroundContainer img={mainImage}>
								<label htmlFor='mainImg'>
									<Span>Загрузить файл</Span>
									{mainImage === null ? (
										<Text color='red' weight='700'>
											Главное изображение обязательно
										</Text>
									) : (
										''
									)}
								</label>
							</BackroundContainer>
							<Text weight='700' color='000000' size='14px'>
								Баннер
							</Text>
							<SpecialText>
								Рекомендуемые размеры для баннера 1920х250
								пикселей
							</SpecialText>
							<input
								style={{ display: 'none' }}
								id='banner'
								type='file'
								onChange={collectionBannerChange}
							/>
							<BannerFile bannerImage={banner}>
								<label htmlFor='banner'>
									<Span>Загрузить файл</Span>
								</label>
							</BannerFile>
							<Text color='#000000' size='14px' weight='700'>
								Название*
							</Text>
							{name.length > 0 ? (
								''
							) : (
								<Text color='red' weight='700'>
									Поле Название обязательно
								</Text>
							)}
							<InputName
								type='text'
								onChange={(e) =>
									dispatch(
										createCollectionName(e.target.value),
									)
								}
							/>
							<Text color='#000000' size='14px' weight='700'>
								Категория*
							</Text>
							{categories.length > 0 ? (
								''
							) : (
								<Text color='red' weight='700'>
									поле Категория обязательно
								</Text>
							)}
							<CategoriesSelect
								onChange={(e) =>
									dispatch(
										createCollectionCategories(
											e.target.value,
										),
									)
								}
							>
								<option value='art'>Искусство</option>
								<option value='sport'>Спорт</option>
								<option value='music'>Музыка</option>
								<option value='photo'>Фотография</option>
								<option value='collectibles'>
									Коллекционные предметы
								</option>
								<option value='virtualworlds'>
									Виртуальные миры
								</option>
							</CategoriesSelect>
							<Text color='#000000' size='14px' weight='700'>
								Описание
							</Text>
							<Description
								onChange={(e) =>
									dispatch(
										createCollectionDescription(
											e.target.value,
										),
									)
								}
								placeholder='Введите описание'
							/>
							<Flex
								align='center'
								width='100%'
								justify='center'
								margin='40px 0'
							>
								<SubmitButton
									onClick={submitChangeHandler}
									disabled={!formIsValid}
								>
									Создать
								</SubmitButton>
							</Flex>
						</ModalContent>
					</Modal>
				) : (
					''
				)}
			</CollectionContainer>
		</Fragment>
	)
}

const CollectionContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`

const SpecialText = styled.p`
	margin: 0;
	font-size: 15px;
	color: #8f9499;
	max-width: 480px;
	width: 100%;
	line-height: 20px;
`

const CollectionInput = styled.input`
	width: 84%;
	height: 62px;
	background: #fafafa;
	box-shadow: 0 4px 3px 0 rgb(103 59 183 / 10%);
	border-radius: 35px;
	border: none;
	outline: none;
	font-size: 16px;
	padding: 0 20px;
	margin-bottom: 30px;
`

const CollectionButton = styled.div`
	width: 62px;
	height: 62px;
	border-radius: 50%;
	background: #fafafa;
	box-shadow: 0 4px 3px rgb(103 59 183 / 10%);
	font-size: 40px;
	color: #673bb7;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`

const Modal = styled.div`
	max-width: 2050px;
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.2);
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow-y: auto;
	overflow-x: hidden;
	padding-top: 140px;
	padding-bottom: 80px;
	z-index: var(--vs-zindex-2);
`

const ModalContent = styled.div`
	padding: 30px;
	border-radius: 12px;
	background-color: #fafafa;
	max-width: 560px;
	width: 100%;
	min-height: min-content;
	max-height: max-content;
	margin-top: 830px;
`

const ModalHeader = styled.header`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const CloseBtn = styled.button`
	border: 2px solid #8f9499;
	background: #fff;
	border-radius: 50%;
	width: 30px;
	height: 30px;
	display: flex;
	align-items: center;
	cursor: pointer;
`

const ImageClose = styled(AiOutlineClose)`
	color: #8f9499;
	height: 26px;
	width: 26px;
`

const BackroundContainer = styled.div`
	background-image: url(${(props) => props.img});
	width: 270px;
	height: 270px;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 4px 3px rgb(103 59 183 / 10%);
	border-radius: 12px;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: 50% 50%;
	margin-bottom: 25px 0;
	text-align: center;
`

const Span = styled.span`
	color: #8f9499;
	text-decoration: underline;
	cursor: pointer;
`

const BannerFile = styled.div`
	width: 480px;
	height: 62px;
	background-image: url(${(props) => props.bannerImage});
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 4px 3px rgb(103 59 183 / 10%);
	border-radius: 12px;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: 50% 50%;
	margin: 10px 0;
`

const InputName = styled.input`
	box-shadow: 0 4px 3px 0 rgb(103 59 183 / 10%);
	width: 100%;
	height: 62px;
	background: #fff;
	font-size: 16px;
	padding-left: 30px;
	border: none;
	border-radius: 35px;
	outline: none;
	margin-bottom: 25px;
`

const CategoriesSelect = styled.select`
	width: 100%;
	border-radius: 30px;
	box-shadow: 0 4px 3px 0 rgb(103 59 183 / 10%);
	height: 62px;
	background: #fff;
	outline: none;
	padding: 0 30px;
	color: #8f9499;
	border: none;
	font-size: 18px;
	margin-bottom: 30px;
`

const Description = styled.textarea`
	resize: none;
	width: 100%;
	font-size: 16px;
	box-shadow: 0 4px 3px 0 rgb(103 59 183 / 10%);
	height: 250px;
	padding: 20px;
	border: none;
	outline: none;
	resize: none;
	background: #fafafa;
	border-radius: 25px;
`

const SubmitButton = styled.button`
	width: 170px;
	height: 60px;
	background-color: #673bb7;
	border: 1px solid #673bb7;
	border-radius: 30px;
	box-shadow: 0 4px 3px rgb(103 59 183 / 10%);
	font-size: 16px;
	letter-spacing: 0.8px;
	cursor: pointer;
	color: #ffffff;
	font-weight: 700;
`

export default CreateCollection
