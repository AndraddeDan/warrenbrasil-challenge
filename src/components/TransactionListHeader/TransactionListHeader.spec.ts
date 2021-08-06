import { shallowMount } from "@vue/test-utils";
import TransactionListHeader from "@/components/TransactionListHeader/TransactionListHeader.vue";

describe("TransactionListHeader.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(TransactionListHeader, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
