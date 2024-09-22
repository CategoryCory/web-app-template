<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { getHealthStatus } from "../services/healthStatusService";
import { HealthStatus } from "../models/HealthStatus";

const { data: healthStatus, isLoading, isError } = useQuery<HealthStatus>({
  queryKey: ['healthStatus'],
  queryFn: getHealthStatus,
  staleTime: 300000,
});
</script>

<template>
  <div class="health-status-container">
    <h2>API Health Status</h2>

    <div v-if="isLoading">Checking health status...</div>
    <div v-if="isError">Error communicating with API.</div>

    <div v-if="healthStatus">
      <h4>Status: {{ healthStatus.status }}</h4>
      <p>{{ healthStatus.msg }}</p>
    </div>
  </div>
</template>

<style scoped>
.health-status-container {
  color: rgb(25, 180, 180);
}
</style>
