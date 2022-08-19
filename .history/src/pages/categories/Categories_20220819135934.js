import styled from 'styled-components'
import CategoriesCard from '../../components/categories/CategoriesCard'
import Navbar from '../../components/categories/Navbar'
import Title from '../../components/UI/typography/Title'

const Categories = () => {
	

	return (
		<Container>
			<Title margin='0 0 0 15px' size='40px' color='#000000'>
				Категории
			</Title>
			<Navbar />
            <CategoriesCard data={data} />
		</Container>
	)
}

const Container = styled.div`
	max-width: 1200px;
	width: 100%;
	display: flex;
	flex-direction: column;
    gap: 35px;
	padding: 140px 0 35px 0;
	margin: 0 auto;
`

export default Categories
