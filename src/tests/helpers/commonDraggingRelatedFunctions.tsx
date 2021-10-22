import React from 'react'
import { render, screen } from  '@testing-library/react'
import App from '../../App'
import { ThemeProvider} from 'styled-components'
import { theme } from '../../utils/theme'
import AppTestContextWithState from './AppTestContextWithState'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { INITIAL_TEST_TASKS } from './AppTestContextWithState'


export const renderApp = () => {
    render(
        <DndProvider backend={HTML5Backend}>
            <ThemeProvider theme={theme}>
                <AppTestContextWithState>
                    <App/>
                </AppTestContextWithState>
            </ThemeProvider>
        </DndProvider>
    )
}


export const getColumns = () => {
    const waitingColumn = screen.getByTestId('column-WAITING')
    const ongoingColumn = screen.getByTestId('column-ONGOING')     
    const doneColumn = screen.getByTestId('column-DONE')
    return {
        waitingColumn: waitingColumn,
        ongoingColumn: ongoingColumn,
        doneColumn: doneColumn
    }
}

export const getCounts = () => {
    return {
        waitingCount: INITIAL_TEST_TASKS.waiting.length,
        ongoingCount: INITIAL_TEST_TASKS.ongoing.length,
        doneCount: INITIAL_TEST_TASKS.done.length,
    }
}