import type { Component } from "vue";

export const Transactions = (): Promise<Component> => {
  return import(
    /* webpackChunkName: "Login" */ "./Transactions.vue"
  ) as Promise<Component>;
};
