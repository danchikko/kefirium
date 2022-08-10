import styled from 'styled-components'
import Title from '../../UI/typography/Title'
import Text from '../../UI/typography/Text'

const Payments = () => {
    const data = [
        {id: 1, date: '6 д'}
    ]
	return (
		<Container>
			<Title margin='40px 0 15px 0' size='25px' color='#000000'>
				Баланс
			</Title>
			<Text size='25px' color='#673bb7'>
				- После продажи вами токенов вы сможете вывести средства на свою
				карту
			</Text>
			<Table>
				<Thead>
					<Tr>
						<DateTh>Дата</DateTh>
						<NumberTh>№</NumberTh>
						<DescriptionTh>Описание</DescriptionTh>
						<SumTh>Сумма</SumTh>
					</Tr>
				</Thead>
				<TBody>
					<Tr>
						<tb>6 дней назад</tb>
						<tb>190</tb>
						<tb>Оплата нтф токена</tb>
						<tb>1 100 ₽</tb>
					</Tr>
				</TBody>
			</Table>
		</Container>
	)
}

const Container = styled.div`
	max-width: 1170px;
	width: 100%;
`

const Table = styled.table`
	width: 100%;
`

const Thead = styled.thead`
	display: table-header-group;
	vertical-align: middle;
	border-color: inherit;
	width: 100%;
`

const Tr = styled.tr`
	display: flex;
	justify-content: space-between;
	width: 100%;
`

const TBody = styled.tbody`
	margin-top: 28px;
	width: 100%;
	display: block;
`

const DateTh = styled.th`
	max-width: 292.5px;
	width: 100%;
	display: flex;
	justify-content: flex-start;
`

const NumberTh = styled.th`
	max-width: 292.5px;
	width: 100%;
	display: flex;
	justify-content: flex-start;
`

const DescriptionTh = styled.th`
	max-width: 292.5px;
	width: 100%;
	display: flex;
	justify-content: flex-start;
`

const SumTh = styled.th`
	max-width: 292.5px;
	width: 100%;
	display: flex;
	justify-content: flex-start;
`

export default Payments
