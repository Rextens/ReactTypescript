import React from 'react';
import { render } from '@testing-library/react';
import axios, { AxiosInstance } from 'axios'
import GithubWrapper from './GithubWrapper'
const validJSON = require('./return.json')

jest.mock('axios')

describe('check collection', () => {
    it('what happen when return is proper', async () => {
        const mockedAxios = axios as jest.Mocked<typeof axios>;

        mockedAxios.create = jest.fn(() => mockedAxios)

        mockedAxios.get.mockImplementationOnce(() => {
            return Promise.resolve(validJSON);
        })

        

        jest.mock('axios', () => {
            return {
                interceptors: {
                    request: { use: jest.fn(), eject: jest.fn() },
                    response: { use: jest.fn(), eject: jest.fn() },
                },
            };
        });

        let githubWrapper: GithubWrapper = new GithubWrapper();

        const result = await githubWrapper.filter('Rextens', 'ddd');

        expect(result).toStrictEqual([{"description": "ddd"}])
    })

    it('what happen when return is wrong', async () => {
        const mockedAxios = axios as jest.Mocked<typeof axios>;

        mockedAxios.create = jest.fn(() => mockedAxios)

        mockedAxios.get.mockImplementationOnce(() => {
            return Promise.reject({
                "descripion": "description",
                "public": "true",
                "files": {
                    "cars": {
                    "content": "textContent"
                    }
                },
                "data": [{
                    "description": "ddd"
                }, {
                    "description": "textContent2"
                }]
            });
        })

        

        jest.mock('axios', () => {
            return {
                interceptors: {
                    request: { use: jest.fn(), eject: jest.fn() },
                    response: { use: jest.fn(), eject: jest.fn() },
                },
            };
        });

        let githubWrapper: GithubWrapper = new GithubWrapper();
        
        const result = await githubWrapper.filter('Rextens', 'ddd');
        
        
        expect(result).toBe("found error, check username")
    })
})