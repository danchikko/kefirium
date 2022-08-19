import styled from 'styled-components'
import Title from '../../components/UI/typography/Title'
import { IoCartOutline } from 'react-icons/io5'
import Flex from '../../components/UI/position/Flex'
import { Fragment } from 'react'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const ActivityHistory = () => {
	const [data, setData] = useSearchParams

	useEffect(() => {
		fetch(`http://localhost:3000/NFTtokens/${id}`)
			.then((responce) => responce.json())
			.then((data) => setTokens(data))
	}, [id])

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
							<Fragment key={el.id}>
								<Tr>
									<Td>+ {el.create}</Td>
									<Td>{el.price}</Td>
									<Td>{el.buyer}</Td>
									<Td>{el.salesman}</Td>
									<Td>{el.time}</Td>
								</Tr>
								<Tr>
									<Td>
										<IoCartOutline />
										{el.sale}
									</Td>
									<Td>{el.salePrice}</Td>
									<Td>{el.buyer}</Td>
									<Td>{el.salesman}</Td>
									<Td>{el.time}</Td>
								</Tr>
							</Fragment>
						)
					})}
				</TBody>
			</Table>
			<Flex justify='center'>
				<OpenCollection>Открыть коллекцию</OpenCollection>
			</Flex>
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

const OpenCollection = styled.button`
	width: 273px;
	height: 60px;
	border-radius: 30px;
	font-size: 16px;
	line-height: 20px;
	color: #fafafa;
	font-weight: 700;
	background-color: #673bb7;
	border: none;
	margin: 70px 0;
	cursor: pointer;
	:hover {
		box-shadow: 0px 4px 12pxrgb (83 22 193 / 30%);
	}
`

export default ActivityHistory
