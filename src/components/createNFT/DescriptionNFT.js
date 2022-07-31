import { Fragment } from 'react'
import styled from 'styled-components'
import Text from '../UI/typography/Text'
import { useDispatch } from 'react-redux'
import { createDescription } from '../../store/postsSlice'

const DescriptionNFT = ({value}) => {
	const dispatch = useDispatch()

	return (
		<Fragment>
			<Text size='15px' weight='700' color='#000'>
				Описание*
			</Text>
			{value.length === 0 ? <Text color="red" weight="700">Поле Описание обязательно.</Text> : ''}
			<TextArea
				onChange={(e) => dispatch(createDescription(e.target.value))}
				placeholder='Введите описание'
				value={value}
			/>
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
