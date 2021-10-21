import React, { useReducer } from 'react'
import { AppContext } from './AppContext'
import { initialState } from './initialState'
import { reducer } from './reducer'



const AppContextWithState: React.FC = ({ children })=> {

    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>

    )
}

export default AppContextWithState

