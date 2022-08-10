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
                    <SumTb>1 100 ₽</SumTb>
                </Tr>
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

const Tr = styled.tr`
    width: 100%;
    display: flex;
`

const DateTh = styled.th`
    max-width: 385px;
    width: 100%;
`

const NumberTh = styled.th`
    max-width: 200px;
    width: 100%;
`

const DescriptionTh = styled.th`
    max-width: 385px;
    width: 100%;
`

const SumTh = styled.th`
    max-width: 200px;
    width: 100%;
`

const DateTb = styled.tb`
    max-width: 385px;
    width: 100%;
`

const NumberTb = styled.tb`
    max-width: 200px;
    width: 100%;
`

const DescriptionTb = styled.tb`
    max-width: 385px;
    width: 100%;
`

const SumTb = styled.tb`
    max-width: 200px;
    width: 100%;
`

export default Payments
