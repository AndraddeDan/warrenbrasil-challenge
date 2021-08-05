import { OverlayContent } from "./overlay-content";

export interface OverlayData<T, P> {
  closable: boolean;
  component: T;
  props?: P | null;
  content: OverlayContent;
}
