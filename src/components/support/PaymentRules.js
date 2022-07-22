import styled from 'styled-components'
import Text from '../UI/typography/Text'
import Title from '../UI/typography/Title'

const PaymentRules = () => {
	return (
		<Container>
			<Title margin='0 0 30px 0' size='40px' color='#000000'>
				Правила обработки платежей
			</Title>
			<Text>
				<b>1. Общие положения</b>
			</Text>
			<Text>
				<P>
					1.1. Предметом настоящих Правил обработки платежей (далее –
					«Правила») являются отношения между ООО «Талимейн» (далее по
					тексту – «Оператор»), ООО Небанковская кредитная организация
					«МОБИ.Деньги» (далее — «Оператор платежа») и пользователем
					сети Интернет (далее — «Пользователь»), совместно в
					дальнейшем именуемые «Стороны», возникающие при
					использовании Интернет-ресурса{' '}
					<A href='https://kefirium.ru/'>https://kefirium.ru/</A>,
					(далее – «Сайт»). Правила вступают в силу с момента
					выражения Пользователем согласия с ними в порядке,
					предусмотренном п. 1.3 Правил, и действуют бессрочно.
				</P>{' '}
				<P>
					1.2. Все существующие на данный момент способы обработки
					платежей, а также добавление новых регулируются настоящими
					Правилами. Правила могут быть изменены Оператором без
					какого-либо специального уведомления, новая редакция Правил
					вступает в силу с момента ее размещения в сети Интернет по
					указанному в настоящем абзаце адресу, если иное не
					предусмотрено новой редакцией Правил. Действующая редакция
					Правил всегда находится на страницах по адресу
					<A href='https://kefirium.ru/'>https://kefirium.ru/</A>
				</P>{' '}
				<P>
					1.3. Используя Сайт, какой-либо функционал Сайта и/или
					какой-либо сервис и/или его отдельные функции, Пользователь
					считается принявшим действующие Правила в полном объеме, без
					каких-либо оговорок и исключений. В случае несогласия
					Пользователя с какими-либо из положений Правил, Пользователь
					не вправе использовать Сайт. В случае, если Оператором были
					внесены какие-либо изменения в Правила в порядке,
					предусмотренном настоящим пунктом, с которыми Пользователь
					не согласен, он обязан прекратить использование Сайта.
				</P>{' '}
				1.4. В настоящих Правилах используются термины и определения,
				указанные в Оферте Пользователя, и размещенной на Сайте.
			</Text>
			<Text>
				<b>2. Виды платежных средств</b>
			</Text>
			<Text>
				2.1. Оператором платежа в целях осуществления денежных переводов
				принимаются карты платежных системы VISA, MasterCard, МИР.
			</Text>
			<Text>
				<b>3. Условия и сроки обработки платежей</b>
			</Text>
			<Text>
				3.1. Операции по банковским картам совершаются держателем карты
				либо уполномоченным им лицом в соответствующей форме Оператора
				платежа.
				<P>
					{' '}
					3.2. Авторизация операций по банковским картам
					осуществляется банком-эмитентом. Если у банка есть основания
					полагать, что операция носит мошеннический характер, то банк
					вправе отказать в осуществлении данной операции.
					Мошеннические операции с банковскими картами являются
					уголовным преступлением.
				</P>
				3.3. На странице для ввода данных банковской карты потребуется
				ввести: номер банковской карты, имя владельца карты, срок
				действия карты, трёхзначный код безопасности (CVV2 для Visa,
				CVC2 для MasterCard, Код Дополнительной Идентификации для МИР).
				Все необходимые данные находятся на самой карте, CCV код
				безопасности — это три цифры, которые размещены на обратной
				стороне карты. Далее произойдет перенаправление на страницу
				банка-эмитента карты для введения кода безопасности, который вы
				получите в СМС. Если код не придет, вам следует обратиться в
				банк, в котором происходила выдача карты.{' '}
				<P>
					3.4. Во избежание случаев мошенничества платежи,
					осуществленные с помощью банковской карты, могут проверяться
					Оператором платежа и Оператором в рамках имеющихся
					возможностей. Пользователь – держатель карты, оформивший
					такой платеж, обязан по запросу, поступившему от Оператора
					платежа и/или Оператора, предоставить копию необходимых
					Оператору и/или Оператору платежа документов для
					подтверждения правомерного использования банковской карты. В
					случае непредставления запрошенных документов Пользователем
					в течение 3 (Трех) календарных дней от даты оформления
					платежа или наличия сомнений в их подлинности, Оператор
					вправе приостановить Пользователю доступ к использованию
					Сайта полностью или частично.
				</P>{' '}
				3.5. Пользователь самостоятельно и за свой счет несет все
				расходы, связанные с переводами денежных средств, включая
				различные сборы и комиссии Оператора платежа. Размер таких
				сборов и комиссий определяется исключительно Оператором платежа.
				Размер комиссии, а также условия перечисления денежных средств
				по каждому способу оплаты указываются в интерфейсе Оператора
				платежа. Оператор не несет ответственности за действия Оператора
				платежа.
				<P>
					{' '}
					3.6. При оплате банковской картой, обработка платежа
					(включая ввод номера карты) происходит на защищенной
					странице процессинговой системы, прошедшей международную
					сертификацию. Это значит, что конфиденциальные данные
					Пользователя (реквизиты карты, регистрационные данные и др.)
					не поступают Оператору, их обработка полностью защищена и
					никто, в том числе Оператор, не может получить персональные
					и банковские данные Пользователя. При работе с карточными
					данными применяется стандарт защиты информации,
					разработанный международными платёжными системами Visa и
					Masterсard-Payment Card Industry Data Security Standard (PCI
					DSS), что обеспечивает безопасную обработку реквизитов
					Банковской карты держателя. Применяемая технология передачи
					данных гарантирует безопасность по сделкам с Банковскими
					картами путем использования протоколов Secure Sockets Layer
					(SSL), Verifiedby Visa, Secure Code,и закрытых банковских
					сетей, имеющих высшую степень защиты.
				</P>
			</Text>
			<Text>
				<b>4. Возврат денежных средств</b>
			</Text>
			<Text>
				4.1. Оператор не является продавцом по отношению к Пользователю,
				не получает от последнего покупную цену, в связи с чем не
				совершает никаких операций по возврату денежных средств.
				<P>
					{' '}
					4.2. Пользователь самостоятельно обращается к получателю
					платежа в целях урегулирования возврата денежных средств.
				</P>{' '}
				4.3. Автор Токена вправе передать поручение Оператору платежа на
				перевод денежных средств, полученных им в качестве Роялти и
				учтенных в персонифицированном средстве платежа, на свою
				банковскую карту в соответствии с условиями Оператора платежа.
			</Text>
			<Text>
				<b>5. Налоги</b>
			</Text>
			<Text>
				5.1. Пользователь самостоятельно исчисляет и уплачивает
				применимые к нему налоги и сборы. Оператор и Оператор платежа не
				признается налоговым агентами в соответствии с действующим
				законодательством РФ
			</Text>
			<Text>
				<b>Реквизиты</b>
			</Text>
			<Requisites>
				<div>
					<p style={{ margin: '0 0 24px 0' }}>
						<b>Полное наименование</b>
					</p>
					<P>
						<b>Сокращённое наименование</b>
					</P>
					<P>
						<b>ИНН</b>
					</P>
					<P>
						<b>КПП</b>
					</P>
					<P>
						<b>ОГРН</b>
					</P>
					<P>
						<b>ОКПО</b>
					</P>
					<p style={{ margin: '0 0 21px 0' }}>
						<b>Адрес местонахождения</b>
					</p>
					<Text>
						<b>Фактический /почтовый адрес</b>
					</Text>
					<p style={{ margin: '24px 0 0 0' }}>
						<b>E-mail</b>
					</p>
				</div>
				<div>
					<P>Общество с ограниченной</P>
					<P>ответственностью «Талимейн»</P>
					<P>ООО «Талимейн»</P>
					<P>7842113520</P>
					<P>784201001</P>
					<P>1167847306230</P>
					<P>03716319</P>
					<P>191123, город Санкт-Петербург, ул.</P>
					<P>Радищева, д. 39 литера в, офис 28</P>
					<P>191123, город Санкт-Петербург, ул.</P>
					<P>Радищева, д. 39 литера в, офис 28</P>
					<P>info@kefirium.ru</P>
				</div>
			</Requisites>
		</Container>
	)
}

const Container = styled.div`
	max-width: 760px;
	width: 100%;
	margin: 0 auto;
	padding: 125px 0 35px 0;
	& p {
		word-spacing: 7px;
		font-size: 16px;
		color: #000000;
		line-height: 23px;
	}
`

const P = styled.p`
	margin: 0;
`

const A = styled.a`
	color: #3dabef;
	margin: 7px 0;
`

const Requisites = styled.div`
	display: flex;
	gap: 5px;
`

export default PaymentRules