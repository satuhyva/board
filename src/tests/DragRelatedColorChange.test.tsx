import { screen, fireEvent } from  '@testing-library/react'
import { theme } from '../utils/theme'
import { renderApp, getColumns } from './helpers/commonDraggingRelatedFunctions'
import 'jest-styled-components'


// Cleanup function does not work, so the test cases are in different files.

describe('Dragging a card', () => {


    it('onto another column causes a change in target column color', () => {
        renderApp()
        const { doneColumn } = getColumns()
        expect(doneColumn).toHaveStyleRule('background-color', theme.colors.color3)
        const firstTask = screen.getByTestId('card-1')
        fireEvent.dragStart(firstTask)
        fireEvent.dragEnter(doneColumn)
        expect(doneColumn).toHaveStyleRule('background-color', theme.colors.color2)
    })


})
