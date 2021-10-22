import React from 'react'
import { OneColumnContainer } from '../styled_components/OneColumnContainer'
import { ColumnTitle } from '../styled_components/ColumnTitle'
import { useDrop } from 'react-dnd'
import { Draggables } from '../types/Draggables'
import { Mode } from '../types/Mode'
import { Task } from '../types/Task'
import Card from './Card'
import { useAppState } from '../utils/useAppState'
import { theme } from '../utils/theme'



export type ColumnProps = {
    title: string,
    mode: Mode,
    tasks: Task[]
}

const Column: React.FC<ColumnProps> = ({ title, mode, tasks }) => {

    const { moveTask } = useAppState()

    const [ {isActive}, drop] = useDrop(() => ({
        accept: Draggables.TASK,
        drop: (item) => moveTask((item as { id: number }).id, mode),
        collect: monitor => ({
            isActive: monitor.canDrop() && monitor.isOver(),
        }),
    }), [])

    const colorProps = isActive ? { color: theme.colors.color2 } : {}

    return (
        <OneColumnContainer
            ref={drop}
            {...colorProps} 
            data-testid={`column-${title}`}
        >
            <ColumnTitle>
                {title}
            </ColumnTitle>
            {tasks.map(task => {
                return (
                    <Card key={task.id} title={task.description} id={task.id}/>
                )
            })}
        </OneColumnContainer>
    )
}


export default Column

