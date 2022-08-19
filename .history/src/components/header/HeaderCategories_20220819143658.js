import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FiChevronRight } from 'react-icons/fi'
import {
	allClick,
	artClick,
	closeCategoriesModal,
	closeSupportModal,
	collectiblesClick,
	modalCategories,
	musicClick,
	photoClick,
	sortedPost,
	sportClick,
} from '../../store/optionsSlice'

const HeaderCategories = () => {
	const modal = useSelector((state) => state.options.categoriesModal)
	const dispatch = useDispatch()
	return (
		<div>
			<Topics
				onClick={() =>
					dispatch(modalCategories(), dispatch(closeSupportModal()))
				}
			>
				Категории <NavRight />
			</Topics>
			{modal ? (
				<ListCategories
					onClick={() => dispatch(closeCategoriesModal())}
				>
					<Links
						onClick={() => dispatch(sortedPost('all'), dispatch(allClick()))}
						to='/categories'
					>
						Все
					</Links>
					<Links
						onClick={() => dispatch(sortedPost('art'), dispatch(artClick()))}
						to='/categories'
					>
						Искусство
					</Links>
					<Links
						onClick={() => dispatch(sortedPost('sport'), dispatch(sportClick()))}
						to='/categories'
					>
						Спорт
					</Links>
					<Links
						onClick={() => dispatch(sortedPost('music'), dispatch(musicClick()))}
						to='/categories'
					>
						Музыка
					</Links>
					<Links
						onClick={() => dispatch(sortedPost('photo'), dispatch(photoClick()))}
						to='/categories'
					>
						Фотография
					</Links>
					<Links
						onClick={() => dispatch(sortedPost('collectibles'), dispatch(collectiblesClick()))}
						to='/categories'
					>
						Коллекционные предметы
					</Links>
					<Links
						onClick={() => dispatch(sortedPost('virtualworlds'))}
						to='/categories'
					>
						Виртуальные миры
					</Links>
				</ListCategories>
			) : (
				''
			)}
		</div>
	)
}

const Topics = styled.p`
	font-size: 15px;
	color: #8f9499;
	font-weight: 700;
	display: flex;
	align-items: center;
	cursor: pointer;
`

const ListCategories = styled.div`
	width: 170px;
	height: 360px;
	background: #f4f4f4;
	border-radius: 16px;
	box-shadow: 0 4px 3px 0 rgb(103 59 183 / 10%);
	position: absolute;
	top: 75px;
	right: 534px;
	padding: 20px 25px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`

const Links = styled(Link)`
	text-decoration: none;
	font-size: 14px;
	color: rgb(103, 59, 183);
	:hover {
		color: #e7246a;
	}
`

const NavRight = styled(FiChevronRight)`
	margin-left: 5px;
	width: 14px;
	height: 14px;
`

export default HeaderCategories
