import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "Login"
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("../views/Login/index.vue")
  },
  {
    path: "/Console",
    name: "Console",
    component: () => import("../views/Console/index.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
