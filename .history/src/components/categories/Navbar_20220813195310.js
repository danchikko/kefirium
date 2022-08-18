import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { allClick, artClick, sortedPost } from '../../store/optionsSlice'
import { useState } from 'react'

const Navbar = () => {
	const {all, art, sport, music, photo, collectibles, virtualworlds} = useSelector((state) => state.otions)
	
	const [navCategories, setNavCategoreis] = useState({
		all: false,
		art: false,
		sport: false,
		music: false,
		photo: false,
		collectibles: false,
		virtualworlds: false,
	})
	const dispatch = useDispatch()

	const sportChangeHandler = () => {
		dispatch(sortedPost('sport'))
		setNavCategoreis({
			all: false,
			art: false,
			sport: true,
			music: false,
			photo: false,
			collectibles: false,
			virtualworlds: false,
		})
	}

	const musicChangeHandler = () => {
		dispatch(sortedPost('music'))
		setNavCategoreis({
			all: false,
			art: false,
			sport: false,
			music: true,
			photo: false,
			collectibles: false,
			virtualworlds: false,
		})
	}

	const photoChangeHandler = () => {
		dispatch(sortedPost('photo'))
		setNavCategoreis({
			all: false,
			art: false,
			sport: false,
			music: false,
			photo: true,
			collectibles: false,
			virtualworlds: false,
		})
	}

	const collectiblesChangeHandler = () => {
		dispatch(sortedPost('collectibles'))
		setNavCategoreis({
			all: false,
			art: false,
			sport: false,
			music: false,
			photo: false,
			collectibles: true,
			virtualworlds: false,
		})
	}

	const virtualChangeHandler = () => {
		dispatch(sortedPost('virtualworlds'))
		setNavCategoreis({
			all: false,
			art: false,
			sport: false,
			music: false,
			photo: false,
			collectibles: false,
			virtualworlds: true,
		})
	}

	return (
		<NavDiv>
			{all ? (
				<NavButtonTrue>Все</NavButtonTrue>
			) : (
				<NavButtonFalse onClick={() => dispatch(allClick())}>Все</NavButtonFalse>
			)}
			{art ? (
				<NavButtonTrue>Искусство</NavButtonTrue>
			) : (
				<NavButtonFalse onClick={() => dispatch(artClick())}>
					Искусство
				</NavButtonFalse>
			)}
			{sport ? (
				<NavButtonTrue>Спорт</NavButtonTrue>
			) : (
				<NavButtonFalse onClick={() => dispatch(sportChangeHandler)}>
					Спорт
				</NavButtonFalse>
			)}
			{music ? (
				<NavButtonTrue>Музыка</NavButtonTrue>
			) : (
				<NavButtonFalse onClick={musicChangeHandler}>
					Музыка
				</NavButtonFalse>
			)}
			{photo ? (
				<NavButtonTrue>Фотография</NavButtonTrue>
			) : (
				<NavButtonFalse onClick={photoChangeHandler}>
					Фотография
				</NavButtonFalse>
			)}
			{collectibles ? (
				<NavButtonTrue>Коллекционные предметы</NavButtonTrue>
			) : (
				<NavButtonFalse onClick={collectiblesChangeHandler}>
					Коллекционные предметы
				</NavButtonFalse>
			)}
            {virtualworlds ? (
				<NavButtonTrue>Виртуальные миры</NavButtonTrue>
			) : (
				<NavButtonFalse onClick={virtualChangeHandler}>
					Виртуальные миры
				</NavButtonFalse>
			)}
		</NavDiv>
	)
}

const NavDiv = styled.div`
	max-width: 1170px;
	width: 100%;
	height: 44px;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 35px;
	border-bottom: 1px solid #8f8f8f;
`

const NavButtonFalse = styled.button`
	border: none;
	color: #8f9499;
	cursor: pointer;
	background: #ffff;
	font-size: 14px;
	font-weight: 700;
	height: 37px;
`

const NavButtonTrue = styled.button`
	border: none;
	cursor: pointer;
	background: #ffff;
	font-size: 14px;
	color: #000000;
	font-weight: 700;
	border-bottom: 4px solid #673bb7;
	height: 37px;
	margin-bottom: -5.5px;
`

export default Navbar
