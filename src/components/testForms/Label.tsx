import React, { } from 'react'

type cardProps = {
    inputName: string,
    text: string,
    handlingFunction: any,
    validateFunction: any,
    varState: string
}

function IntInput( { inputName, text, handlingFunction, validateFunction, varState }: cardProps ) {
    //HANDLERS

    //RETURN
        return (
            <div>
                <label> {text} <br/>
                    <input 
                    name={inputName}
                    type="text"
                    onChange = {handlingFunction}
                    value={varState}
                    onBlur={validateFunction}
                    />
                </label>
            </div>
        )
}

export default IntInput;