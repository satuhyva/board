import styled from 'styled-components'


const getWidth = () => {
    return (window.innerWidth  / 3.75).toString() + 'px'
}

const getHeight = () => {
    return (window.innerWidth  / 15).toString() + 'px'
}


export const TrashBinContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.color ? props.color : props.theme.colors.color1};
    width: ${getWidth()};
    height: ${getHeight()};
    border-radius: 5px;
    margin: 10px;
    padding: 10px;
`

