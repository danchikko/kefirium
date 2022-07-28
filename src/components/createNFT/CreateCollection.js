import { Fragment, useState } from 'react'
import styled from 'styled-components'
import Text from '../UI/typography/Text'
import Title from '../UI/typography/Title'
import { AiOutlineClose } from 'react-icons/ai'

const CreateCollection = () => {
	const [modal, setModal] = useState(false)
	const [mainImage, setMainImage] = useState(null)

	const handleOnChange = (e) => {
		const [file] = e.target.files
		setMainImage(URL.createObjectURL(file))
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
						<ModalContent onClick={(e) => e.stopPropagation()}>
							<ModalHeader>
								<Title color='#000000' size='22px'>
									Создание коллекции
								</Title>
								<CloseBtn onClick={() => setModal(false)}>
									<ImageClose />
								</CloseBtn>
							</ModalHeader>
							<Text color='#000000' size='14px'>
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
							<input id='mainImg' style={{display: "none"}} type="file" onChange={handleOnChange}/>
							<BackroundContainer img={mainImage}>
								<label htmlFor='mainImg'>
									<Span>Загрузить файл</Span>
								</label>
							</BackroundContainer>
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
	display: flex;
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
	width: 100%;
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

const CollectionButton = styled.button`
	width: 62px;
	height: 62px;
	border-radius: 50%;
	border: none;
	background: #fafafa;
	box-shadow: 0 4px 3px rgb(103 59 183 / 10%);
	font-size: 40px;
	color: #673bb7;
	margin-left: 10px;
`

const Modal = styled.div`
	max-width: 1350px;
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
	padding-top: 80px;
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
`

const Span = styled.span`
	color: #8f9499;
	text-decoration: underline;
	cursor: pointer;
`

export default CreateCollection
