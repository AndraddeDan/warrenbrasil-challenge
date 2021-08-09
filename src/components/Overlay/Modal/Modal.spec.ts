import { shallowMount } from "@vue/test-utils";
import Modal from "@/components/Overlay/Modal/Modal.vue";

describe("Modal.vue", () => {
  const closeSelector = '[data-testid="Modal-close"]';
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
});
