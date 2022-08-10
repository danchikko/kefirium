import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
	return (
		<Container>
			<NavLink to="/">Владею</NavLink>
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

const Links = styled(NavLink)`
    font-weight: ;
`

export default Navbar
