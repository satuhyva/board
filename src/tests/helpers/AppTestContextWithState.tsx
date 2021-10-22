import React, { useReducer } from 'react'
import { AppContext } from '../../state/AppContext'
import { reducer } from '../../state/reducer'
import { Task } from '../../types/Task'
import { Mode } from '../../types/Mode'

export const INITIAL_TEST_TASKS: Record<Mode, Task[]>= {
    waiting: [
        {
            id: 1,
            mode: 'waiting',
            description: 'Task 1'
        },
        {
            id: 2,
            mode: 'waiting',
            description: 'Task 2'
        },
    ],
    ongoing: [
        {
            id: 3,
            mode: 'ongoing',
            description: 'Task 3'
        },
    ],
    done: [],
}



const getTasks = (): Task[] => {
    return INITIAL_TEST_TASKS.waiting
        .concat(INITIAL_TEST_TASKS.ongoing)
        .concat(INITIAL_TEST_TASKS.done)
}


const AppTestContextWithState: React.FC = ({ children })=> {

    const [state, dispatch] = useReducer(reducer, { tasks: getTasks() })

    return(
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>

    )
}

export default AppTestContextWithState

