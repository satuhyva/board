import styled from 'styled-components'


export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${ props => props.theme.colors.color4 };
    width: 100%;
    height: 100%;
`

