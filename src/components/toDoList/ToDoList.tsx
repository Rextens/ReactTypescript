import React, { useState, ChangeEvent } from 'react'
import ToDo from './ToDo'

function ToDoList(props: any) {

    ///VARIABLE
    const [toDoList, setToDoList] = useState<Array<string> >([])
    const [inputValue, setInputValue] = useState<string>("")

    //HANDLERS
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setInputValue(value);
    }

    const handleButtonClick = () => {
        setToDoList([...toDoList, inputValue])
        setInputValue("")
    }

    ///RETURN
    return (
        <div>
            <input name="addTaskInput"
                placeholder="Give me some task"
                value={inputValue}
                onChange={handleInputChange} />

            <button onClick={handleButtonClick}> Add task </button>

            {toDoList.map((value, index) => (
                <ToDo task={ value } storedTasks={ toDoList } elementIndex={ index } setStoredTasks={ setToDoList } />
            ))}
            
            <br/>
            <button onClick={handleButtonClick}> Delete all tasks </button>
        </div>
    )
}

export default ToDoList;