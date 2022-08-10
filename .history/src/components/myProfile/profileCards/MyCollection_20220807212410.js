import styled from 'styled-components'
import {RiSearchLine} from 'react-icons/ri'

const MyCollection = () => {
	return (
		<Container>
			<FlexBlock>
				<Search>
					<InputSearch type='search' />
				</Search>
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
	height: 30px;
`

const InputSearch = styled.input`
	max-width: 660px;
	width: 100%;
	background-color: #fafafa;
	padding: 0 0 0 20px;
`

const ImageSearch = styled(RiSearchLine)`
    width: 28px;
    
`

export default MyCollection
