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
			<t>
				<Tr>
					<th>Дата</th>
					<th>№</th>
                    <th>Описание</th>
                    <th>Сумма</th>
				</Tr>
                <Tr>
                    <tb>6 дней назад</tb>
                    <tb>190</tb>
                    <tb>Оплата нтф токена</tb>
                    <tb>1 100 ₽</tb>
                </Tr>
			</t>
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

const Tr = styled.tr`
    width: 100%;
    display: flex;
`

export default Payments
