import styled from 'styled-components'

const Title = (props) => {
	return <CreateTitle {...props} />
}

const CreateTitle = styled.h2`
	color: ${(props) => props.color || '#ffff'};
	font-size: ${(props) => props.size || '20px'};
	margin: ${(props) => props.margin || '0'};
	font-family: 'Bebas Neue', cursive;
	font-family: 'Kanit', sans-serif;
	font-family: 'M PLUS 1 Code', sans-serif;
	font-family: 'Oxygen', sans-serif;
	font-weight: ${(props) => props.weight || '700'};
`

export default Title
