import React from 'react'
import { render } from  '@testing-library/react'
import App from '../App'
import { ThemeProvider} from 'styled-components'
import { theme } from '../utils/theme'
import AppContextWithState from '../state/AppContextWithState'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'



describe('App', () => {

    it('renders successfully', () => {
        const { container } = render(
            <DndProvider backend={HTML5Backend}>
                <ThemeProvider theme={theme}>
                    <AppContextWithState>
                        <App/>
                    </AppContextWithState>
                </ThemeProvider>
            </DndProvider>
        )
        expect(container.innerHTML).toContain('TASK BOARD')
    })

})
