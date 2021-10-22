import styled from 'styled-components'
import { getWindowInnerWidth } from '../utils/getWindowInnerWidth'



export const AllColumnsContainer = styled.div`
    display: flex;
    flex-direction: ${getWindowInnerWidth() < 550 ? 'column' : 'row'};
    align-items: flex-start;
    justify-content: center;
`
