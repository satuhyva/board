import styled from 'styled-components'


const getWidth = () => {
    const innerWidth = window.innerWidth
    if (innerWidth < 550) {
        return (innerWidth * 0.7).toString() + 'px'
    }
    return (window.innerWidth / 3.75).toString() + 'px'
}

export const OneColumnContainer = styled.div`
    background-color: ${props => props.color ? props.color : props.theme.colors.color3};
    width: ${getWidth()};
    flex: 1;
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
`

