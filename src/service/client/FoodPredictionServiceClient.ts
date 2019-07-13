import { HttpClient } from '../../utils/httpClient';
import { PredicitionResponse } from '../../model/customVision/PredictionResponse';
import { PredictionRequest } from '../../model/customVision/PredictionRequest';

export class FoodPredictionServiceClient {
    httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    async predictFood(predictionRequest: PredictionRequest): Promise<PredicitionResponse> {
        if (!predictionRequest.Url) {
            throw new Error('You need to send a valid image URL');
        }
        return await this.httpClient.post({
            Url: predictionRequest.Url
        });
    }
}