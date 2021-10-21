import React from 'react'
import { AppState } from './AppState'
import { Action } from './Action'

export type Context = {
    state: AppState,
    dispatch: React.Dispatch<Action>,
}