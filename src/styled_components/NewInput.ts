import styled from 'styled-components'


export const NewInput = styled.input`
    background-color: ${ props => props.theme.colors.color4 };
    color: ${ props => props.theme.colors.color2 };
    font-size: 1em;
    width: 100%;
    border-radius: 3px;
    border-width: 1px;
    border: solid;
    padding: 10px;
`
