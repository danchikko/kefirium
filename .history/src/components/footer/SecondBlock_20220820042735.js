import styled from 'styled-components'
import wk from '../../aseets/svg/wk.svg'
import youtube from '../../aseets/svg/youtube.svg'
import Mir from '../../aseets/svg/Mir.svg'
import Visa from '../../aseets/svg/visa.svg'
import masterCard from '../../aseets/svg/masterCard.svg'
import { Link } from 'react-router-dom'
import Title from '../UI/typography/Title'
import { useDispatch } from 'react-redux'
import {
	allClick,
	artClick,
	musicClick,
	photoClick,
	sortedPost,
	sportClick,
} from '../../store/optionsSlice'

const SecondBlock = () => {
	const dispatch = useDispatch()
	return (
		<Container>
			<Blocks>
				<SocialNetwork>
					<SocialItems>
						<WKLogo src={wk} alt='ImgWK' />
						<YouTubeLogo src={youtube} alt='ImgYoutube' />
					</SocialItems>
					<Cards>
						<img src={Mir} alt='LogoMir' />
						<img src={Visa} alt='LogoVisa' />
						<img src={masterCard} alt='LogoMasterCard' />
					</Cards>
				</SocialNetwork>
				<ListBlock>
					<FirstList>
						<Title color='#ffffff' size='14px'>
							Каталог
						</Title>
						<Links
							onClick={() =>
								dispatch(
									sortedPost('all'),
									dispatch(allClick()),
								)
							}
							to='/categories'
						>
							Все
						</Links>
						<Links
							onClick={() =>
								dispatch(
									sortedPost('art'),
									dispatch(artClick()),
								)
							}
							to='/categories'
						>
							Искусство
						</Links>
						<Links
							onClick={() =>
								dispatch(
									sortedPost('sport'),
									dispatch(sportClick()),
								)
							}
							to='/categories'
						>
							Спорт
						</Links>
						<Links
							onClick={() =>
								dispatch(
									sortedPost('music'),
									dispatch(musicClick()),
								)
							}
							to='/categories'
						>
							Музыка
						</Links>
						<Links
							onClick={() =>
								dispatch(
									sortedPost('photo'),
									dispatch(photoClick()),
								)
							}
							to='/categories'
						>
							Фотография
						</Links>
						<Links onClick={() => dispatch(sortedPost('collectibles'), dispatch(collectiblesClick()))}
						to='/categories'>Коллекционные предметы</Links>
						<Links to='/'>Виртуальные миры</Links>
					</FirstList>
					<SecondList>
						<Links to='/'>Мой профиль</Links>
						<Links to='/'>Создать коллекцию</Links>
					</SecondList>
				</ListBlock>
			</Blocks>
			<Info>
				<Title size='14px' weight='500' margin='4px 0 0 0'>
					ООО «Талимейн» (ИНН 7842113520)
				</Title>
				<Title size='14px' weight='500' margin='4px 0 0 0'>
					191123, Санкт-Петербург, ул. Радищева, д. 39 литера в, офис
					28
				</Title>
				<Title size='14px' weight='500' margin='4px 0 0 0'>
					Служба поддержки info@kefirium.ru
				</Title>
			</Info>
		</Container>
	)
}

const Container = styled.div`
	max-width: 1170px;
	width: 100%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	padding: 30px 20px;
`

const Blocks = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`

const SocialNetwork = styled.div`
	width: 245px;
	height: 274px;
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	justify-content: space-between;
	margin-bottom: 20px;
`

const SocialItems = styled.div`
	width: 88px;
	height: 26px;
	display: flex;
	justify-content: space-between;
`

const WKLogo = styled.img`
	width: 28px;
	height: 16px;
	margin-top: 4px;
`

const YouTubeLogo = styled.img`
	width: 35px;
	height: 26px;
`

const Cards = styled.div`
	width: 100%;
	height: 40px;
	display: flex;
	justify-content: space-between;
`

const ListBlock = styled.div`
	width: 345px;
	height: 288px;
	margin-top: 6px;
	display: flex;
	justify-content: space-between;
`

const FirstList = styled.div`
	max-width: 145px;
	width: 100%;
	height: 288px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

const Links = styled(Link)`
	text-decoration: none;
	color: #ffffff;
	font-size: 14px;
	cursor: pointer;
`

const SecondList = styled.div`
	width: 146px;
	display: flex;
	flex-direction: column;
	gap: 20px;
`

const Info = styled.div`
	display: flex;
	flex-direction: column;
	letter-spacing: 1px;
`

export default SecondBlock
