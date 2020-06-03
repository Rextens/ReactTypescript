import React from 'react'
import ToDoList from './ToDoList'

import { type } from 'os';

type cardProps = {
    task: string
    storedTasks: Array<string>
    elementIndex: number
    setStoredTasks: React.Dispatch<React.SetStateAction<string[]> >
}

function ToDo( { task, storedTasks, elementIndex, setStoredTasks }: cardProps ) {
    
    //HANDLERS
    const handleButtonClick = () => {
        
        let temporaryTasks: Array<string> = []

        storedTasks.map((value, index) => {
            if(index != elementIndex) {
                temporaryTasks.push(value);
            }
        })

        setStoredTasks(temporaryTasks)
    }

    //RETURN
    return (
        <div>
            {task}
            <button onClick={handleButtonClick}> Delete me! End my suffering! </button>
        </div>
    )
}

export default ToDo;