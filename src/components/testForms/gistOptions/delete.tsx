import React, { } from 'react'
import CustomForm from '../../others/CustomForm'
import GithubWrapper from '../../others/GithubWrapper'
import IntInput from '../Label'
import './DeleteInput.css'

export default class DeleteGist extends CustomForm {

    state = {
        descriptions : [] = [],
        ids : [] = [],
        pushed: [] = []
    }

    getGists() {
        let githubWrapper: GithubWrapper = new GithubWrapper();

        let tempDescriptions: any[] = []
        let tempIds: any[] = []
        let tempPush: any[] = []

        githubWrapper.collection('Rextens').then((result) => {
            result.data.filter(function(gist: any) {
                tempDescriptions.push(gist.description)
                tempIds.push(gist.id)
                tempPush.push(false)
            })
        }).then((result) => {
            this.setState({
                descriptions: tempDescriptions
            })
            this.setState({
                ids: tempIds
            })
            this.setState({
                pushed: tempPush
            })
        })
    }

    handleSubmit = () => {
        this.getGists();
    }

    handleGistsDeletionChanges = (event: any) => {
        let tempPush: any[] = this.state.pushed;

        tempPush[event.target.name] = !tempPush[event.target.name]

        this.setState({ pushed: tempPush });
    }
    handleGistsDeletion = () => {
        let githubWrapper: GithubWrapper = new GithubWrapper();

        let promises: Promise<any>[] = []
        
        this.state.pushed.forEach((item: any, key: any) => {
            if(item === true) {
                promises.push(githubWrapper.deleteGist(this.state.ids[key]))
            }
        })

        Promise.all(promises).then(function(value) {console.log(value)}).catch((err) => {console.log(err)});
    }

    render()
    {
        const { descriptions, pushed, Description }: any = this.state;
        
        return (
            <div>    
                <form onSubmit={this.handleSubmit}>
                    <button>Submit!</button>
                </form>

                {
                    <form onSubmit={this.handleGistsDeletion}>
                        {
                            descriptions.map((item: any, key: any) =>
                                <label className="DeleteInput">
                                    <input type="checkbox" name={key} onChange={this.handleGistsDeletionChanges} value={pushed[key]}/> {item} <br/>
                                </label>  
                            )
                        }
                        <button>Delete</button>
                    </form>
                }
            </div>
        )
    }
}

