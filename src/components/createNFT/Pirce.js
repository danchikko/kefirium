import { Fragment, useState } from "react"
import styled from "styled-components"
import Text from "../UI/typography/Text"
import { BiRuble } from "react-icons/bi"

const Price = (props) => {
	const [state, setState] = useState()

	const priceChangeHandler = (e) => {
		setState(e.target.value)
	}

	props.price(state)

    return (
        <Fragment>
			<Text color='#000' size='15px' weight='700'>
				Цена*
			</Text>
			<Text>
				<SpecialText>Минимальная - 59 ₽</SpecialText>
				<SpecialText>Максимальная - 1 млрд ₽</SpecialText>
			</Text>
			<PriceBlock>
				<InputPrice onChange={priceChangeHandler} min='0' type='number' placeholder='Введите цену' />
				<BiRuble />
			</PriceBlock>
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

export default Price;