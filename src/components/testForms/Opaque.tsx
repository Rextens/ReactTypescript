import React, { Component } from 'react'
import IntInput from './Label';
import GithubWrapper from '../others/GithubWrapper'

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
        

       //    
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

      testHTTP(getValues: any) {
        let getTest: any = localStorage.getItem('test');
        let getTest0: any = localStorage.getItem('test0');
        let getTest1: any = localStorage.getItem('test1');
      }

      testGist() {
        let githubWrapper: GithubWrapper = new GithubWrapper();
       // githubWrapper.getGist('68668b1c5d4c7d6cb4ad9a555e2fe93a').then((result) => {console.log(result)})

       let gistPayload = {
        "description": "Hello World Examples",
        "public": true,
        "files": {
          "hello_world.rb": {
            "content": "class HelloWorld\n   def initialize(name)\n      @name = name.capitalize\n   end\n   def sayHi\n      puts \"Hello !\"\n   end\nend\n\nhello = HelloWorld.new(\"World\")\nhello.sayHi"
          },
          "hello_world.pyss": {
            "content": "class HelloWorld:\n\n    def __init__(self, name):\n        self.name = name.capitalize()\n       \n    def sayHi(self):\n        print \"Hello \" + self.name + \"!\"\n\nhello = HelloWorld(\"world\")\nhello.sayHi()"
          },
          "hello_world_ruby.txt": {
            "content": "Run `ruby hello_world.rb` to print Hello World"
          },
          "hello_world_python.txt": {
            "content": "Run `python hello_world.py` to print Hello World"
          }
        }
      }

        //githubWrapper.createGist(gistPayload).then((result) => {console.log(result)}).catch(error => { console.log(error.response) });
        //githubWrapper.collection('Rextens').then((result) => {console.log(result)}).catch(error => { console.log(error.response) });
        //githubWrapper.filter('Rextens', 'gist').then((result) => {console.log(result)}).catch(error => { console.log(error.response) });
      }

      handleSubmit = () => {
        const { Test, Test0, Test1 }: any = this.state;  


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

                    <button>Submit!</button>
                </form>
                <button id="forTesting" onClick={this.testHTTP} >Test Me!</button> 
                <br/>
                <button id="forTesting3" onClick={this.testGist} >Test Me3!</button>
            </div>
        )
    }
}
/*
function useLocalStorage(key: any, initialValue: any) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value: any) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}
*/