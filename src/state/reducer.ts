import { Action } from '../types/Action'
import { AppState } from '../types/AppState'
import { getNextAvailableIdNumber } from '../utils/getNextAvailableIdNumber'



export const reducer = (state: AppState, action: Action): AppState => {

    switch (action.type) {
    case 'ADD_NEW':
        return { ...state, 
            tasks: [
                ...state.tasks, 
                { 
                    id: getNextAvailableIdNumber(state), 
                    mode: 'waiting', 
                    description: action.data 
                }
            ] 
        }
    case 'REMOVE_TASK':
        return { ...state,  tasks: state.tasks.filter(task => task.id !== action.data)}
    case 'MOVE_TASK':
        return { ...state, tasks: state.tasks.map(task => {
            if (task.id === action.data.id) {
                task.mode = action.data.to
            }
            return task
        })}
    default:
        throw new Error(`Action ${action} not implemented!`)
    }
}