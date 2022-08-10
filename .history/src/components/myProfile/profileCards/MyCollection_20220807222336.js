import styled from 'styled-components'
import {RiSearchLine} from 'react-icons/ri'
import { Link } from 'react-router-dom'

const MyCollection = () => {
	return (
		<Container>
			<FlexBlock>
				<Search>
					<InputSearch type='search' />
                    <ImageSearch />
				</Search>
                <Link to="/">

                </Link>
			</FlexBlock>
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
`

const FlexBlock = styled.div`
	display: flex;
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

const 

export default MyCollection
