import DashboardPage from "@/views/dashboard/DashboardPage.vue";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "DashboardPage",
    component: DashboardPage,
    meta: { layout: "DashboardLayout", requiresAuth: true },
  },
];

export default dashboardRoutes;
