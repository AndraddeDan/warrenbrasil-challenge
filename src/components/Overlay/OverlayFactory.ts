import { VueConstructor } from "vue";

import Modal from "@/components/Overlay/Modal/Modal.vue";
import { OverlayContent } from "@/models";

const { MODAL } = OverlayContent;

const overlay: { [index: string]: VueConstructor } = {
  [MODAL]: Modal,
};

export default class OverlayFactory {
  public static construct(type: OverlayContent): VueConstructor {
    return overlay[type];
  }
}
