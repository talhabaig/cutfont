import Vue from "vue";
import Router from "vue-router";
import store from "../store";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/loginUser",
      component: () => import("../views/Layouts/user"),
      children: [
        {
          path: "/loginUser",
          name: "loginUser",
          component: () => import("../views/user/login.vue"),
        },
        {
          path: "/menuUser",
          name: "menuUser",
          component: () => import("../views/user/menuUser.vue"),
        },
        
      ],
    },
  ],
});


export default router;
