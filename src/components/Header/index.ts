import type { Component } from "vue";

export const Header = (): Promise<Component> => {
  return import(
    /* webpackChunkName: "Header" */ "./Header.vue"
  ) as Promise<Component>;
};
