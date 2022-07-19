import styled from "styled-components";

const Text = (props) => {
    return (
        <CreateText {...props} />
    )
}

const CreateText = styled.p`
    color: ${(props) => props.color || '#ffff'};
    font-size: ${(props) => props.size || '14px'};
    line-height: ${(props) => props.line || ''};
`

export default Text;