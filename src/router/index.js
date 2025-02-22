import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import TaskCreateView from "@/views/TaskCreateView.vue";
import TaskEditView from "@/views/TaskEditView.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/create", component: TaskCreateView },
    { path: "/edit-task/:id", component: TaskEditView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
