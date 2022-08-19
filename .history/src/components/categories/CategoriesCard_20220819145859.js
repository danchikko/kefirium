import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Title from '../UI/typography/Title'
import {BiRuble} from 'react-icons/bi'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const CategoriesCard = () => {
	const categories = useSelector((state) => state.options.sorted)
    const [state, setState] = useState([])

	useEffect(() => {
		fetch('http://localhost:3000/Categories')
		 .then((responce) => responce.json())
		 .then((data) => setState(data))
	}, [])
    let sort;
    if(categories === 'all') {
        sort = state
    }else{
        sort = state.filter((item) => item.collectionCategories === categories) 
    }

	return (
        <Container>
            {sort.map((el) => {
                return (
                    <Link >
                        <Cards>
                        <CardImg src={el.collectionImage} />
                        <InfoColl>
                            <Title size="16px">{el.collectionName}</Title>
                            <Description>{el.collectionDescription}</Description>
                            <Title size="16px">{el.price} <Ruble /></Title>
                        </InfoColl>
                    </Cards>
                    </Link>
                )
            })}
        </Container>
    )
}

const Container = styled.div`
	max-width: 1200px;
	width: 100%;
    margin: 0 auto;
`

const Cards = styled.div`
	display: inline-block;
	width: 370px;
	height: 526px;
	margin: 15px;
    border-radius: 12px;
    background-color: rgb(1, 0, 42);
`

const CardImg = styled.img`
    width: 370px;
    height: 370px;
    border-radius: 12px;
    object-fit: cover;
`

const InfoColl = styled.div`
    width: 100%;
    height: 100%;
    padding: 13px 30px 20px 30px;
    text-align: center;
`

const Description = styled.p`
    width: 100%;
    color: #ffffff;
    font-size: 15px;
    overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
    height: 65px;
    line-height: 22px;
`

const Ruble = styled(BiRuble)`
    margin-bottom: -1px;
    width: 15px;
    height: 15px;
`

export default CategoriesCard
