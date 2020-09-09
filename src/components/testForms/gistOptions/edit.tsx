import React, { } from 'react'
import CustomForm from '../../others/CustomForm'
import IntInput from '../Label'
import GithubWrapper from '../../others/GithubWrapper'

export default class EditGist extends CustomForm {

    state = {
        Description: '',
        DescriptionError: '',
        TextArea: '',
    }

    constructor(props: any) {
      super(props);

      let githubWrapper: GithubWrapper = new GithubWrapper();
      githubWrapper.getGist('6616a4baa6971e8f47092c102501be79').then((response) => {
        this.setState({Description: response.data.description})
        this.setState({TextArea: response.data.files.JustFile.content})
			})
    }

    handleSubmit = () => {
        const { Description, TextArea}: any = this.state;
        
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
        
        githubWrapper.updateGist('6616a4baa6971e8f47092c102501be79', gistPayload).then((result) => {console.log(result)}).catch(error => { console.log(error.response) });
    }

    render()
    {
        const { Description, TextArea }: any = this.state;
        
        return (
            <div>    
                <form onSubmit={this.handleSubmit}>
                    <IntInput inputName={'Description'} text={'gist description'} handlingFunction={this.handleInputChange} validateFunction={(event: React.FocusEvent<HTMLInputElement>) => this.validateInput(event, 3)} varState={Description} /> 
                    <div className='invalid-feedback'>{this.state.DescriptionError}</div>

                    <textarea name={'TextArea'} value={TextArea} onChange={this.handleInputChange} rows={10} cols={50}/> <br/> 

                    <button>Submit!</button>
                </form>
            </div>
        )
    }
}

