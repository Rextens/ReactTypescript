import React, { Component } from 'react'

export default class CustomForm extends Component {
    //HANDLERS

    state = {
    };

    constructor(props: any) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);       
      }

      validateInput = (event: React.FocusEvent<HTMLInputElement>, minimumValue: number) => {
        this.setState({
          [event.target.name + 'Error']:
            event.target.value.length > minimumValue ? null : 'Name must be longer than 3 characters'
        });
      }
    
      handleInputChange(event: any) {
        this.setState({ [event.target.name]: event.target.value });
      }
    
      handleSubmit = () => {
        
      }  
    //RETURN
    render()
    {
        return (
            <div>    
                <form onSubmit={this.handleSubmit}>

                    <button>Submit!</button>
                </form>
            </div>
        )
    }
}