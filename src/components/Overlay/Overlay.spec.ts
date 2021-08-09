import { shallowMount } from "@vue/test-utils";
import { CreateElement } from "vue";
import { transaction } from "@/mocks";

import TransactionResume from "@/components/Overlay/Modal/ModalTypes/TransactionResume/TransactionResume.vue";
import Modal from "@/components/Overlay/Modal/Modal.vue";

import Overlay from "./Overlay.vue";

describe("Overlay.vue", () => {
  const overlaySelector = '[data-testid="Overlay"]';
  const typeSelector = '[data-testid="Overlay-type"]';
  const componentSelector = '[data-testid="Overlay-component"]';

  const modal = {
    render(h: CreateElement) {
      return h(Modal, {
        props: { closable: true },
        slot: "resume",
      });
    },
  };

  const resumeModal = {
    render(h: CreateElement) {
      return h(TransactionResume, {
        props: { transaction, canShowAmount: true },
      });
    },
  };

  const overlayData = {
    component: resumeModal,
    componentProps: { transaction, canShowAmount: true },
    closable: true,
    content: modal,
  };

  it("test if component is rendered ", () => {
    const wrapper = shallowMount(Overlay);
    expect(wrapper.exists()).toBe(true);
  });

  it("tests if the click trigger call the method", async (done) => {
    const close = jest.fn();
    const wrapper = shallowMount(Overlay, {
      methods: { close },
    });

    await wrapper.setData(overlayData);

    const overlay = wrapper.find(overlaySelector);
    await overlay.trigger("click");

    setTimeout(() => {
      expect(close).toBeCalled();
      done();
    });
  });

  it("tests if exists child compoents only when has data set and before close", async (done) => {
    const wrapper = shallowMount(Overlay);

    const overlayBeforeSet = wrapper.find(overlaySelector);
    const typeComponentBeforeSet = wrapper.find(typeSelector);
    const contentComponentBeforeSet = wrapper.find(componentSelector);

    expect(overlayBeforeSet.exists()).toBe(false);
    expect(typeComponentBeforeSet.exists()).toBe(false);
    expect(contentComponentBeforeSet.exists()).toBe(false);

    await wrapper.setData(overlayData);

    const overlayAfterSet = wrapper.find(overlaySelector);
    const typeComponentAfterSet = wrapper.find(typeSelector);
    const contentComponentAfterSet = wrapper.find(componentSelector);

    expect(overlayAfterSet.exists()).toBe(true);
    expect(typeComponentAfterSet.exists()).toBe(true);
    expect(contentComponentAfterSet.exists()).toBe(true);

    const overlay = wrapper.find(overlaySelector);
    await overlay.trigger("click");

    setTimeout(() => {
      const overlayAfterClick = wrapper.find(overlaySelector);
      const typeComponentAfterClick = wrapper.find(typeSelector);
      const contentComponentAfterClick = wrapper.find(componentSelector);

      expect(overlayAfterClick.exists()).toBe(false);
      expect(typeComponentAfterClick.exists()).toBe(false);
      expect(contentComponentAfterClick.exists()).toBe(false);
      done();
    });
  });
});
