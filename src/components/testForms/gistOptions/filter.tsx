import React, { } from 'react'
import CustomForm from '../../others/CustomForm'
import IntInput from '../Label'
import GithubWrapper from '../../others/GithubWrapper'

export default class Filter extends CustomForm {

    state = {
        Keyword: '',
        KeywordError: '',
    }

    handleSubmit = () => {
        let githubWrapper: GithubWrapper = new GithubWrapper();

        githubWrapper.filter('Rextens', this.state.Keyword).then((collection) => {
            collection.forEach(function(item: any) {
              console.log(`${item.id}-${item.description}`)
            })
        })
    }

    render()
    {
        const { Keyword }: any = this.state;
        
        return (
            <div>    
                <form onSubmit={this.handleSubmit}>
                    <IntInput inputName={'Keyword'} text={'gist keyword'} handlingFunction={this.handleInputChange} validateFunction={(event: React.FocusEvent<HTMLInputElement>) => this.validateInput(event, 3)} varState={Keyword} /> 

                    <button>Submit!</button>
                </form>
            </div>
        )
    }
}

