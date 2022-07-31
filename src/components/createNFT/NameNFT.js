import { Fragment } from 'react'
import styled from 'styled-components'
import Text from '../UI/typography/Text'
import { useDispatch } from 'react-redux'
import { createName } from '../../store/postsSlice'

const NameNFT = ({value}) => {
	const dispatch = useDispatch()

	return (
		<Fragment>
			<Text size='15px' weight='700' color='#000'>
				Название*
			</Text>
			{value.length === 0 ? <Text color="red" weight="700">Поле Название обязательно</Text> : ''}
			<InputForm
				onChange={(e) => dispatch(createName(e.target.value))}
				type='text'
				placeholder='Введите название'
				value={value}
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
