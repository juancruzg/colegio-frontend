import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import StudentsView from "../views/students/StudentsView.vue";
import StudentDetail from "../views/students/StudentDetail.vue";
import DivisionsView from "../views/divisions/DivisionsView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/administration/students",
    name: "students_administration",
    component: StudentsView,
  },
  {
    path: "/administration/students/new",
    name: "students_administration_new_detail",
    component: StudentDetail,
  },
  {
    path: "/administration/students/:id",
    name: "students_administration_detail",
    component: StudentDetail,
  },
  {
    path: "/administration/classrooms",
    name: "classrooms_administration",
    component: HomeView,
  },
  {
    path: "/advanced_config/subjects",
    name: "subjects_administration",
    component: HomeView,
  },
  {
    path: "/advanced_config/divisions",
    name: "divisions_administration",
    component: DivisionsView,
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
