// Composables
import { createRouter, createWebHistory } from "vue-router";
// import { isAuthenticated } from "@/services/mockAuth";

// Route files
import publicRoutes from "@/router/publicRoutes";
import dashboardRoutes from "@/router/dashboardRoutes";

const routes = [...publicRoutes, ...dashboardRoutes];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Navigation Guards
// router.beforeEach((to, next) => {
//   if (to.meta.requiresAuth && !isAuthenticated()) {
//     next({ path: "/login" });
//   } else {
//     next();
//   }
// });

export default router;
