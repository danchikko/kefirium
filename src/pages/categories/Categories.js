import styled from 'styled-components'
import CategoriesCard from '../../components/categories/CategoriesCard'
import Navbar from '../../components/categories/Navbar'
import Title from '../../components/UI/typography/Title'

const Categories = () => {
	const data = [
		{
			id: 1,
			title: 'Моя Коллекция',
			description: 'This is my collection',
			img: 'https://kefirium.ru/storage/app/uploads/public/627/e56/012/627e56012c864181787419.jpg',
			price: '1000',
			categories: 'photo',
		},
        {
			id: 2,
			title: 'story photo',
			description: 'hacce dslslrid adlkdk my rolues klds',
			img: 'https://kefirium.ru/storage/app/uploads/public/627/e56/011/627e56011b9ba180837725.jpg',
			price: '1222',
			categories: 'virtualworlds',
		},
        {
			id: 3,
			title: 'story photo',
			description: 'hacce dslslrid adlkdk my rolues klds',
			img: 'https://kefirium.ru/storage/app/uploads/public/62a/740/573/62a740573a2dd249147529.gif',
			price: '1222',
			categories: 'collectibles',
		},
        {
			id: 4,
			title: 'story photo',
			description: 'hacce dslslrid adlkdk my rolues klds',
			img: 'https://kefirium.ru/storage/app/uploads/public/62a/88b/da9/62a88bda93fc6274784651.jpg',
			price: '1222',
			categories: 'music',
		},
        {
			id: 5,
			title: 'story photo',
			description: 'hacce dslslrid adlkdk my rolues klds',
			img: 'https://kefirium.ru/storage/app/uploads/public/62a/c68/783/62ac68783d9df602785916.jpg',
			price: '1222',
			categories: 'sport',
		},
        {
			id: 6,
			title: 'story photo',
			description: 'hacce dslslrid adlkdk my rolues klds',
			img: 'https://kefirium.ru/storage/app/uploads/public/628/cde/0be/628cde0be38c4683667200.jpg',
			price: '1222',
			categories: 'art',
		},
        {
			id: 7,
			title: 'story photo',
			description: 'hacce dslslrid adlkdk my rolues klds',
			img: 'https://kefirium.ru/storage/app/uploads/public/627/fa7/a90/627fa7a90c395300445830.png',
			price: '1222',
			categories: 'photo',
		},
        {
			id: 8,
			title: 'story photo',
			description: 'hacce dslslrid adlkdk my rolues klds',
			img: 'https://kefirium.ru/storage/app/uploads/public/627/e5a/5ea/627e5a5ea3047038074102.jpg',
			price: '1222',
			categories: 'virtualworlds',
		},
        {
			id: 9,
			title: 'story photo',
			description: 'hacce dslslrid adlkdk my rolues klds',
			img: 'https://kefirium.ru/storage/app/uploads/public/62b/5b8/184/62b5b818455f9507829568.png',
			price: '1222',
			categories: 'art',
		},
        {
			id: 10,
			title: 'story photo',
			description: 'hacce dslslrid adlkdk my rolues klds',
			img: 'https://kefirium.ru/storage/app/uploads/public/627/e56/021/627e56021a4a6077639180.png',
			price: '1222',
			categories: 'music',
		},
        {
			id: 11,
			title: 'story photo',
			description: 'hacce dslslrid adlkdk my rolues klds',
			img: 'https://kefirium.ru/storage/app/uploads/public/627/e56/01c/627e5601c4d79276406088.png',
			price: '1222',
			categories: 'collectibles',
		},
        {
			id: 12,
			title: 'Моя Коллекция',
			description: 'This is my collection',
			img: 'https://kefirium.ru/storage/app/uploads/public/627/e56/01e/627e5601e54cb874452023.png',
			price: '1000',
			categories: 'photo',
		},
        {
			id: 13,
			title: 'story photo',
			description: 'hacce dslslrid adlkdk my rolues klds',
			img: 'https://kefirium.ru/storage/app/uploads/public/627/f7e/666/627f7e6664497993002212.png',
			price: '1222',
			categories: 'virtualworlds',
		},
        {
			id: 14,
			title: 'story photo',
			description: 'hacce dslslrid adlkdk my rolues klds',
			img: 'https://kefirium.ru/storage/app/uploads/public/627/e56/027/627e560275448215074846.jpg',
			price: '1222',
			categories: 'collectibles',
		},
        {
			id: 15,
			title: 'story photo',
			description: 'hacce dslslrid adlkdk my rolues klds',
			img: 'https://kefirium.ru/storage/app/uploads/public/627/e56/015/627e560159c94741552020.png',
			price: '1222',
			categories: 'music',
		},
        {
			id: 16,
			title: 'story photo',
			description: 'hacce dslslrid adlkdk my rolues klds',
			img: 'https://kefirium.ru/storage/app/uploads/public/627/e50/8d2/627e508d266f8355183174.png',
			price: '1222',
			categories: 'sport',
		},
        {
			id: 17,
			title: 'story photo',
			description: 'hacce dslslrid adlkdk my rolues klds',
			img: 'https://kefirium.ru/storage/app/uploads/public/627/e53/2f2/627e532f20eeb960183155.png',
			price: '1222',
			categories: 'art',
		},
        {
			id: 18,
			title: 'story photo',
			description: 'hacce dslslrid adlkdk my rolues klds',
			img: 'https://kefirium.ru/storage/app/uploads/public/62b/dae/4c8/62bdae4c88007459411247.png',
			price: '1222',
			categories: 'photo',
		},
        {
			id: 19,
			title: 'story photo',
			description: 'hacce dslslrid adlkdk my rolues klds',
			img: 'https://kefirium.ru/storage/app/uploads/public/62a/893/926/62a893926fff3670261030.jpg',
			price: '1222',
			categories: 'virtualworlds',
		},
        {
			id: 20,
			title: 'story photo',
			description: 'hacce dslslrid adlkdk my rolues klds',
			img: 'https://kefirium.ru/storage/app/uploads/public/627/e50/8d1/627e508d14e8d334129929.png',
			price: '1222',
			categories: 'art',
		},
        {
			id: 21,
			title: 'story photo',
			description: 'hacce dslslrid adlkdk my rolues klds',
			img: 'https://kefirium.ru/storage/app/uploads/public/627/f84/f92/627f84f920db9737071449.png',
			price: '1222',
			categories: 'music',
		},
        {
			id: 22,
			title: 'story photo',
			description: 'hacce dslslrid adlkdk my rolues klds',
			img: 'https://kefirium.ru/storage/app/uploads/public/627/e56/012/627e560126fec643491756.png',
			price: '1222',
			categories: 'collectibles',
		},
	]

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
