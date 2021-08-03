import type { Component } from "vue";

export const FilterByStatus = (): Promise<Component> => {
  return import(
    /* webpackChunkName: "FilterByStatus" */ "./FilterByStatus.vue"
  ) as Promise<Component>;
};
