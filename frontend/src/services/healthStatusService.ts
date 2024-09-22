import apiClient from "../api/apiClient";
import { HealthStatus } from "../models/HealthStatus";

export const getHealthStatus = async (): Promise<HealthStatus> => {
    const response = await apiClient.get<HealthStatus>("/health");
    return response.data;
}