import type { Component } from "vue";

export const TimelineStatus = (): Promise<Component> => {
  return import(
    /* webpackChunkName: "TimelineStatus" */ "./TimelineStatus.vue"
  ) as Promise<Component>;
};
