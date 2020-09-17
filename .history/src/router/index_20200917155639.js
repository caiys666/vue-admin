import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "login",
    hidden: true,
    meta:{
      name:'主页'
    }
  },
  {
    path: "/login",
    name: "Login",
    hidden: true,
    meta:{
      name:'登陆'
    },
    component: () => import("../views/Login/index.vue")
  },
  {
    path: "/console",
    name: "Console",
    redirect: "index",
    meta:{
      name:'控制台'
    },
    component: () => import("../views/Layout/index.vue"),
    children:[
      {
        path: "/index",
        name: "Index",
        meta:{
          name:'首页'
        },
        component: () => import("../views/Console/index.vue"),
      }
    ]
  },
  {
    path: "/console",
    name: "Console",
    redirect: "index",
    meta:{
      name:'信息管理'
    },
    component: () => import("../views/Layout/index.vue"),
    children:[
      {
        path: "/index",
        name: "Index",
        meta:{
          name:'信息列表'
        },
        component: () => import("../views/Console/index.vue"),
      },
      {
        path: "/index",
        name: "Index",
        meta:{
          name:'信息分类'
        },
        component: () => import("../views/Console/index.vue"),
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
