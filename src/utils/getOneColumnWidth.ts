import { MIN_ROW_VIEW_WIDTH, COLUMN_DIVIDER } from './constants'

export const getOneColumnWidth = () => {
    const innerWidth = window.innerWidth
    if (innerWidth < MIN_ROW_VIEW_WIDTH) {
        return (innerWidth * 0.7).toString() + 'px'
    }
    return (window.innerWidth / COLUMN_DIVIDER).toString() + 'px'
}