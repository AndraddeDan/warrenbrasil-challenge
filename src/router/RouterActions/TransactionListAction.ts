import { NavigationGuardNext, Route } from "vue-router";
import store from "@/store";

export const TransactionListAction = (
  to: Route,
  from: Route,
  next: NavigationGuardNext<Vue>
): void => {
  store.dispatch("transactions/transactionList");
  next();
};
