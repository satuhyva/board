import { useContext } from 'react'
import { AppContext } from '../state/AppContext'
import { Task } from '../types/Task'
import { Mode } from '../types/Mode'


type UseAppState = {
    tasks: Task[],
    createNewTask: (newTask: string) => void,
    moveTask: (id: number, to: Mode) => void,
    removeTask: (id: number) => void,
}

export const useAppState = (): UseAppState => {


    const { state, dispatch } = useContext(AppContext)

    const createNewTask = (newTask: string) => {
        dispatch({ type: 'ADD_NEW', data: newTask})
    }

    const moveTask = (id: number, to: Mode) => {
        dispatch({ type: 'MOVE_TASK', data: { id: id, to: to }})
    }

    const removeTask = (id: number) => {
        dispatch({ type: 'REMOVE_TASK', data: id })
    }

    return {
        tasks: state.tasks,
        createNewTask,
        moveTask,
        removeTask
    }

}