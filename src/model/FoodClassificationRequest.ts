import { ClassificationKeys } from './ClassificationKeys';

export default interface FoodClassificationRequest {
    imageUrl: string;
    classificationKeys: ClassificationKeys;
}