import { useState } from "react"
import { Fragment } from "react"
import { useEffect } from "react"
import styled from "styled-components"
import Collection from "./Collection"

const Collections = () => {
    const [collection, setCollection] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/Categories')
        .then((responce) => responce.json())
        .then((data) => setCollection(data.slice(0,1)))
    }, [])
    return (
        <Container>
            {collection.map((el) => {
                return (
                    <Fragment key={el.id}>
                        <BackgroundBlock url={el.collectionBanner} />
                        <Collection img={el.collection}/>
                    </Fragment>
                )
            })}
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
`

export default Collections