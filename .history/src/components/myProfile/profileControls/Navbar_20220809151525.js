import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

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
	return (
		<Container>
			{Own ? <ActiveLinks to="/profile">Владею</ActiveLinks>: <Links to="/profile">Владею</Links>}
			{myTokens ? <ActiveLinks to="/profile">Мои NFT</ActiveLinks>: <Links to='/profile/created/mytokens'>Мои NFT</Links>}
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
	border-bottom: 2px solid #673bb7;
	text-decoration: none;
	color: #000000;
`

export default Navbar