import { Prediction } from './Prediction';

export interface PredicitionResponse {
    id: string;
    project: string;
    iteration: string;
    created: string;
    predictions: Array<Prediction>;
}