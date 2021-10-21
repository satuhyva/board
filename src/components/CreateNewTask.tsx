import React, { useState } from 'react'
import { CreateNewButton } from '../styled_components/CreateNewButton'
import { CreateNewContainer } from '../styled_components/CreateNewContainer'
import { NewInput } from '../styled_components/NewInput'



type CreateNewProps = {
    createNewTask: (newTask: string) => void
}

const CreateNewTask: React.FC<CreateNewProps> = ({ createNewTask }) => {

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
            <CreateNewButton onClick={() => setShowInput(true)}>
                CREATE NEW TASK
            </CreateNewButton>)
    }

    return (
        <CreateNewContainer >
            <NewInput
                value={newItem}
                onChange={(event) => setNewItem(event.target.value)}
                onKeyPress={handleKeyboardPress}
                placeholder='Type the task here ...'
            />
            <div>
                <CreateNewButton onClick={() => setShowInput(false)}>
                    CANCEL
                </CreateNewButton>   
                <CreateNewButton onClick={handleCreateNew}>
                    CREATE
                </CreateNewButton>             
            </div>


        </CreateNewContainer>
    )
}


export default CreateNewTask