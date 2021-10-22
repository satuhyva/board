import styled from 'styled-components'


export const CreateNewTaskButton = styled.button`
    background-color: ${ props => props.theme.colors.color2 };
    color: ${ props => props.theme.colors.color4 };
    font-size: 1em;
    border-radius: 3px;
    border: none;
    padding: 10px;
    margin: 20px;

    &:hover {
        background-color: ${ props => props.theme.colors.color1 };
        color: ${ props => props.theme.colors.color4 };
    }
`
