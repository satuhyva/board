import React from 'react'
import { CardContainer } from '../styled_components/CardContainer'
import { CardTitle } from '../styled_components/CardTitle'
import { useDrag } from 'react-dnd'
import { Draggables } from '../types/Draggables'


type ColumnProps = {
    title: string,
    id: number,
}

const Card: React.FC<ColumnProps> = ({ title, id }) => {

    const [ { isDragging }, drag] = useDrag(() => ({
        type: Draggables.TASK,
        item: { id: id },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    return (
        <CardContainer
            ref={drag}
            style={{ opacity: isDragging ? 0.25 : 1}}
            data-testid={`card-${id}`}
        >
            <CardTitle>
                {title}
            </CardTitle>
        </CardContainer>
    )
}


export default Card