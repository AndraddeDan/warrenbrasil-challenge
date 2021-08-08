import { FilterEvents } from "../models/types/filter-events";

export const FilterEventTranslator: { [index: string]: string } = {
  [FilterEvents.ENABLE]: "enable",
  [FilterEvents.DISABLE]: "disable",
};
