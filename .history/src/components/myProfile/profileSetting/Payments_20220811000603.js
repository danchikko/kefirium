import styled from 'styled-components'
import Title from '../../UI/typography/Title'
import Text from '../../UI/typography/Text'

const Payments = () => {
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
						<th>Дата</th>
						<th>№</th>
						<th>Описание</th>
						<th>Сумма</th>
					</Tr>
				</Thead>
				<TBody>
					<Tr>
						<td>6 дней назад</td>
						<td>190</td>
						<td>Оплата нтф токена</td>
						<td>1 100 ₽</td>
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

const DateTh = styled`
    max-width: 380px;
    width: 100%;
    ali
`

export default Payments
