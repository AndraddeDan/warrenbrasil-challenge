import { Transactions } from "@/views/Transactions";
import { RouteConfig } from "vue-router";
import { TransactionListAction } from "./RouterActions/TransactionListAction";

export const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Transactions,
    beforeEnter: TransactionListAction,
  },
];
