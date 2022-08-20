import styled from "styled-components";

const Button = (props) => {
    return (
        <CreateButton  {...props}/>
    )
}

const CreateButton = styled.button`
    width: ${(props) => props.width || ''};
    height: ${(props) => props.height || ''};
    border-radius: ${(props) => props.radius || '10px'};
    color: ${(props) => props.color || '#4f4f4f'};
    background: ${(props) => props.background || ''};
    border: none;
    font-size: ${(props) => props.size || '14px'};
    font-weight: ${(props) => props.weight || '400'};
`

export default Button;