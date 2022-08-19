import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import {IoCartOutline } from 'react-icons/io'

const HistoryActivity = () => {
    const [data, setData] = useState(null)
	const { id } = useParams()

	useEffect(() => {
		fetch(`http://localhost:3000/Categories/${id}`)
			.then((responce) => responce.json())
			.then((result) => setData(result))
	}, [id])
    return (
        <Container>
            {data && (
                <Table>
				<Thead>
					<Tr>
						<Th>Тип</Th>
                        <Th>предмет</Th>
						<Th>Цена</Th>
						<Th>Покупатель</Th>
						<Th>Продавец</Th>
						<Th>Время</Th>
					</Tr>
				</Thead>
				<TBody>
					<Tr>
						<Td>+ Создание</Td>
						<Td>{data.price}</Td>
						<Td>{}</Td>
						<Td>{data.nickname}</Td>
						<Td>1 месяца назад</Td>
					</Tr>
					<Tr>
						<Td>
							<IoCartOutline />
							Выставлен на продажу
						</Td>
						<Td>{data.price}</Td>
						<Td>{}</Td>
						<Td>{data.nickname}</Td>
						<Td>1 месяца назад</Td>
					</Tr>
				</TBody>
			</Table>
            )}
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
	max-width: 195px;
	width: 100%;
	display: flex;
	justify-content: flex-start;
	font-size: 14px;
`

const Td = styled.td`
	max-width: 195px;
	width: 100%;
	display: flex;
	justify-content: flex-start;
`


export default HistoryActivity;