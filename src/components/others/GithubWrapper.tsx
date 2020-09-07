import axios, { AxiosInstance } from 'axios'
import * as dotenv from 'dotenv';

export default class GithubWrapper {

    client: AxiosInstance;
    
    constructor() {
        dotenv.config({ path: './.env' })

        this.client = axios.create({
          baseURL: 'https://api.github.com/',
          responseType: 'json',
          headers: {
            'Accept': 'application/vnd.github.v3+json',
            'Authorization': 'token ' + process.env.REACT_APP_GITHUB_TOKEN,
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

    private deleteRequest(path: string) {
        return this.client.delete(path)
    }
    
    root() {
        return this.getRequest('/')
    }
    
    async createGist(payload: any) {
        return await this.postRequest('/gists', payload)
    }
    
    async getGist(gistId: any) {
        return await this.getRequest(`/gists/${gistId}`)
    }

    async updateGist(gistId: any, payload: any) {
        return await this.patchRequest(`/gists/${gistId}`, payload)
    }

    async collection(githubUsername: any, per_page = 30, page = 1) {
        return await this.getRequest(`/users/${githubUsername}/gists?per_page=${per_page}&page=${page}`)
    }

    async deleteGist(gistId: any) {
        return await this.deleteRequest(`/gists/${gistId}`)
    }

    async filter(githubUsername: any, keyword: any, per_page = 30, page = 1) {
		return await this.collection(githubUsername, per_page, page).then((response) => {
				return response.data.filter(function(gist: any) {
					return gist.description.includes(keyword)
				})
			}).catch((result) => {
                return 'found error, check username'
            })
	}
}