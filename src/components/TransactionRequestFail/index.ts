import type { Component } from "vue";

export const TransactionRequestFail = (): Promise<Component> => {
  return import(
    /* webpackChunkName: "TransactionRequestFail" */ "./TransactionRequestFail.vue"
  ) as Promise<Component>;
};
