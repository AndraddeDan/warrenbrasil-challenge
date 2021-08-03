import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { Transactions } from "@/views/Transactions";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  { path: "/", name: "Home", component: Transactions },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
