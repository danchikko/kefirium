import styled from "styled-components";

const Text = (props) => {
    return (
        <CreateText {...props} />
    )
}

const CreateText = styled.p`
    color: ${(props) => props.color || '#ffffff'};
    font-size: ${(props) => props.size || '14px'};
    line-height: ${(props) => props.line || ''};
    font-weight: ${(props) => props.weight || '500'};
`

export default Text;