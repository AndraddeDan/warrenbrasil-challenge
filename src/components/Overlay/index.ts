import type { Component } from "vue";

export const Overlay = (): Promise<Component> => {
  return import(
    /* webpackChunkName: "Overlay" */ "./Overlay.vue"
  ) as Promise<Component>;
};
