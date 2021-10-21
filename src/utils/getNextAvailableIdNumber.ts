import { AppState } from '../types/AppState'
import { Task } from '../types/Task'

export const getNextAvailableIdNumber = (state: AppState): number => {
    if (state.tasks.length === 0) return 1
    const reducer = (previous: Task, current: Task) => current.id > previous.id ? current : previous 
    const id = state.tasks.reduce(reducer).id + 1
    return id
}








