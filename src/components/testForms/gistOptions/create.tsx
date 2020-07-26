import React, { } from 'react'
import CustomForm from '../../others/CustomForm'
import IntInput from '../Label'
import GithubWrapper from '../../others/GithubWrapper'

export default class CreateGist extends CustomForm {

    state = {
        Description: '',
        DescriptionError: '',
        TextArea: '',
    }

    handleSubmit = () => {
        const { Description, TextArea }: any = this.state;
        
        let githubWrapper: GithubWrapper = new GithubWrapper();

        let gistPayload = {
            "description": Description,
            "public": true,
            "files": {
              "JustFile": {
                "content": TextArea
              },
            }
          }
        
        githubWrapper.createGist(gistPayload).then((result) => {console.log(result)}).catch(error => { console.log(error.response) });
    }

    render()
    {
        const { Description }: any = this.state;
        
        return (
            <div>    
                <form onSubmit={this.handleSubmit}>
                    <IntInput inputName={'Description'} text={'gist description'} handlingFunction={this.handleInputChange} validateFunction={(event: React.FocusEvent<HTMLInputElement>) => this.validateInput(event, 3)} varState={Description} /> 
                    <div className='invalid-feedback'>{this.state.DescriptionError}</div>

                    <textarea name={'TextArea'} value={this.state.TextArea} onChange={this.handleInputChange} rows={10} cols={50} /> <br/> 

                    <button>Submit!</button>
                </form>
            </div>
        )
    }
}

