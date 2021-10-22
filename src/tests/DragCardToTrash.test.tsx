import {  screen, fireEvent } from  '@testing-library/react'
import { renderApp, getColumns, getCounts } from './helpers/commonDraggingRelatedFunctions'




describe('Dragging a card', () => {

    it('to trash bin causes it to be deleted', () => {
        renderApp()

        const { waitingColumn, ongoingColumn, doneColumn } = getColumns()
        const { waitingCount, ongoingCount, doneCount } = getCounts()

        const firstTask = screen.getByTestId('card-1')
        const trashBin = screen.getByTestId('trash-bin')
        fireEvent.dragStart(firstTask)
        fireEvent.dragEnter(trashBin)
        fireEvent.drop(trashBin)
        expect(waitingColumn.children.length).toBe(waitingCount - 1 + 1)
        expect(ongoingColumn.children.length).toBe(ongoingCount + 1)
        expect(doneColumn.children.length).toBe(doneCount + 1)

    })
    
})
