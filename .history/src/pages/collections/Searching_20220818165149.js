import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi'
import Flex from '../../components/UI/position/Flex'
import Text from '../../components/UI/typography/Text'
import { IoIosArrowDown } from 'react-icons/io'
import { useState } from 'react'

const Searching = () => {
    const [filter, setFilter] = useState(false)
	return (
		<Container>
			<Search>
				<SearchInput />
				<FiSearch />
			</Search>
			<FlexSearch justify="space-between" width="200px">
				<Text weight='700' color='#8f9499'>
					Сортировка
				</Text>
				<Flex onClick={() => setFilter((prevState) => !prevState)} align='center'>
					<Text style={{ cursor: 'pointer' }} color='#000000'>
						Выберите
					</Text>
					<IoIosArrowDown />
				</Flex>
                {filter ? <}
			</FlexSearch>
		</Container>
	)
}

const Container = styled.div`
	max-width: 1170px;
	width: 100%;
	margin-bottom: 80px;
	display: flex;
	justify-content: space-between;
    align-items: center;
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

const FlexSearch = styled.div`
    display: flex;
    gap: 10px;
`

const Filter = styled.div`
    width: 210px;
    height: 151px;
    padding: 25px 16px 25px 33px;
    position: absolute;
    left: 50px;
`

export default Searching
