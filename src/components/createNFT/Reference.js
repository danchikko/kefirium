import { Fragment } from 'react'
import styled from 'styled-components'
import Text from '../UI/typography/Text'
import { useDispatch } from 'react-redux'
import { createReference } from '../../store/postsSlice'

const Reference = ({value}) => {
	const dispatch = useDispatch()

	return (
		<Fragment>
			<Text size='15px' weight='700' color='#000'>
				Внешняя ссылка
			</Text>
			<Text>
				<SpecialText>
					Если у вас есть ссылка на внешний ресурс с описанием этого
					NFT (например. ваш личный сайт), можете добавить ее
				</SpecialText>
			</Text>
			<InputReference
				onChange={(e) => dispatch(createReference(e.target.value))}
				type='text'
				placeholder='Введите ссылку'
				value={value}
			/>
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

const InputReference = styled.input`
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

export default Reference
