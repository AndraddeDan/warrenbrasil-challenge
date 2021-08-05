import type { Component } from "vue";

export const Modal = (): Promise<Component> => {
  return import(
    /* webpackChunkName: "Modal" */ "./Modal.vue"
  ) as Promise<Component>;
};
