import styled from 'styled-components'
import Text from '../UI/typography/Text'
import CreateCollection from './CreateCollection'
import ImageNFT from './ImageNFT'
import NameNFT from './NameNFT'
import DescriptionNFT from './DescriptionNFT'
import Reference from './Reference'
import Content from './Content'
import Price from './Pirce'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	createContent,
	createDescription,
	createImage,
	createName,
	createPrice,
	createReference,
} from '../../store/postsSlice'
import { UserAuth } from '../../context/AuthContext'

const CreateFormNFT = () => {
	const {user} = UserAuth()
	const [nicknameFilter, setNicknameFilter] = useState([])
	const [formIsValid, setFormIsValid] = useState(false)
	const dani = [
		{id: 2, name: 'daniar',},
		{id: 4, name: 'alish'}
	]
	console.log(nicknameFilter.map((el.filter((item) => )) => el.nickname))

	const dispatch = useDispatch()

	const {
		NFTImage,
		NFTName,
		description,
		reference,
		content,
		price,
	} = useSelector((state) => state.posts)

	useEffect(() => {
		fetch('http://localhost:3000/users')
		.then((responce) => responce.json())
		.then((result) => setNicknameFilter(result))
	}, [])

	useEffect(() => {
		if (
			NFTImage &&
			NFTName.length > 0 &&
			description.length > 0 &&
			price > 58
		) {
			setFormIsValid(true)
		} else {
			setFormIsValid(false)
		}
	}, [NFTImage, NFTName, description, price])

	const submitHandler = (e) => {
		e.preventDefault()

		const data = {
			id: new Date().toLocaleString(),
			NFTImage: NFTImage,
			NFTName: NFTName,
			description: description,
			reference: reference,
			content: content,
			price: price,
			email: user.email,
		}
		fetch('http://localhost:3000/NFTtokens', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-type': 'application/json',
			},
		})
		dispatch(createImage(null))
		dispatch(createName(''))
		dispatch(createDescription(''))
		dispatch(createReference(''))
		dispatch(createContent(''))
		dispatch(createPrice(''))
	}

	return (
		<FormContainer onSubmit={submitHandler}>
			<ImageNFT img={NFTImage} />
			<NameNFT value={NFTName} />
			<DescriptionNFT value={description} />
			<Reference value={reference} />
			<CreateCollection />
			<Content value={content} />
			<Price value={price} />
			<Text color='#000' size='15px' weight='700'>
				Роялти*
			</Text>
			<Text>
				<SpecialText>
					Взимайте плату, когда пользователь повторно продает предмет,
					который вы изначально создали. Эта сумма вычитается из
					окончательной цены продажи и выплачивается ежемесячно на
					адрес выплаты по вашему выбору. (Фиксированное роялти 5%)
				</SpecialText>
			</Text>
			<SubmitButton type='submit' disabled={!formIsValid}>
				Создать
			</SubmitButton>
		</FormContainer>
	)
}

const FormContainer = styled.form`
	max-width: 480px;
	width: 100%;
`
const SpecialText = styled.p`
	margin: 0;
	font-size: 15px;
	color: #8f9499;
	max-width: 480px;
	width: 100%;
	line-height: 20px;
`

const SubmitButton = styled.button`
	width: 170px;
	height: 60px;
	background: #673bb7;
	border: 1px solid #673bb7;
	border-radius: 30px;
	box-shadow: 0 4px 3px rgb(103 59 183 / 10%);
	margin: 50px 0;
	color: #fff;
	font-size: 18px;
	font-weight: 700;
`

export default CreateFormNFT
