import styled from 'styled-components'
import { getOneColumnWidth } from '../utils/getOneColumnWidth'



export const OneColumnContainer = styled.div`
    background-color: ${props => props.color ? props.color : props.theme.colors.color3};
    width: ${getOneColumnWidth()};
    flex: 1;
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
`

