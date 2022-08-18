import styled from 'styled-components'
import {AiOutlineHeart} from 'react-icons/ai'

const CollectionTokens = () => {
	return (
		<Container>
			<HeadBox>
				<HeadImage
					src='https://kefirium.ru/storage/app/uploads/public/627/40f/2f4/62740f2f48edf319297309.jpg'
					alt='imageToken'
				/>
                <Actions>
					<HeartButton><Heart/></HeartButton>
                </Actions>
			</HeadBox>
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
	display: flex;
	margin-bottom: 50px;
`

const HeadBox = styled.div`
	max-width: 470px;
	width: 100%;
	margin: 0 30px 0 0;
`

const HeadImage = styled.img`
	width: 100%;
	height: 470px;
	border-radius: 12px;
	object-fit: fill;
`

const Actions = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
`

const HeartButton = styled.button`
    width: 50px;
    height: 50px;
    cursor: pointer;
	border-radius: 16px;
	box-shadow: 0 4px 3px rgb(103 59 183 / 10%);
	border: none;
	background-color: #fafafa;
	transition: margin-top .3s ease;
`

const Heart = styled(AiOutlineHeart)`
	width: 22px;
	height: 22px;
	background-repeat: no-repeat;
	bacrpop
`

export default CollectionTokens
