import { Fragment, useCallback } from 'react'
import styled from 'styled-components'
import Text from '../UI/typography/Text'
import { useDispatch } from 'react-redux/es/exports'
import { createImage } from '../../store/postsSlice'

const ImageNFT = ({img}) => {
	const dispatch = useDispatch()

	const mainImageChangeHandler = useCallback((e) => {
		const [file] = e.target.files
		dispatch(createImage(URL.createObjectURL(file)))
	}])

	return (
		<Fragment>
			<CreateNFTInput
				onChange={mainImageChangeHandler}
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
			<CreateNFTFile url={img}>
				<label htmlFor='inputFileNFT'>
					<Span>Загрузить файл</Span>
					{img === null ? <p style={{color: 'red', fontWeight: 600}}>Файл обязателен</p> : ''}
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
	flex-direction: column;
	border-radius: 12px;
	box-shadow: 0 4px 3px rgb(103 59 183 / 10%);
	background-image: url(${(props) => props.url});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	object-fit: cover;
	text-align: center;
`

const Span = styled.span`
	cursor: pointer;
	text-decoration: underline;
	color: #8f9499;
	font-size: 14px;
`

export default ImageNFT
