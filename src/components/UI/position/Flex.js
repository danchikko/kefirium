import styled from "styled-components";

const Flex = (props) => {
    return (
        <CreateFlex {...props} />
    )
}

const CreateFlex = styled.div`
    max-width: ${(props) => props.width || ''};
    width: 100%;
    display: flex;
    flex-direction: ${(props) => props.direction || 'stretch'};
    justify-content: ${(props) => props.justify  || 'stretch'};
    align-items: ${(props) => props.align || 'stretch'};
    height: ${(props) => props.height || ''};
    margin: ${(props) => props.margin || ''};
`

export default Flex;