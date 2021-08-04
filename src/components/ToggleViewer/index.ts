import type { Component } from "vue";

export const ToggleViewer = (): Promise<Component> => {
  return import(
    /* webpackChunkName: "ToggleViewer" */ "./ToggleViewer.vue"
  ) as Promise<Component>;
};
