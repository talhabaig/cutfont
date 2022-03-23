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
          path: "/loginUser/:machineId",
          name: "loginUser",
          component: () => import("../views/user/login.vue"),
        },
        {
          path: "/menuUser/:machineId",
          name: "menuUser",
          component: () => import("../views/user/menuUser.vue"),
        },
        {
          path: "/productDetail",
          name: "productDetail",
          component: () => import("../views/user/productDetail.vue"),
        },
        {
          path: "/cart",
          name: "cart",
          component: () => import("../views/user/cart.vue"),
        },
        {
          path: "/checkoutDetail",
          name: "checkoutDetail",
          component: () => import("../views/user/checkoutDetail.vue"),
        },
        
        {
          path: "/paymentMethod",
          name: "paymentMethod",
          component: () => import("../views/user/paymentMethod.vue"),
        },
        {
          path: "/paymentDetail",
          name: "paymentDetail",
          component: () => import("../views/user/paymentDetail.vue"),
        },
      ],
    },
  ],
});


export default router;
