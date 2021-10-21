import { Mode } from './Mode'


export type Action = 
| {
    type: 'ADD_NEW',
    data: string
}
| {
    type: 'REMOVE_TASK',
    data: number,
}
| {
    type: 'MOVE_TASK',
    data: {
        to: Mode,
        id: number
    }
}
