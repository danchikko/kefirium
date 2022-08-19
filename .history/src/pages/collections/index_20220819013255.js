import { useState } from 'react'
import { Fragment } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Collection from './Collection'
import CollectionNavbar from './CollectionNavbar'

const Collections = () => {
	const [collection, setCollection] = useState(null)
	const {id} = useParams()

	useEffect(() => {
		fetch(`http://localhost:3000/Categories/${id}`)
			.then((responce) => responce.json())
			.then((data) => setCollection(data))
	}, [id])
	return (
		<Container>
			{collection && (
				<Fragment>
				<BackgroundBlock url={el.collectionBanner} />
				<Collection
					image={el.collectionImage}
					title={el.collectionName}
					user={el.nickname}
					description={el.collectionDescription}
				/>
			</Fragment>
			)}
            <CollectionNavbar />
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
	padding-top: 80px;
`

const BackgroundBlock = styled.div`
	width: 100%;
	height: 250px;
	background-image: url(${(props) => props.url});
    margin-bottom: 70px;
`

export default Collections
