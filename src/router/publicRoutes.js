import LandingPage from "@/views/public/LandingPage.vue";
import TutorialsPage from "@/views/public/TutorialsPage.vue";
import CategoriesPage from "@/views/public/CategoriesPage.vue";
import LoginPage from "@/views/auth/LoginPage.vue";
import RegisterPage from "@/views/auth/RegisterPage.vue";

const publicRoutes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
    meta: { layout: "DefaultLayout", requiresAuth: false },
  },
  {
    path: "/tutorials",
    name: "TutorialsPage",
    component: TutorialsPage,
    meta: { layout: "DefaultLayout", requiresAuth: false },
  },
  {
    path: "/categories",
    name: "CategoriesPage",
    component: CategoriesPage,
    meta: { layout: "DefaultLayout", requiresAuth: false },
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
    meta: { layout: "DefaultLayout", requiresAuth: false },
  },
  {
    path: "/register",
    name: "RegisterPage",
    component: RegisterPage,
    meta: { layout: "DefaultLayout", requiresAuth: false },
  },
];

export default publicRoutes;
