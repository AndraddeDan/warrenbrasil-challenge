import { shallowMount } from "@vue/test-utils";
import TransactionResume from "@/components/Overlay/Modal/ModalTypes/TransactionResume/TransactionResume.vue";

describe("TransactionResume.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(TransactionResume, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
