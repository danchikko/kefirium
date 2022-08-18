import styled from 'styled-components'
import Title from '../../components/UI/typography/Title'

const ActivityHistory = () => {
	const data = [
		{
			id: 1,
			create: 'Создание',
			sale: 'Выставлен на продажу',
			price: 1100,
			salePrice: 1100,
			buyer: '',
			salesman: 'daniar',
			time: '3 месяца назад',
		},
		{
			id: 2,
			create: 'Создание',
			sale: 'Выставлен на продажу',
			price: 1100,
			salePrice: 1100,
			buyer: '',
			salesman: 'daniar',
			time: '3 месяца назад',
		},
	]

	return (
		<Container>
			<Title size='15px' color='#8f9499' margin='0 0 30px 0'>
				История активности
			</Title>
			<Table>
				<Thead>
					<Tr>
						<th>Тип</th>
						<th>Цена</th>
						<th>Покупатель</th>
						<th>Продавец</th>
						<th>Время</th>
					</Tr>
				</Thead>
				<TBody>
					
				</TBody>
			</Table>
		</Container>
	)
}

const Container = styled.div`
	max-width: 1170px;
	margin: 0 auto;
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
	margin: 20px 0 28px 0;
	& th {
		color: #8f9499;
	}
`

const TBody = styled.tbody`
	margin-top: 28px;
	width: 100%;
	display: block;
`

export default ActivityHistory
