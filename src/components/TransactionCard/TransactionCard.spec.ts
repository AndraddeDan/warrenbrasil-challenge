import { shallowMount } from "@vue/test-utils";
import { transaction } from "@/mocks";
import TransactionCard from "./TransactionCard.vue";

describe("TransactionCard.vue", () => {
  const titleSelector = '[data-testid="TransactionCard-title"]';
  const descriptionSelector = '[data-testid="TransactionCard-description"]';
  const statusSelector = '[data-testid="TransactionCard-status"]';
  const amountSelector = '[data-testid="TransactionCard-amount"]';

  it("test if component is rendered ", () => {
    const wrapper = shallowMount(TransactionCard, {
      propsData: { transaction, canShowAmount: true },
    });
    expect(wrapper.exists()).toBe(true);
  });

  it("renders props.transaction when passed", () => {
    const wrapper = shallowMount(TransactionCard, {
      propsData: { transaction, canShowAmount: true },
    });

    const title = wrapper.find(titleSelector);
    const description = wrapper.find(descriptionSelector);
    const status = wrapper.find(statusSelector);
    const amount = wrapper.find(amountSelector);

    expect(title.text()).toMatch(transaction.title);
    expect(description.text()).toMatch(transaction.description);
    expect(status.text()).toMatch(transaction.status);
    expect(amount.text()).toMatch(transaction.amount.toString());
  });

  it("hide amount props when canShowAmount is false", () => {
    const wrapper = shallowMount(TransactionCard, {
      propsData: { transaction, canShowAmount: false },
    });

    const amount = wrapper.find(amountSelector);
    expect(amount.classes("TransactionCard__amount--hide")).toBe(true);
  });

  it("loading effect only when isFetching prop is true", (done) => {
    const wrapper = shallowMount(TransactionCard, {
      propsData: { transaction, canShowAmount: false, isFetching: true },
    });

    const titleLoading = "TransactionCard__title--loading";
    const descriptionLoading = "TransactionCard__description--loading";
    const statusLoading = "TransactionCard__status--loading";
    const amountLoading = "TransactionCard__amount--loading";

    const title = wrapper.find(titleSelector);
    const description = wrapper.find(descriptionSelector);
    const status = wrapper.find(statusSelector);
    const amount = wrapper.find(amountSelector);

    expect(title.classes(titleLoading)).toBe(true);
    expect(description.classes(descriptionLoading)).toBe(true);
    expect(status.classes(statusLoading)).toBe(true);
    expect(amount.classes(amountLoading)).toBe(true);

    wrapper.setProps({ isFetching: false });

    setTimeout(() => {
      const title = wrapper.find(titleSelector);
      const description = wrapper.find(descriptionSelector);
      const status = wrapper.find(statusSelector);
      const amount = wrapper.find(amountSelector);

      expect(title.classes(titleLoading)).toBe(false);
      expect(description.classes(descriptionLoading)).toBe(false);
      expect(status.classes(statusLoading)).toBe(false);
      expect(amount.classes(amountLoading)).toBe(false);
      done();
    });
  });
});
