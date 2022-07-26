import styled from 'styled-components'

const CreateCollection = () => {
	return (
        <CollectionContainer>
            <CollectionInput type="text" />
            <CollectionButton>+</CollectionButton>
        </CollectionContainer>
    )
}

const CollectionContainer = styled.div`
	display: flex;
`

const CollectionInput = styled.input`
	width: 100%;
	height: 62px;
	background: #fafafa;
	box-shadow: 0 4px 3px 0 rgb(103 59 183 / 10%);
	border-radius: 35px;
	border: none;
	outline: none;
	font-size: 16px;
	padding: 0 20px;
	margin-bottom: 30px;
`

const CollectionButton = styled.button`
	width: 62px;
	height: 62px;
	border-radius: 50%;
	border: none;
	background: #fafafa;
	box-shadow: 0 4px 3px rgb(103 59 183 / 10%);
	font-size: 40px;
	color: #673bb7;
	margin-left: 10px;
`

export default CreateCollection
