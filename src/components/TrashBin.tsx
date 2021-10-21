import React from 'react'
import { TrashBinContainer } from '../styled_components/TrashBinContainer'
import { useDrop } from 'react-dnd'
import { Draggables } from '../types/Draggables'
import { useAppState } from '../utils/useAppState'
import { Trash } from '@styled-icons/ionicons-outline'
import { theme } from '../styled_components/theme'


const TrashBin: React.FC = () => {

    const { removeTask } = useAppState()

    const [{ isActive }, drop] = useDrop(() => ({
        accept: Draggables.TASK,
        drop: (item) => removeTask((item as { id: number }).id),
        collect: monitor => ({
            isActive: monitor.canDrop() && monitor.isOver(),
        }),
    }), [])

    const colorProps = isActive ? { color: theme.colors.color2 } : {}

    return (
        <TrashBinContainer
            ref={drop}
            {...colorProps} 
        >
            <Trash color={theme.colors.color4} size='100%'/>
        </TrashBinContainer>
    )
}


export default TrashBin
