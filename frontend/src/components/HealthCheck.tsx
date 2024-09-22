import { ReactElement, useEffect, useState } from "react";
import apiAgent from "../api/agent";

interface HealthStatus {
    status: string;
    msg: string;
};

function HealthCheck(): ReactElement {
    const [healthStatus, setHealthStatus] = useState<HealthStatus | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchHealthStatus = async () => {
            try {
                const status = await apiAgent.HealthStatus.getHealthStatus();
                setHealthStatus(status);
            } catch (err) {
                setError((err as Error).message);
            }
        };

        fetchHealthStatus();
    }, []);

    return (
        <div>
            <h2>Application Health Check</h2>
            {error && <p>Error: {error}</p>}
            {healthStatus ? (
                <div>
                    <h4>Status: {healthStatus.status}</h4>
                    <p>{healthStatus.msg}</p>
                </div>
            ) : (
                <p>Loading health status...</p>
            )}
        </div>
    )
};

export default HealthCheck;