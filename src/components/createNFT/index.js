import styled from 'styled-components'
import Text from '../UI/typography/Text'
import CreateCollection from './CreateCollection'
import ImageNFT from './ImageNFT'
import NameNFT from './NameNFT'
import DescriptionNFT from './DescriptionNFT'
import Reference from './Reference'
import Content from './Content'
import Price from './Pirce'
import { useCallback, useState } from 'react'

const CreateFormNFT = () => {
	const [NFTImage, setNFTImage] = useState('')
	const [NFTName, setNFTName] = useState('')
	const [description, setDescription] = useState('')
	const [reference, setReference] = useState('')
	const [content, setContent] = useState('')
	const [price, setPrice] = useState()
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
			collection: {
				categories: 'music',
			},
		}
		fetch('http://localhost:3000/employees', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-type': 'application/json',
			},
		})
	}

	const getImage = useCallback((url) => {
		setNFTImage(url)
	}, [])

	const getName = useCallback((NFTName) => {
		setNFTName(NFTName)
	}, [])

	const getDescription = useCallback((get) => {
		setDescription(get)
	}, [])

	const getReference = useCallback((referenceUrl) => {
		setReference(referenceUrl)
	}, [])

	const getContent = useCallback((getContent) => {
		setContent(getContent)
	}, [])

	const getPrice = useCallback((price) => {
		setPrice(price)
	}, [])

	return (
		<FormContainer onSubmit={submitHandler}>
			<ImageNFT image={getImage} />
			<NameNFT name={getName} />
			<DescriptionNFT description={getDescription} />
			<Reference reference={getReference} />
			<CreateCollection />
			<Content content={getContent} />
			<Price price={getPrice} />
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
			<SubmitButton type='submit'>Создать</SubmitButton>
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
