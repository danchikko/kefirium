import styled from 'styled-components'
import Text from '../../components/UI/typography/Text'
import Title from '../../components/UI/typography/Title'
import { BiRuble } from 'react-icons/bi'

const Collaction = () => {
	const data = [
		{
			id: 1,
			img: 'https://kefirium.ru/storage/app/uploads/public/627/f84/f92/627f84f920db9737071449.png',
			title: 'Любовь в сети',
			deskription:
				'Покупая токен-кольцо, вы получаете второй токен для вашей половинки.',
			price: 2000,
		},
		{
			id: 2,
			img: 'https://kefirium.ru/storage/app/uploads/public/627/f84/f92/627f84f920db9737071449.png',
			title: 'Любовь в сети',
			deskription:
				'Покупая токен-кольцо, вы получаете второй токен для вашей половинки.',
			price: 2000,
		},
		{
			id: 3,
			img: 'https://kefirium.ru/storage/app/uploads/public/627/f84/f92/627f84f920db9737071449.png',
			title: 'Любовь в сети',
			deskription:
				'Покупая токен-кольцо, вы получаете второй токен для вашей половинки.',
			price: 2000,
		},
		{
			id: 4,
			img: 'https://kefirium.ru/storage/app/uploads/public/627/f84/f92/627f84f920db9737071449.png',
			title: 'Любовь в сети',
			deskription:
				'Покупая токен-кольцо, вы получаете второй токен для вашей половинки.',
			price: 2000,
		},
		{
			id: 5,
			img: 'https://kefirium.ru/storage/app/uploads/public/627/f84/f92/627f84f920db9737071449.png',
			title: 'Любовь в сети',
			deskription:
				'Покупая токен-кольцо, вы получаете второй токен для вашей половинки.',
			price: 2000,
		},
		{
			id: 6,
			img: 'https://kefirium.ru/storage/app/uploads/public/627/f84/f92/627f84f920db9737071449.png',
			title: 'Любовь в сети',
			deskription:
				'Покупая токен-кольцо, вы получаете второй токен для вашей половинки.',
			price: 2000,
		},
	]

	useEffect(() => {
		fetch('http://localhost:3000/NFTtokens')
		 .then((responce) => responce.json())
		 .then((data) => setState(data.slice(0,6)))
	}, [])

	return (
		<Container>
			<Title margin='100px 0 30px 20px' color='#000000' size='40px'>
				Топ Коллекций
			</Title>
			{data.map((el) => {
				return (
					<Card key={el.id}>
						<Photo src={el.img} alt='img' />
						<Content>
							<Title size='16px'>{el.title}</Title>
							<Text size='14px'>{el.deskription}</Text>
							<Title size='16px'>
								{el.price} <Ruble />
							</Title>
						</Content>
					</Card>
				)
			})}
		</Container>
	)
}

const Container = styled.div`
	max-width: 1270px;
	width: 100%;
	margin: 0 auto;
	padding: 20px;
`

const Card = styled.div`
	width: 370px;
	height: 527px;
	border-radius: 12px;
	display: inline-block;
	margin: 20px;
	background: #000;
	text-align: center;
`

const Photo = styled.img`
	width: 370px;
	height: 370px;
	border-radius: 12px;
`

const Content = styled.div`
	padding: 25px;
	height: 100%;
`

const Ruble = styled(BiRuble)`
    font-weight: 700;
    padding-top: 1px;
    margin-bottom: -1px;
`

export default Collaction
