import styled from 'styled-components'


export const CardTitle = styled.p`
    background-color: ${ props => props.theme.colors.color4 };
    border-radius: 5px;
    border: none;
    color: ${ props => props.theme.colors.color2 };
    font-family: Arial, Helvetica, sans-serif;
    padding: 10px;
    overflow: hidden;
`