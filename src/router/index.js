import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/example",
    name: "Example",
    component: () => import("../views/Example.vue"),
  },
  {
    path: "/interface",
    name: "Interface",
    component: () => import("../views/Interface.vue"),
  },
  {
    path: "/guide",
    name: "Guide",
    component: () => import("../views/Guide.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
