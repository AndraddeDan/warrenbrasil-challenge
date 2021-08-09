import { transaction } from "@/mocks";
import { EventBus } from "@/utils/EventBus";
import { ModalData, ModalEvents, ModalTypes, Transaction } from "@/models";
import { ModalService } from "../ModalService";

describe("ModalService.ts", () => {
  const modalData: ModalData<{
    canShowAmount: boolean;
    transaction: Transaction;
  }> = {
    closable: true,
    component: ModalTypes.TRANSACTION_RESUME,
    props: { canShowAmount: true, transaction },
  };

  it("test openModal()", () => {
    let modalWasOpened = false;
    EventBus.$on(ModalEvents.OPEN, () => (modalWasOpened = true));
    ModalService.openModal(modalData);

    expect(modalWasOpened).toBe(true);
  });

  it("test closeModal()", () => {
    let modalWasClosed = false;
    EventBus.$on(ModalEvents.CLOSE, () => (modalWasClosed = true));
    ModalService.closeModal();

    expect(modalWasClosed).toBe(true);
  });

  it("test response()", () => {
    let expectedResponse = "";
    const responseType = ModalTypes.TRANSACTION_RESUME;
    const modalResponse = "hi";
    EventBus.$on(
      ModalTypes.TRANSACTION_RESUME,
      (response: string) => (expectedResponse = response)
    );
    ModalService.response(responseType, modalResponse);

    expect(expectedResponse).toBe("hi");
  });
});
