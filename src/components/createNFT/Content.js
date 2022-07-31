import { Fragment, useState } from 'react'
import styled from 'styled-components'
import Text from '../UI/typography/Text'
import { IoIosRadioButtonOff } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { createContent } from '../../store/postsSlice'

const Content = ({value}) => {
	const [onContent, setOnContent] = useState(false)

	const dispatch = useDispatch()

	const contentChangeHandler = () => {
		setOnContent((prevState) => !prevState)
	}

	return (
		<Fragment>
			<ContentDiv>
				<Text size='15px' weight='700' color='#000'>
					Скрытый контент
				</Text>
				<ContentClick
					style={{
						background: onContent ? '#673bb7' : '#f0f3f4',
					}}
					onClick={contentChangeHandler}
				>
					{onContent ? <RadioTrue /> : <RadioFalse />}
				</ContentClick>
			</ContentDiv>
			<Text>
				<SpecialText>
					Добавьте контент, который будет видеть только владелец NFT
				</SpecialText>
			</Text>
			{onContent ? (
				<TextArea
					onChange={(e) => dispatch(createContent(e.target.value))}
					placeholder='Добавьте скрытый контент в виде текста и/или ссылки на внешний ресурс, например Яндекс.Диск'
					value={value}
				/>
			) : (
				''
			)}
		</Fragment>
	)
}

const SpecialText = styled.p`
	margin: 0;
	font-size: 15px;
	color: #8f9499;
	max-width: 480px;
	width: 100%;
	line-height: 20px;
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
	cursor: pointer;
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

export default Content
