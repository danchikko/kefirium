import styled from 'styled-components'
import Title from '../../components/UI/typography/Title'
import {IoCartOutline} from 'react-icons/io5'

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
						<Th>Тип</Th>
						<Th>Цена</Th>
						<Th>Покупатель</Th>
						<Th>Продавец</Th>
						<Th>Время</Th>
					</Tr>
				</Thead>
				<TBody>
					{data.map((el) => {
						return (
							<>
								<Tr>
									<td>+ {el.create}</td>
									<td>{el.price}</td>
									<td>{el.buyer}</td>
									<td>{el.salesman}</td>
									<td>{el.time}</td>
								</Tr>
								<Tr>
									<SaleTd><IoCartOutline />{el.sale}</SaleTd>
									<td>{el.salePrice}</td>
									<td>{el.buyer}</td>
									<td>{el.salesman}</td>
									<td>{el.time}</td>
								</Tr>
							</>
						)
					})}
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

const Th = styled.th`
	max-width: 234px;
	width: 100%;
	display: flex;
	justify-content: flex-start;
	font-size: 14px;
`

const Td = styled.td`
	max-width: 234px;
	width: 100%;
	display: flex;
	justify-content: flex-start;
`

export default ActivityHistory
