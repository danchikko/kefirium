import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { isValidMyCollections, isValidMyTokens, isValidOwn } from '../../../store/profileSlice'

const Navbar = () => {
	const {
		Own,
		myTokens,
		myCollections,
		favoritesNFT,
		favoritesCollection,
		hidden,
		galleries,
	} = useSelector((state) => state.profile)
	const dispatch = useDispatch()
	return (
		<Container>
			{Own ? (
				<ActiveLinks to='/profile'>Владею</ActiveLinks>
			) : (
				<Links onClick={() => dispatch(isValidOwn())} to='/profile'>
					Владею
				</Links>
			)}
			{myTokens ? (
				<ActiveLinks to='/profile/created/mytokens'>
					Мои NFT
				</ActiveLinks>
			) : (
				<Links
					onClick={() => dispatch(isValidMyTokens())}
					to='/profile/created/mytokens'
				>
					Мои NFT
				</Links>
			)}
			{myCollections ? (
				<ActiveLinks to='/profile/created/mycollections'>
					Мои коллекции
				</ActiveLinks>
			) : (
				<Links onClick={() => dispatch(isValidMyCollections())} to='/profile/created/mycollections'>Мои коллекции</Links>
			)}
			{favoritesNFT ? <ActiveLinks to="/profile/favorites/favoritesNFT">Избранные NFT токены</ActiveLinks>: <Links onClick={}>Избранные NFT токены</Links>}
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
	border-bottom: 1px solid #8f9499;
	height: 44px;
	margin: 35px 0 10px 0;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
`

const Links = styled(Link)`
	font-weight: 700;
	font-size: 15px;
	color: #b5b9bd;
	text-decoration: none;
	:hover {
		color: #8f9499;
	}
`

const ActiveLinks = styled(Link)`
	font-weight: 700;
	font-size: 15px;
	height: 100%;
	border-bottom: 3px solid #673bb7;
	text-decoration: none;
	color: #000000;
	padding-top: 15px;
`

export default Navbar
