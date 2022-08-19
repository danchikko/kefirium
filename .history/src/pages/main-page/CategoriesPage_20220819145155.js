import styled from 'styled-components'
import Title from '../../components/UI/typography/Title'
import art from '../../aseets/images/art.jpg'
import collaction from '../../aseets/images/collactionItems.jpg'
import music from '../../aseets/images/music.jpg'
import photo from '../../aseets/images/photo.jpg'
import sport from '../../aseets/images/sport.jpg'
import worlds from '../../aseets/images/virtualWorlds.jpg'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {
	artClick,
	musicClick,
	sortedPost,
	sportClick,
} from '../../store/optionsSlice'

const CategoriesPage = () => {
	const dispatch = useDispatch()
	return (
		<Container>
			<Title margin='100px 0 20px 20px' size='40px' color='#000000'>
				Категории
			</Title>
			<Link
				onClick={() =>
					dispatch(sortedPost('art'), dispatch(artClick()))
				}
				to='/categories'
			>
				<Card>
					<Pages src={art} alt='art' />
					<Title margin='7px 0 0 0' size='14px' color='#000'>
						Искусство
					</Title>
				</Card>
			</Link>
			<Link
				onClick={() =>
					dispatch(sortedPost('sport'), dispatch(sportClick()))
				}
				to='/categories'
			>
				<Card>
					<Pages src={sport} alt='sport' />
					<Title margin='7px 0 0 0' size='14px' color='#000'>
						Спорт
					</Title>
				</Card>
			</Link>
			<Link
				onClick={() =>
					dispatch(sortedPost('music'), dispatch(musicClick))
				}
				to='/categories'
			>
				<Card>
					<Pages src={music} alt='music' />
					<Title size='14px' margin='7px 0 0 0' color='#000'>
						Музыка
					</Title>
				</Card>
			</Link>
			<Card>
				<Pages src={photo} alt='photo' />
				<Title size='14px' margin='7px 0 0 0' color='#000'>
					Фотография
				</Title>
			</Card>
			<Card>
				<Pages src={collaction} alt='collacton' />
				<Title size='14px' margin='7px 0 0 0' color='#000'>
					Коллекционные предметы
				</Title>
			</Card>
			<Card>
				<Pages src={worlds} alt='worlds' />
				<Title size='14px' margin='7px 0 0 0' color='#000'>
					Виртуальные миры
				</Title>
			</Card>
		</Container>
	)
}

const Container = styled.div`
	max-width: 1270px;
	margin: 0 auto;
	padding: 20px;
`

const Card = styled.div`
	width: 368px;
	height: 164px;
	border: 1px solid #e7e7e7;
	border-radius: 12px;
	margin: 20px;
	display: inline-block;
	text-align: center;
`

const Pages = styled.img`
	width: 368px;
	height: 120px;
	border-radius: 12px;
`

export default CategoriesPage
