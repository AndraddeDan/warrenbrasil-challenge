import type { Component } from "vue";

export const TransactionCard = (): Promise<Component> => {
  return import(
    /* webpackChunkName: "TransactionCard" */ "./TransactionCard.vue"
  ) as Promise<Component>;
};
