import { EventBus } from "@/utils/EventBus";
import { ModalEvents, ModalData, ModalTypes, OverlayContent } from "@/models";

export const ModalService = {
  openModal<P>({
    component,
    closable: closable = true,
    props,
  }: ModalData<P>): void {
    const content = OverlayContent.MODAL;
    EventBus.$emit(ModalEvents.OPEN, { component, closable, props, content });
  },

  closeModal(): void {
    EventBus.$emit(ModalEvents.CLOSE);
  },

  response<T>(type: ModalTypes, response: T, canClose = true): void {
    EventBus.$emit(type, response);
    if (canClose) ModalService.closeModal();
  },
};
