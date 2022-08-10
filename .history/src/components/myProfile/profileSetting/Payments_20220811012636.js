import styled from 'styled-components'
import Title from '../../UI/typography/Title'
import Text from '../../UI/typography/Text'

const Payments = () => {
	const data = [
		{
			id: 1,
			date: '6 дней',
			number: 190,
			description: 'Оплата нтф токена',
			sum: '1100 ₽',
		},
		{
			id: 2,
			date: '6 дней',
			number: 190,
			description: 'Оплата нтф токена',
			sum: '1100 ₽',
		},
		{
			id: 3,
			date: '6 дней',
			number: 190,
			description: 'Оплата нтф токена',
			sum: '1100 ₽',
		},
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
			<Table cellSpacing='0'>
				<Thead>
					<Tr>
						<th>Дата</th>
						<th>№</th>
						<th>Описание</th>
						<th>Сумма</th>
					</Tr>
				</Thead>
				<TBody>
					{data.map((el) => {
						return (
							<Tr key={el.id}>
								<tb>{el.date}</tb>
								<tb>{el.}</tb>
								<tb>Оплата нтф токена</tb>
								<tb>1 100 ₽</tb>
							</Tr>
						)
					})}
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

export default Payments
