import styled from 'styled-components'
import Navbar from '../../components/categories/Navbar'
import Title from '../../components/UI/typography/Title'

const Categories = () => {
	return (
		<Container>
			<Title margin="0 0 25px 0" size='40px' color='#000000'>
				Категории
			</Title>
            <Navbar />
		</Container>
	)
}

const Container = styled.div`
	max-width: 1170px;
	width: 100%;
	display: flex;
	flex-direction: column;
    padding: 170px 0 35px 0;
    margin: 0 auto;
`

export default Categories
