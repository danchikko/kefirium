import styled from 'styled-components'
import Text from '../../components/UI/typography/Text'
import Title from '../../components/UI/typography/Title'
import { AiOutlineHeart } from 'react-icons/ai'
import { FiShare2 } from 'react-icons/fi'
import { TiInfoLargeOutline } from 'react-icons/ti'
import Flex from '../../components/UI/position/Flex'

const Collection = ({ image, title, user, description }) => {
	return (
		<Container>
			<CollectionHead>
				<HeadBox>
					<CollectionImage src={image} alt='collectionImage' />
					<div>
						<Title size='40px' color='000000' margin='10px 0'>
							Азбука NFT
						</Title>
						<Text color='#959595' size='16px'>
							Автор <Span>{user}</Span>
						</Text>
					</div>
				</HeadBox>
				<Actions>
					<ActionButtons>
						<AiOutlineHeart />
					</ActionButtons>
					<ActionButtons>
						<FiShare2 />
					</ActionButtons>
					<ActionButtons>
						<TiInfoLargeOutline />
					</ActionButtons>
				</Actions>
			</CollectionHead>
            <Description>{description}</Description>
            <Flex>
                <div>

                </div>
            </Flex>
		</Container>
	)
}

const Container = styled.div`
	max-width: 1170px;
	width: 100%;
	margin: 0 auto;
`

const CollectionHead = styled.div`
	max-width: 1170px;
	width: 100%;
	height: 160px;
	display: flex;
	justify-content: space-between;
`

const HeadBox = styled.div`
	width: 460px;
	display: flex;
	align-items: center;
`

const CollectionImage = styled.img`
	width: 160px;
	height: 160px;
	object-fit: cover;
	border-radius: 12px;
	margin-right: 30px;
`

const Span = styled.span`
	color: #e7246a;
	font-weight: 700;
	margin-left: 20px;
`

const Actions = styled.div`
	display: flex;
	grid-gap: 30px;
	gap: 30px;
	width: 210px;
	height: 100%;
`

const ActionButtons = styled.button`
	width: 50px;
	height: 50px;
	background-color: #fafafa;
	box-shadow: 0 4px 3px rgb(103 59 183 / 10%);
	border-radius: 16px;
	border: none;
	color: #673bb7;
	font-size: 25px;
	cursor: pointer;
`

const Description = styled.p`
    max-width: 870px;
    width: 100%;
    line-height: 20px;
    font-size: 17px;
    color: #000000;
`

const CollectionNumber = styled.p

export default Collection
