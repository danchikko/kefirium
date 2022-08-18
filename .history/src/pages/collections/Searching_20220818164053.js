import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi'
import Flex from '../../components/UI/position/Flex'
import Text from '../../components/UI/typography/Text'
import { IoIosArrowDown } from 'react-icons/io'

const Searching = () => {
	return (
		<Container>
			<Search>
				<SearchInput />
				<FiSearch />
			</Search>
			<Flex>
				<Text>Сортировка</Text>
				<Text>Выберите <Io</Text>
			</Flex>
		</Container>
	)
}

const Container = styled.div`
	max-width: 1170px;
	width: 100%;
	margin-bottom: 80px;
	display: flex;
	justify-content: space-between;
`

const Search = styled.div`
	max-width: 867px;
	width: 100%;
	display: flex;
	border-radius: 12px;
	box-shadow: 0 4px 3px rgb(103 59 183 / 10%);
	background: #f4f4f4;
	height: 30px;
	align-items: center;
`

const SearchInput = styled.input`
	background-color: #f4f4f4;
	border: none;
	outline: none;
	max-width: 838px;
	width: 100%;
	padding-left: 30px;
`

export default Searching
