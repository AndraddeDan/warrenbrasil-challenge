import { VueConstructor } from "vue";
import { ModalTypes } from "@/models";

import TransactionResume from "./ModalTypes/TransactionResume/TransactionResume.vue";

const { TRANSACTION_RESUME } = ModalTypes;

const modal: { [index: string]: VueConstructor } = {
  [TRANSACTION_RESUME]: TransactionResume,
};

export default class ModalFactory {
  public static construct(type: ModalTypes): VueConstructor {
    return modal[type];
  }
}
