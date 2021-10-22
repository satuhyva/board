import {  screen, fireEvent } from  '@testing-library/react'
import { renderApp, getColumns, getCounts } from './helpers/commonDraggingRelatedFunctions'




describe('Dragging a card', () => {

    it('from one column to another and dropping the card there can be done', () => {
        renderApp()

        const { waitingColumn, ongoingColumn, doneColumn } = getColumns()
        const { waitingCount, ongoingCount, doneCount } = getCounts()

        expect(waitingColumn.children.length).toBe(waitingCount + 1)
        expect(ongoingColumn.children.length).toBe(ongoingCount + 1)
        expect(doneColumn.children.length).toBe(doneCount + 1)

        const firstTask = screen.getByTestId('card-1')
        fireEvent.dragStart(firstTask)
        fireEvent.dragEnter(doneColumn)
        fireEvent.drop(doneColumn)
        expect(waitingColumn.children.length).toBe(waitingCount - 1 + 1)
        expect(ongoingColumn.children.length).toBe(ongoingCount + 1)
        expect(doneColumn.children.length).toBe(doneCount + 1 + 1)

    })
    
})
