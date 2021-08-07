import { shallowMount } from "@vue/test-utils";
import { transaction } from "./mocks";
import TransactionCard from "./TransactionCard.vue";

describe("TransactionCard.vue", () => {
  it("renders props.transaction when passed", () => {
    const wrapper = shallowMount(TransactionCard, {
      propsData: { transaction, canShowAmount: true },
    });

    const title = wrapper.find('[data-testid="title"]');

    expect(title).toMatch(transaction.title);
  });
});
