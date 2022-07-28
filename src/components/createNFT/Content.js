import { Fragment, useState } from 'react'
import styled from 'styled-components'
import Text from '../UI/typography/Text'
import { IoIosRadioButtonOff } from 'react-icons/io'

const Content = (props) => {
	const [content, setContent] = useState(false)
	const [state, setState] = useState('')

	const contentChangeHandler = () => {
		setContent((prevState) => !prevState)
	}

	const onStateHandler = (e) => {
		setState(e.target.value)
	}

	props.content(state)

	return (
		<Fragment>
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
				<TextArea
					onChange={onStateHandler}
					placeholder='Добавьте скрытый контент в виде текста и/или ссылки на внешний ресурс, например Яндекс.Диск'
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
