import { shallowMount } from "@vue/test-utils";
import TransactionCard from "@/components/TransactionCard/TransactionCard.vue";

describe("TransactionCard.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(TransactionCard, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
