import React from 'react'
import { AppContainer } from './styled_components/AppContainer'
import { AllColumnsContainer } from './styled_components/AllColumnsContainer'
import { AppTitle } from './styled_components/AppTitle'
import Column from './components/Column'
import CreateNewTask from './components/CreateNewTask'
import { useAppState } from './utils/useAppState'
import TrashBin from './components/TrashBin'
import { Info } from './styled_components/Info'

function App() {

    const { tasks, createNewTask } = useAppState()


    return (
        <AppContainer>
            <AppTitle>TASK BOARD</AppTitle>
            <Info>a wannabe trello app</Info>
            <Info>{"just drag'n'drop your tasks around"}</Info>
            <CreateNewTask createNewTask={createNewTask}/>
            <AllColumnsContainer>
                <Column title='WAITING' mode='waiting' tasks={tasks.filter(task => task.mode ==='waiting')}/>
                <Column title='ONGOING' mode='ongoing' tasks={tasks.filter(task => task.mode ==='ongoing')}/>
                <Column title='DONE' mode='done' tasks={tasks.filter(task => task.mode ==='done')}/>
            </AllColumnsContainer>
            <TrashBin/>
        </AppContainer>
    )
}

export default App
