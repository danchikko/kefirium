import { Fragment, useState } from 'react'
import styled from 'styled-components'
import Text from '../UI/typography/Text'

const ImageNFT = (props) => {
	const [url, setUrl] = useState()
	const [background, setBackground] = useState(false)

	const onImageChange = (e) => {
		const [file] = e.target.files
		setUrl(URL.createObjectURL(file))
		setBackground(true)
	}

	props.image(url)

	return (
		<Fragment>
			<CreateNFTInput
				onChange={onImageChange}
				type='file'
				id='inputFileNFT'
			/>
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
				<BackgroundImage
					src={url}
					alt='image'
					style={{ display: background ? 'block' : 'none' }}
				/>
				<label htmlFor='inputFileNFT'>
					<Span style={{display: background ? 'none' : 'block'}}>Загрузить файл</Span>
				</label>
			</CreateNFTFile>
		</Fragment>
	)
}

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
`

const BackgroundImage = styled.img`
	max-width: 270px;
	width: 100%;
	height: 270px;
	background-repeat: no-repeat;
	background-size: cover;
	border-radius: 12px;
    object-fit: cover;
    background-position: center;
`

const Span = styled.span`
	cursor: pointer;
	text-decoration: underline;
	color: #8f9499;
	font-size: 14px;
`

export default ImageNFT
