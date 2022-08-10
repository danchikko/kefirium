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
			<Links to='/profile'>Владею</Links>
			<Links to='/profile/created/mytokens'>Мои NFT</Links>
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
	
`

export default Navbar
