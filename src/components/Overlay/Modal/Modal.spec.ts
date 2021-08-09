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
});
