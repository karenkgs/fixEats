import { FoodPredictionServiceClient } from './client/FoodPredictionServiceClient';
import FoodClassificationRequest from '../model/FoodClassificationRequest';
export class FoodClassificationService {
    foodPredictionServiceClient: FoodPredictionServiceClient;

    constructor(foodPredictionServiceClient: FoodPredictionServiceClient) {
        this.foodPredictionServiceClient = foodPredictionServiceClient;
    }

    async classifyFoodBasedOnImage(foodClassificationRequest: FoodClassificationRequest): Promise<any> {
        try {
            const predictionResponse = await this.foodPredictionServiceClient.predictFood({
                Url: foodClassificationRequest.imageUrl
            });

            let isGoodFood;
            let goodClassificationProbability;
            let badClassificationProbability;

            predictionResponse.predictions.forEach(prediction => {
                if (foodClassificationRequest.classificationKeys.bad === prediction.tagName) {
                    badClassificationProbability = prediction.probability;
                } else if (foodClassificationRequest.classificationKeys.good === prediction.tagName) {
                    goodClassificationProbability = prediction.probability;
                } else {
                    throw new Error(`The Classification keys don't match`);
                }
            });
            isGoodFood = goodClassificationProbability > badClassificationProbability;

            return {
                isGoodFood,
                probability: isGoodFood ? `${Math.round(goodClassificationProbability * 100)}%` : `${Math.round(badClassificationProbability * 100)}%`
            };

        } catch (error) {
            return {
                errorMessage: `Something went wrong: ${error}`
            };
        }
    }

}