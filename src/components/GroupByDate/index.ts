import type { Component } from "vue";

export const GroupByDate = (): Promise<Component> => {
  return import(
    /* webpackChunkName: "GroupByDate" */ "./GroupByDate.vue"
  ) as Promise<Component>;
};
