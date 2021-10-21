import { createContext } from 'react'
import { initialState } from './initialState'
import { Context } from '../types/Context'


export const AppContext = createContext<Context>({ 
    state: initialState,
    dispatch: () => null,
})