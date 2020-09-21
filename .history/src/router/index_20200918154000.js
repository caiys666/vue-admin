import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Layout from '@/views/Layout/index.vue'

const routes = [
  {
    path: "/",
    redirect: "login",
    hidden: true,
    meta:{
      name:'主页',
      
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
      name:'控制台',
      icon: 'console'
    },
    component: Layout,
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
    path: "/info",
    name: "Info",
    meta:{
      name:'信息管理',
      icon: 'menu'
    },
    component: Layout,
    children:[
      {
        path: "/infoIndex",
        name: "InfoIndex",
        meta:{
          name:'信息列表'
        },
        component: () => import("../views/Info/index.vue"),
      },
      {
        path: "/infocategory",
        name: "InfoCategory",
        meta:{
          name:'信息分类'
        },
        component: () => import("../views/Info/category.vue"),
      }
    ]
  },
  /**
   * 用户管理
   */
  {
    path: "/user",
    name: "User",
    meta:{
      name:'用户管理',
      icon: ''
    },
    component: Layout,
    children:[
      {
        path: "/userIndex",
        name: "UserIndex",
        meta:{
          name:'用户列表'
        },
        component: () => import("../views/User/index.vue"),
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
