import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi'
import { FiUser } from 'react-icons/fi'
import { FiChevronRight } from 'react-icons/fi'

const Header = () => {
	return (
		<MainHeader>
			<Logo
				src='https://kefirium.ru/_nuxt/img/logo.2f49735.svg'
				alt='logo'
			/>
			<Search>
				<InputSearch type='text' />
				<ImgSearch />
			</Search>
			<Topics>
				Категории <NavRight />
			</Topics>
			<Topics>
				Поддержка <NavRight />
			</Topics>
			<CreateNFT>Создать NFT</CreateNFT>
			<User />
		</MainHeader>
	)
}

const MainHeader = styled.header`
	width: 100%;
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	padding: 0 15px;
	position: fixed;
	background: #ffff;
`

const Logo = styled.img`
	width: 172px;
	height: 60px;
`

const Search = styled.div`
	max-width: 365px;
	height: 50px;
	width: 100%;
	background: #f4f4f4;
	display: flex;
	align-items: center;
	padding: 0 17px;
	border-radius: 16px;
`

const InputSearch = styled.input`
	max-width: 349px;
	width: 100%;
	height: 30px;
	border: none;
	outline: none;
	background-color: transparent;
`

const ImgSearch = styled(FiSearch)`
	height: 20px;
	width: 18px;
`

const Topics = styled.p`
	font-size: 15px;
	color: #8f9499;
	font-weight: 700;
	display: flex;
	align-items: center;
	font-family: 'Bebas Neue', cursive;
	font-family: 'Kanit', sans-serif;
	font-family: 'M PLUS 1 Code', sans-serif;
	font-family: 'Oxygen', sans-serif;
`

const NavRight = styled(FiChevronRight)`
	margin-left: 5px;
	width: 14px;
	height: 14px;
`

const CreateNFT = styled.button`
	max-width: 140px;
	width: 100%;
	height: 38px;
	color: #fafafa;
	background: #673bb7;
	font-size: 14px;
	border-radius: 18px;
	border: none;
	font-weight: 700;
	letter-spacing: 0.5px;
`

const User = styled(FiUser)`
	width: 60px;
	height: 25px;
`

export default Header
