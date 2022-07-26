import styled from 'styled-components'
import Text from '../UI/typography/Text'
import CreateCollection from './CreateCollection'
import { IoIosRadioButtonOff } from 'react-icons/io'
import { useState } from 'react'
import { BiRuble } from 'react-icons/bi'

const CreateFormNFT = () => {
	const [content, setContent] = useState(false)

	const contentChangeHandler = () => {
		setContent((prevState) => !prevState)
	}

	return (
		<FormContainer>
			<CreateNFTInput type='file' id='inputFileNFT' />
			<Text color='#000000' weight='700' size='15px'>
				Изображение, видео, аудио, 3d модель*
			</Text>
			<Text>
				<SpecialText>
					Вы можете загрузить файл в формате JPG, PNG, GIF, MP4, WEBM,
				</SpecialText>
				<SpecialText>MP3, WAV, OGG,и OBJ.</SpecialText>
				<SpecialText>Максимальный размер файла — 100 МБ.</SpecialText>
			</Text>
			<Text color='#8f9499' line='20px'>
				<SpecialText>
					Рекомендуемые размеры для изображения/гифки
				</SpecialText>
				<SpecialText>2000х2000 px.</SpecialText>
				<SpecialText>(Минимальный 1000х1000)</SpecialText>
			</Text>
			<CreateNFTFile>
				<label htmlFor='inputFileNFT'>
					<Span>Загрузить файл</Span>
				</label>
			</CreateNFTFile>
			<Text size='15px' weight='700' color='#000'>
				Название*
			</Text>
			<InputForm type='text' placeholder='Введите название' />
			<Text size='15px' weight='700' color='#000'>
				Описание*
			</Text>
			<TextArea placeholder='Введите описание' />
			<Text size='15px' weight='700' color='#000'>
				Внешняя ссылка
			</Text>
			<Text>
				<SpecialText>
					Если у вас есть ссылка на внешний ресурс с описанием этого
					NFT (например. ваш личный сайт), можете добавить ее
				</SpecialText>
			</Text>
			<InputForm type='text' placeholder='Введите ссылку' />
			<Text size='15px' weight='700' color='#000'>
				Коллекция*
			</Text>
			<Text>
				<SpecialText>
					Выберите одну из своих коллекций или добавьте новую
				</SpecialText>
			</Text>
			<CreateCollection />
			<ContentDiv>
				<Text size='15px' weight='700' color='#000'>
					Скрытый контент
				</Text>
				<ContentClick
					style={{
						background: content ? '#673bb7' : '#f0f3f4',
					}}
					onClick={contentChangeHandler}
				>
					{content ? <RadioTrue /> : <RadioFalse />}
				</ContentClick>
			</ContentDiv>
			<Text>
				<SpecialText>
					Добавьте контент, который будет видеть только владелец NFT
				</SpecialText>
			</Text>
			{content ? (
				<TextArea placeholder='Добавьте скрытый контент в виде текста и/или ссылки на внешний ресурс, например Яндекс.Диск' />
			) : (
				''
			)}
			<Text color='#000' size='15px' weight='700'>
				Цена*
			</Text>
			<Text>
				<SpecialText>Минимальная - 59 ₽</SpecialText>
				<SpecialText>Максимальная - 1 млрд ₽</SpecialText>
			</Text>
			<PriceBlock>
				<InputPrice min='0' type='number' placeholder='Введите цену' />
				<BiRuble />
			</PriceBlock>
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
			<SubmitButton>Создать</SubmitButton>
		</FormContainer>
	)
}

const FormContainer = styled.form`
	max-width: 480px;
	width: 100%;
`

const CreateNFTInput = styled.input`
	display: none;
`

const SpecialText = styled.p`
	margin: 0;
	font-size: 15px;
	color: #8f9499;
	max-width: 480px;
	width: 100%;
	line-height: 20px;
`

const CreateNFTFile = styled.div`
	margin-bottom: 30px;
	max-width: 270px;
	width: 100%;
	height: 270px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #fafafa;
	border-radius: 12px;
	box-shadow: 0 4px 3px rgb(103 59 183 / 10%);
	background-repeat: no-repeat;
	font-family: Montserrat-Medium;
	background-size: cover;
`

const Span = styled.span`
	cursor: pointer;
	text-decoration: underline;
	color: #8f9499;
	font-size: 14px;
`

const InputForm = styled.input`
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

const TextArea = styled.textarea`
	max-width: 480px;
	width: 100%;
	height: 250px;
	box-shadow: 0 4px 3px 0 rgb(103 59 183 / 10%);
	border-radius: 30px;
	padding: 10px 17px;
	font-size: 17px;
	border: none;
	outline: none;
	resize: none;
	background: #fafafa;
	margin-bottom: 25px;
`

const ContentDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`

const ContentClick = styled.div`
	width: 56px;
	height: 32px;
	font-size: 27px;
	border-radius: 18px;
	border: none;
	display: flex;
	align-items: center;
`

const RadioFalse = styled(IoIosRadioButtonOff)`
	color: #fff;
	background: #fff;
	border-radius: 50%;
	width: 20px;
	height: 20px;
	margin-left: 5px;
`

const RadioTrue = styled(IoIosRadioButtonOff)`
	color: #fff;
	background: #fff;
	border-radius: 50%;
	width: 20px;
	height: 20px;
	margin-left: 32px;
`

const PriceBlock = styled.div`
	display: flex;
	max-width: 480px;
	width: 100%;
	height: 62px;
	background: #fafafa;
	box-shadow: 0 4px 3px 0 rgb(103 59 183 / 10%);
	border-radius: 35px;
	align-items: center;
	margin-bottom: 25px;
`

const InputPrice = styled.input`
	margin-left: 15px;
	font-size: 16px;
	max-width: 440px;
	width: 100%;
	outline: none;
	border: none;
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
