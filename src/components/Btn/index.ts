import type { Component } from "vue";

export const Btn = (): Promise<Component> => {
  return import(
    /* webpackChunkName: "Btn" */ "./Btn.vue"
  ) as Promise<Component>;
};
