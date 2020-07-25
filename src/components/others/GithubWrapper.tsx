import axios, { AxiosInstance } from 'axios'

export default class GithubWrapper {

    token: string = '1c4867320880a6c26c1c5b7f6467b8d7e43f3c53'
    client: AxiosInstance;
    
    constructor() {
        this.client = axios.create({
          baseURL: 'https://api.github.com/',
          responseType: 'json',
          headers: {
            'Accept': 'application/vnd.github.v3+json',
            'Authorization': 'token ' + this.token,
          }
        })
      }
    private getRequest(path: string) {
        return this.client.get(path)
    }
    
    private postRequest(path: string, payload: any) {
        return this.client.post(path, payload)
    }

    private patchRequest(path: any, payload: any) {
        return this.client.patch(path, payload)
    }
    
    root() {
        return this.getRequest('/')
    }
    
    createGist(payload: any) {
        return this.postRequest('/gists', payload)
    }
    
    getGist(gistId: any) {
        return this.getRequest(`/gists/${gistId}`)
    }

    updateGist(gistId: any, payload: any) {
        return this.patchRequest(`/gists/${gistId}`, payload)
    }

    collection(githubUsername: any, per_page = 30, page = 1) {
        return this.getRequest(`/users/${githubUsername}/gists?per_page=${per_page}&page=${page}`)
    }

    filter(githubUsername: any, keyword: any, per_page = 30, page = 1) {
		return this.collection(githubUsername, per_page, page).then((response) => {
				return response.data.filter(function(gist: any) {
					return gist.description.includes(keyword)
				})
			})
	}
}