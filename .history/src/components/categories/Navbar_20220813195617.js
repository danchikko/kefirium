import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { allClick, artClick, musicClick, photoClick, sortedPost, sportClick, virtualworldsClick } from '../../store/optionsSlice'
import { useState } from 'react'

const Navbar = () => {
	const {all, art, sport, music, photo, collectibles, virtualworlds} = useSelector((state) => state.otions)
	const disp

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
				<NavButtonFalse onClick={() => dispatch(sportClick())}>
					Спорт
				</NavButtonFalse>
			)}
			{music ? (
				<NavButtonTrue>Музыка</NavButtonTrue>
			) : (
				<NavButtonFalse onClick={() => dispatch(musicClick())}>
					Музыка
				</NavButtonFalse>
			)}
			{photo ? (
				<NavButtonTrue>Фотография</NavButtonTrue>
			) : (
				<NavButtonFalse onClick={() => dispatch(photoClick())}>
					Фотография
				</NavButtonFalse>
			)}
			{collectibles ? (
				<NavButtonTrue>Коллекционные предметы</NavButtonTrue>
			) : (
				<NavButtonFalse onClick={() => dispatch(collectibles())}>
					Коллекционные предметы
				</NavButtonFalse>
			)}
            {virtualworlds ? (
				<NavButtonTrue>Виртуальные миры</NavButtonTrue>
			) : (
				<NavButtonFalse onClick={() => virtualworldsClick()}>
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
