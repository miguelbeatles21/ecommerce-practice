import HommeView from "@/views/HomeView.vue";
import SupplierView from "@/views/SupplierView.vue";
import SupplierRegisterView from "@/views/SupplierRegisterView.vue";


import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/home",
    name: "home",
    component: HommeView,
  },
  {
    path: "/suppliers",
    name: "suppliers",
    component: SupplierView,
  },
  {
    path: "/suppliers-register",
    name: "suppliers-register",
    component: SupplierRegisterView,
  },
  
  
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
