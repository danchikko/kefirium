import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Title from '../UI/typography/Title'
import {BiRuble} from 'react-icons/bi'
import { useEffect, useState } from 'react'

const CategoriesCard = ({ data }) => {
	const categories = useSelector((state) => state.options.sorted)
    const [state, setState] = useState([])

	useEffect(() => {
		fetch('http://localhost:3000/Categories')
		 .then((responce) => responce.json())
		 .then((data) => setState(data))
	}, [])
    let sort = data
    if(categories === 'all') {
        sort = data
    }else{
        sort = [...data].filter((item) => item.categories === categories) 
    }

	return (
        <Container>
            {sort.map((el) => {
                return (
                    <Cards key={el.id}>
                        <CardImg src={el.img} />
                        <InfoColl>
                            <Title size="16px">{el.title}</Title>
                            <Description>{el.description}</Description>
                            <Title size="16px">{el.price} <Ruble /></Title>
                        </InfoColl>
                    </Cards>
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
`

const InfoColl = styled.div`
    width: 100%;
    height: 100%;
    padding: 13px 30px 20px 30px;
    text-align: center;
`

const Description = styled.p`
    width: 100%;
    height: 51px;
    color: #ffffff;
    font-size: 14px;
`

const Ruble = styled(BiRuble)`
    margin-bottom: -1px;
    width: 15px;
    height: 15px;
`

export default CategoriesCard
