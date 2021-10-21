import { Task } from './Task'


export type AppState = {
    tasks: Task[],
    taskBeingDragged: number | undefined,
}