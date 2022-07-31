import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi'
import { FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import HeaderCategories from './HeaderCategories'
import HeaderSupport from './HeaderSupport'

const Header = () => {
	return (
		<HeaderLayout>
			<HeaderWrapper>
				<Links to='/'>
					<Logo
						src='https://kefirium.ru/_nuxt/img/logo.2f49735.svg'
						alt='logo'
					/>
				</Links>
				<Search>
					<InputSearch type='text' />
					<ImgSearch />
				</Search>
				<HeaderCategories />
				<HeaderSupport />
				<Links
					style={{ maxWidth: '140px', width: '100%' }}
					to='/createNFT'
				>
					<CreateNFT>Создать NFT</CreateNFT>
				</Links>
				<User />
			</HeaderWrapper>
		</HeaderLayout>
	)
}

const HeaderLayout = styled.div`
	width: 100%;
	height: 80px;
	position: fixed;
	background: #ffff;
	border-bottom: 2px solid #e1d8f1;
`

const HeaderWrapper = styled.header`
	max-width: 1270px;
	width: 100%;
	height: 80px;
	display: flex;
	justify-content: space-evenly;
	padding: 20px 0;
	align-items: center;
	margin: 0 auto;
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

const Links = styled(Link)`
	text-decoration: none;
	cursor: pointer;
`

export default Header
