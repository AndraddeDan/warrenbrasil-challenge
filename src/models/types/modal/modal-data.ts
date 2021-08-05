import { ModalTypes } from "./modal-types";

export interface ModalData {
  closable: boolean;
  component: ModalTypes;
  props?: any;
}
