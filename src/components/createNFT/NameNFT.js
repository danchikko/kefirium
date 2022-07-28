import { Fragment, useState } from 'react'
import styled from 'styled-components'
import Text from '../UI/typography/Text'

const NameNFT = (props) => {
	const [name, setName] = useState('')
 
	const nameChangeHandler = (e) => {
		setName(e.target.value)
	}

	props.name(name)

	return (
		<Fragment>
			<Text size='15px' weight='700' color='#000'>
				Название*
			</Text>
			<InputForm
				onChange={nameChangeHandler}
				type='text'
				placeholder='Введите название'
			/>
		</Fragment>
	)
}

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

export default NameNFT
