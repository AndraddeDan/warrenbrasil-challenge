import type { Component } from "vue";

export const Searcher = (): Promise<Component> => {
  return import(
    /* webpackChunkName: "Searcher" */ "./Searcher.vue"
  ) as Promise<Component>;
};
