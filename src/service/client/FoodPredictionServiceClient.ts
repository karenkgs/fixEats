import { HttpClient } from '../../utils/httpClient';
import { PredicitionResponse } from '../../model/customVision/PredictionResponse';

export class FoodPredictionServiceClient {
    httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    async predictFood(Url: string): Promise<PredicitionResponse> {
        if (!Url) {
            throw new Error('You need to send a valid image URL');
        }
        return await this.httpClient.post({
            Url
        });
    }
}