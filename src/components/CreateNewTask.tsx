import React, { useState } from 'react'
import { CreateNewTaskButton } from '../styled_components/CreateNewTaskButton'
import { CreateNewContainer } from '../styled_components/CreateNewContainer'
import { NewTaskInput } from '../styled_components/NewTaskInput'



export type CreateNewTaskProps = {
    createNewTask: (newTask: string) => void
}

const CreateNewTask: React.FC<CreateNewTaskProps> = ({ createNewTask }) => {

    const [showInput, setShowInput] = useState(false)
    const [newItem, setNewItem] = useState('')


    const handleCreateNew = () => {
        if (newItem === '') return
        createNewTask(newItem)
        setShowInput(false)
        setNewItem('')
    }

    const handleKeyboardPress = (event: React.KeyboardEvent<HTMLInputElement> | undefined) => {
        if (event && event.key === 'Enter') {
            handleCreateNew()
        }
    }

    if (!showInput) {
        return (
            <CreateNewTaskButton onClick={() => setShowInput(true)}>
                CREATE NEW TASK
            </CreateNewTaskButton>)
    }

    return (
        <CreateNewContainer >
            <NewTaskInput
                value={newItem}
                onChange={(event) => setNewItem(event.target.value)}
                onKeyPress={handleKeyboardPress}
                placeholder='Type the task here ...'
            />
            <div>
                <CreateNewTaskButton onClick={() => setShowInput(false)}>
                    CANCEL
                </CreateNewTaskButton>   
                <CreateNewTaskButton onClick={handleCreateNew}>
                    CREATE
                </CreateNewTaskButton>             
            </div>


        </CreateNewContainer>
    )
}


export default CreateNewTask