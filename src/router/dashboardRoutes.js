import DashboardPage from "@/views/dashboard/DashboardPage.vue";
import MyTutorial from "@/components/dashboard/user/MyTutorial.vue";
import CreateTutorial from "@/components/dashboard/user/CreateTutorial.vue";
import TutorialDrafts from "@/components/dashboard/user/TutorialDrafts.vue";
import TutorialPublished from "@/components/dashboard/user/TutorialPublished.vue";
import UserSettings from "@/components/dashboard/user/UserSettings.vue";

const dashboardRoutes = [
  {
    path: "/dashboard",
    component: DashboardPage,
    meta: { layout: "DashboardLayout", requiresAuth: true },
    children: [
      {
        path: "", // this will render DashboardPage when "/dashboard" is accessed
        name: "DashboardHome",
      },
      {
        path: "/dashboard/my-tutorials",
        name: "MyTutorial",
        component: MyTutorial,
      },
      {
        path: "/dashboard/create-tutorial",
        name: "CreateTutorial",
        component: CreateTutorial,
      },
      {
        path: "/dashboard/tutorial-drafts",
        name: "TutorialDrafts",
        component: TutorialDrafts,
      },
      {
        path: "/dashboard/tutorial-published",
        name: "TutorialPublished",
        component: TutorialPublished,
      },
      {
        path: "/dashboard/user-settings",
        name: "UserSettings",
        component: UserSettings,
      },
    ],
  },
];

export default dashboardRoutes;
