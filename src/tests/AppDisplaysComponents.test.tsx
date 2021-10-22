/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { render } from  '@testing-library/react'
import App from '../App'
import { ThemeProvider} from 'styled-components'
import { theme } from '../utils/theme'
import AppContextWithState from '../state/AppContextWithState'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import TrashBin from '../components/TrashBin'
import Column, { ColumnProps } from '../components/Column'
import CreateNewTask, { CreateNewTaskProps } from '../components/CreateNewTask'
import Mock from './helpers/Mock'


const TRASH_MOCK_TEXT = 'TRASH MOCK'
jest.mock('../components/TrashBin', () => () => <Mock text={TRASH_MOCK_TEXT}/>)
jest.mock('../components/Column', () => (props: ColumnProps) => {
    return <Mock text={props.title}/>
})
const CREATE_NEW_TASK_MOCK = 'CREATE NEW TASK MOCK'
jest.mock('../components/CreateNewTask', () => () => <Mock text={CREATE_NEW_TASK_MOCK}/>)


const renderApp = () => {
    return render(
        <DndProvider backend={HTML5Backend}>
            <ThemeProvider theme={theme}>
                <AppContextWithState>
                    <App/>
                </AppContextWithState>
            </ThemeProvider>
        </DndProvider>
    )
}


describe('App', () => {

    it('renders the create new task component', () => {
        const { container } = renderApp()
        expect(container.innerHTML).toContain(CREATE_NEW_TASK_MOCK)
    })

    it('renders the "waiting" column component', () => {
        const { container } = renderApp()
        expect(container.innerHTML).toContain('WAITING')
    })

    it('renders the "ongoing" column component', () => {
        const { container } = renderApp()
        expect(container.innerHTML).toContain('ONGOING')
    })

    it('renders the "done" column component', () => {
        const { container } = renderApp()
        expect(container.innerHTML).toContain('DONE')
    })

    it('renders the trash component', () => {
        const { container } = renderApp()
        expect(container.innerHTML).toContain(TRASH_MOCK_TEXT)
    }) 

})
