import { Fragment, useState } from 'react'
import styled from 'styled-components'
import Text from '../UI/typography/Text'

const DescriptionNFT = (props) => {
	const [description, setDescription] = useState('')

	const descriptionChangeHandler = (e) => {
		setDescription(e.target.value)
	}

	props.description(description)

	return (
		<Fragment>
			<Text size='15px' weight='700' color='#000'>
				Описание*
			</Text>
			<TextArea onChange={descriptionChangeHandler} placeholder='Введите описание' />
		</Fragment>
	)
}

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

export default DescriptionNFT
