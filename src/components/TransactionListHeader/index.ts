import type { Component } from "vue";

export const TransactionListHeader = (): Promise<Component> => {
  return import(
    /* webpackChunkName: "TransactionListHeader" */ "./TransactionListHeader.vue"
  ) as Promise<Component>;
};
