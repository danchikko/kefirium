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
					<DateTh>Дата</DateTh>
					<NumberTh>№</NumberTh>
                    <DescriptionTh>Описание</DescriptionTh>
                    <SumTh>Сумма</SumTh>
				</Tr>
                <Tr>
                    <Tb>6 дней назад</Tb>
                    <Tb>190</Tb>
                    <Tb>Оплата нтф токена</Tb>
                    <Tb>1 100 ₽</Tb>
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
    justify-content: space-between;
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

const Tb = styled.tbody`
    color: #000000;
    font-size: 14px;
`

export default Payments
