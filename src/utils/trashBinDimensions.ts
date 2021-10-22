import { COLUMN_DIVIDER } from './constants'

export const getTrashBinWidth = () => {
    return (window.innerWidth  / COLUMN_DIVIDER).toString() + 'px'
}

export const getTrashBinHeight = () => {
    return (window.innerWidth  / 15).toString() + 'px'
}
