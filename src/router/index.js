// Composables
import { createRouter, createWebHistory } from "vue-router";

// Route files
import publicRoutes from "@/router/publicRoutes";
import dashboardRoutes from "@/router/dashboardRoutes";

const routes = [...publicRoutes, ...dashboardRoutes];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
