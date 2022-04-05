import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/Todos",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Todos.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
