// import { useContext } from 'react'
// import { useDrag } from 'react-dnd'
// import { AppContext } from '../state/AppContext'
// import { TaskBeingDragged } from '../types/TaskBeingDragged'
// import { Draggables } from '../types/Draggables'


// export const useDragTask = (taskBeingDragged: TaskBeingDragged) => {

//     const { dispatch } = useContext(AppContext)
//     const [, drag] = useDrag({
//         type: Draggables.TASK,
//         task,
//         begin: () => dispatch({ type: 'SET_DRAG_TASK', data: taskBeingDragged }),
//         end:  () => dispatch({ type: 'SET_DRAG_TASK', data: undefined }),  

//     }
        
//     )

//     return { drag }

// }

export default {}
