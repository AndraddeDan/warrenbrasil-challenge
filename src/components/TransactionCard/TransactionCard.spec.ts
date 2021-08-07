import { shallowMount } from "@vue/test-utils";
import { transaction } from "@/mocks";
import TransactionCard from "./TransactionCard.vue";

describe("TransactionCard.vue", () => {
  it("renders props.transaction when passed", () => {
    const wrapper = shallowMount(TransactionCard, {
      propsData: { transaction, canShowAmount: true },
    });

    const title = wrapper.find('[data-testid="TransactionCard-title"]');
    const description = wrapper.find(
      '[data-testid="TransactionCard-description"]'
    );
    const status = wrapper.find('[data-testid="TransactionCard-status"]');
    const amount = wrapper.find('[data-testid="TransactionCard-amount"]');

    expect(title.text()).toMatch(transaction.title);
    expect(description.text()).toMatch(transaction.description);
    expect(status.text()).toMatch(transaction.status);
    expect(amount.text()).toMatch(transaction.amount.toString());
  });

  it("hide amount props when canShowAmount is false", () => {
    const wrapper = shallowMount(TransactionCard, {
      propsData: { transaction, canShowAmount: false },
    });

    const amount = wrapper.find('[data-testid="TransactionCard-amount"]');
    expect(amount.classes("TransactionCard__amount--hide")).toBe(true);
  });
});
