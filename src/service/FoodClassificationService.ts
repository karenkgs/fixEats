import { FoodPredictionServiceClient } from './client/FoodPredictionServiceClient';
import FoodClassificationRequest from '../model/FoodClassificationRequest';
export class FoodClassificationService {
    foodPredictionServiceClient: FoodPredictionServiceClient;

    constructor(foodPredictionServiceClient: FoodPredictionServiceClient) {
        this.foodPredictionServiceClient = foodPredictionServiceClient;
    }

    async classifyFoodBasedOnImage(foodClassificationRequest: FoodClassificationRequest): Promise<any> { // TODO - type it
        try {
            const predictionResponse = await this.foodPredictionServiceClient.predictFood({
                Url: foodClassificationRequest.imageUrl
            });
            let isGoodFood;
            let goodClassificationProbability;
            let badClassificationProbability;

            predictionResponse.predictions.forEach(prediction => {
                console.log('Its inside the loop');
                if (foodClassificationRequest.classificationKeys.badClassification === prediction.tagName) {
                    badClassificationProbability = prediction.probability;
                } else {
                    goodClassificationProbability = prediction.probability;
                }
            });

            console.log('Its outside the loop');
            console.log(`Good: ${goodClassificationProbability}`);
            console.log(`Bad: ${badClassificationProbability}`);

            isGoodFood = goodClassificationProbability > badClassificationProbability;

            return {
                isGoodFood,
                probability: isGoodFood ? goodClassificationProbability : badClassificationProbability
            };

        } catch (error) {
            return {
                errorMessage: `Something went wrong: ${error}`
            };
        }
    }

}