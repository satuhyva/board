import styled from 'styled-components'
import { getTrashBinWidth, getTrashBinHeight } from '../utils/trashBinDimensions'



export const TrashBinContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.color ? props.color : props.theme.colors.color1};
    width: ${getTrashBinWidth()};
    height: ${getTrashBinHeight()};
    max-height: 40px;
    border-radius: 5px;
    margin: 10px;
    padding: 10px;
`

