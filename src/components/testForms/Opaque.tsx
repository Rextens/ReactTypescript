import React, { Component } from 'react'
import IntInput from './Label';
import axios from 'axios'

export default class Opaque extends Component {
    //HANDLERS

    state = {
      Test: '',
      Test0: '',
      Test1: '',
      TestError: '',
      Test0Error: '',
      Test1Error: '',
    };

    constructor(props: any) {
        super(props);

        
    
        this.handleInputChange = this.handleInputChange.bind(this);
      }

      validateInput = (event: React.FocusEvent<HTMLInputElement>, minimumValue: number) => {
        console.log(event.target.name)
      
        this.setState({
          [event.target.name + 'Error']:
            event.target.value.length > minimumValue ? null : 'Name must be longer than 3 characters'
        });
      }
    
      handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const target: EventTarget & HTMLInputElement = event.target;

        this.setState({ [target.name]: target.value });
      }

      temp(event: React.FocusEvent<HTMLInputElement>) {
        console.log(event.target.name)
      }

      testHTTP() {
        let getTest: any = localStorage.getItem('test');
        let getTest0: any = localStorage.getItem('test0');
        let getTest1: any = localStorage.getItem('test1');

        axios.post('https://jsonplaceholder.typicode.com/posts', { getTest, getTest0, getTest1 }).then(response => {        
          console.log(response)
        }).catch(error => {
          console.log(error)
        });

      }

      handleSubmit = () => {
        const { Test, Test0, Test1 }: any = this.state;

        this.testHTTP()

        localStorage.setItem('test', Test);
        localStorage.setItem('test0', Test0);
        localStorage.setItem('test1', Test1);   

        console.log(localStorage.getItem('test') + " " + localStorage.getItem('test0') + " " + localStorage.getItem('test1'))
      }
      
    //RETURN
    render()
    {
        const { Test, Test0, Test1 }: any = this.state;
        
        return (
            <div>    
                <form onSubmit={this.handleSubmit}>
                    <IntInput inputName={'Test'} text={'test'} handlingFunction={this.handleInputChange} validateFunction={(event: React.FocusEvent<HTMLInputElement>) => this.validateInput(event, 3)} varState={Test} />
                    <div className='invalid-feedback'>{this.state.TestError}</div>

                    <IntInput inputName={'Test0'} text={'test0'} handlingFunction={this.handleInputChange} validateFunction={(event: React.FocusEvent<HTMLInputElement>) => this.validateInput(event, 3)} varState={Test0} />
                    <div className='invalid-feedback'>{this.state.Test0Error}</div>

                    <IntInput inputName={'Test1'} text={'test1'} handlingFunction={this.handleInputChange} validateFunction={(event: React.FocusEvent<HTMLInputElement>) => this.validateInput(event, 3)} varState={Test1} />
                    <div className='invalid-feedback'>{this.state.Test1Error}</div>

                    <button type="submit">Submit!</button>
                </form>
                <button onClick={this.testHTTP} >Test Me!</button>
            </div>
        )
    }
}