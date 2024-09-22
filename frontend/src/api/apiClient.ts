import axios, { AxiosError, AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8080/api/v1",
    headers: {
        // TODO: Add any required headers
        "Content-Type": "application/json",
    },
    timeout: 10000,
});

apiClient.interceptors.request.use(config => {
    // TODO: Add any auth tokens or modify headers
    return config;
});

apiClient.interceptors.response.use(async response => {
    // TODO: Add any response interceptors here
    return response;
}, (error: AxiosError) => {
    // TODO: Handle response errors
    console.error(error);
    return Promise.reject(error);
});

export default apiClient;