import { HttpClientConfig } from '../model/HttpClientConfig';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export class HttpClient {
    config: HttpClientConfig;
    axiosInstance: AxiosInstance;

    constructor(config: HttpClientConfig) {
        this.config = config;
        this.axiosInstance = axios.create(config);
    }

    async post(data: any, url?: string): Promise<any> {
        if (!data) {
            throw new Error('You need to pass some data');
        }

        let response;

        try {
            if (url) {
                response = await this.axiosInstance.post(url, data, this.config);
            } else {
                response = await this.axiosInstance.post('', data);
            }
            return response.data;
        } catch (error) {
            throw new Error(`Something went wrong, this was the response: ${error}`);
        }
    }
}