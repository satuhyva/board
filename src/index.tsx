import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ThemeProvider} from 'styled-components'
import { theme } from './utils/theme'
import AppContextWithState from './state/AppContextWithState'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'



ReactDOM.render(
    <React.StrictMode>
        <DndProvider backend={HTML5Backend}>
            <ThemeProvider theme={theme}>
                <AppContextWithState>
                    <App/>
                </AppContextWithState>
            </ThemeProvider>
        </DndProvider>

    </React.StrictMode>,
    document.getElementById('root')
)


