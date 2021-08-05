import { shallowMount } from "@vue/test-utils";
import Modal from "@/components/Overlay/Modal/Modal.vue";

describe("Modal.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Modal, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
