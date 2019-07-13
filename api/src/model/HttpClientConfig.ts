export interface HttpClientConfig {
    baseURL: string;
    headers?: {
        [headerName: string]: string
    };
}