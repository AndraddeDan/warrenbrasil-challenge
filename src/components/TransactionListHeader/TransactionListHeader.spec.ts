import { shallowMount } from "@vue/test-utils";
import TransactionListHeader from "./TransactionListHeader.vue";

describe("TransactionListHeader.vue", () => {
  it("check header the titles quantity", () => {
    const wrapper = shallowMount(TransactionListHeader);
    const headers = wrapper.findAll("span");
    expect(headers.length).toBe(4);
  });

  it("check text header match", () => {
    const wrapper = shallowMount(TransactionListHeader);

    const title = wrapper.find('[data-testid="title"]');
    const description = wrapper.find('[data-testid="description"]');
    const status = wrapper.find('[data-testid="status"]');
    const amount = wrapper.find('[data-testid="amount"]');

    expect(title.text()).toBe("Título");
    expect(description.text()).toBe("Descrição");
    expect(status.text()).toBe("Status");
    expect(amount.text()).toBe("Valor");
  });
});
