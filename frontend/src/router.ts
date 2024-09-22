import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    { path: "/", component: () => import("./components/Home.vue") },
    { path: "/health-status", component: () => import("./components/HealthStatus.vue") },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;