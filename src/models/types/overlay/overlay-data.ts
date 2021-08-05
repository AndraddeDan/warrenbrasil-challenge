import { OverlayContent } from "./overlay-content";

export interface OverlayData<T> {
  closable: boolean;
  component: T;
  props?: any;
  content: OverlayContent;
}
