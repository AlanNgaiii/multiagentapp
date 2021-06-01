import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Index from "@/views/h5/Index";

const router = new VueRouter({
  routes: [
    {
      path: "/index",
      component: Index,
    },
  ],
});

export default router;
