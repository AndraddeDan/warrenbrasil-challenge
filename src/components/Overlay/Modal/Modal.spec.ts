import { shallowMount } from "@vue/test-utils";
import TransactionResume from "@/components/Overlay/Modal/ModalTypes/TransactionResume/TransactionResume.vue";
import { transaction } from "@/mocks";
import Modal from "./Modal.vue";
import { CreateElement } from "vue";

describe("Modal.vue", () => {
  const closeSelector = '[data-testid="Modal-close"]';
  const slotSelector = '[data-testid="Modal-body"]';
  const closable = true;

  it("test if component is rendered ", () => {
    const wrapper = shallowMount(Modal);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders props.closable only when passed", (done) => {
    const wrapper = shallowMount(Modal, {
      propsData: { closable },
    });

    const closeButton = wrapper.find(closeSelector);
    expect(closeButton.exists()).toBe(true);

    wrapper.setProps({ closable: !closable });

    setTimeout(() => {
      const closeButton = wrapper.find(closeSelector);
      expect(closeButton.exists()).toBe(false);
      done();
    });
  });

  it("tests if the click trigger call the method", async () => {
    const handleClose = jest.fn();
    const wrapper = shallowMount(Modal, {
      propsData: { closable },
      methods: { handleClose },
    });

    const closeButton = wrapper.find(closeSelector);
    await closeButton.trigger("click");

    expect(handleClose).toBeCalled();
  });

  it("tests if the click trigger emit an event", async () => {
    const handleClose = jest.fn();
    const wrapper = shallowMount(Modal, {
      propsData: { closable },
      methods: { handleClose },
    });

    wrapper.vm.$emit("close");
    expect(wrapper.emitted().close).toBeTruthy();
  });

  it("tests if the esc keyup trigger call the method", (done) => {
    const handleEscKeyup = jest.fn();
    const wrapper = shallowMount(Modal, {
      propsData: { closable },
      methods: { handleEscKeyup },
    });

    const event = new KeyboardEvent("keyup", { keyCode: 27 });
    document.dispatchEvent(event);

    setTimeout(() => {
      expect(handleEscKeyup).toHaveBeenCalled();
      done();
    });
  });

  it("tests if the esc keyup trigger call the method only when component is mounted", (done) => {
    const handleEscKeyup = jest.fn();
    const event = new KeyboardEvent("keyup", { keyCode: 27 });
    document.dispatchEvent(event);

    setTimeout(() => {
      expect(handleEscKeyup).toHaveBeenCalledTimes(0);
      done();
    });
  });

  it("renders main slot content", () => {
    const mainSlot = "Good Morning";
    const wrapper = shallowMount(Modal, {
      propsData: { closable },
      slots: {
        default: mainSlot,
      },
    });

    const slotInside = wrapper.find(slotSelector);
    expect(slotInside.element.textContent).toMatch(mainSlot);
  });

  it("renders a component in main slot content", () => {
    const resume = {
      render(h: CreateElement) {
        return h(TransactionResume, {
          props: { transaction, canShowAmount: true },
        });
      },
    };

    const wrapper = shallowMount(Modal, {
      propsData: { closable },
      slots: {
        default: resume,
      },
    });

    const componentInSlot = wrapper.findComponent(TransactionResume);
    expect(componentInSlot.exists()).toBe(true);
  });
});
