import React from 'react'

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

        storedTasks.forEach((value, index) => {
            if(index !== elementIndex) {
                temporaryTasks.push(value);
            }
        })

        setStoredTasks(temporaryTasks)
       
       // test(); 
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