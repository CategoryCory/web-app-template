import axios, { AxiosError, AxiosResponse } from "axios";
import { IHealthStatus } from "../models/healthStatus";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080/api/v1";

axios.interceptors.request.use(config => {
    // TODO: Add any necessary request interceptors
    return config;
});

axios.interceptors.response.use(async response => {
    // TODO: Add any necessary response interceptors
    return response;
}, (error: AxiosError) => {
    // TODO: Handle response errors
    console.error(error);
});

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post: <T> (url: string, body: object) => axios.post<T>(url, body).then(responseBody),
    put: <T> (url: string, body: object) => axios.put<T>(url, body).then(responseBody),
    del: <T> (url: string) => axios.delete<T>(url).then(responseBody),
}

const HealthStatus = {
    getHealthStatus: () => requests.get<IHealthStatus>("/health")
};

const apiAgent = {
    HealthStatus
};

export default apiAgent;