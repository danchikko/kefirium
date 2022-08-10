import styled from 'styled-components'
import { RiSearchLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import Text from '../../UI/typography/Text'

const MyCollection = () => {
	return (
		<Container>
			<FlexBlock>
				<Search>
					<InputSearch type='search' />
					<ImageSearch />
				</Search>
				<Link to='/'>
					<CreateCollectionButton>
						+ Создать коллекцию
					</CreateCollectionButton>
				</Link>
				<Controlls>
					<Text color='#8f9499' weight='700' size='15px'>
						Сортировка
					</Text>
					<Select>
						<option disabled selected hidden>Выберите</option>
						<option>По цене</option>
						<option>По дате создания</option>
					</Select>
				</Controlls>
			</FlexBlock>
			<EmptyText>
				Создайте свою первую коллекцию, и он отобразится в этом
				разделе.
			</EmptyText>
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
`

const FlexBlock = styled.div`
	display: flex;
	align-items: center;
`

const Search = styled.div`
	max-width: 700px;
	width: 100%;
	height: 30px;
	display: flex;
	border-radius: 12px;
	background-color: #f4f4f4;
	align-items: center;
`

const InputSearch = styled.input`
	max-width: 670px;
	width: 100%;
	background-color: #f4f4f4;
	padding: 0 0 0 20px;
	border: none;
	border-radius: 12px;
	outline: none;
`

const ImageSearch = styled(RiSearchLine)`
	width: 20px;
	height: 20px;
	color: #000000;
`

const CreateCollectionButton = styled.button`
	width: 158px;
	background-color: #673bb7;
	margin: 0 80px 0 20px;
	color: #ffffff;
	font-size: 12px;
	height: 28.5px;
	border: none;
	border-radius: 16px;
`

const Controlls = styled.div`
	width: 200px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

const Select = styled.select`
	outline: none;
	border: none;
	width: 140px;

	op
`

const EmptyText = styled.p`
	font-size: 16px;
	color: #000000;
	margin: 50px 0 70px 0;
`

export default MyCollection
