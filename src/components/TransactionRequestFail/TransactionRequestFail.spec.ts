import { shallowMount } from "@vue/test-utils";
import TransactionRequestFail from "./TransactionRequestFail.vue";

import RefreshIcon from "@/assets/icons/RefreshIcon.svg";

describe("TransactionRequestFail.vue", () => {
  const buttonSelector = '[data-testid="TransactionRequestFail-button"]';

  it("test if component is rendered ", () => {
    const wrapper = shallowMount(TransactionRequestFail);
    expect(wrapper.exists()).toBe(true);
  });

  it("checks if exists refresh icon", () => {
    const wrapper = shallowMount(TransactionRequestFail, {});
    const hasRefreshIcon = wrapper.findComponent(RefreshIcon);
    expect(hasRefreshIcon.exists()).toBe(true);
  });

  it("tests if the click trigger emit an event", async () => {
    const wrapper = shallowMount(TransactionRequestFail);
    const button = wrapper.find(buttonSelector);
    await button.trigger("click");
    const change = wrapper.emitted().change;
    expect(change).toBeTruthy();
  });

  it("tests if the click trigger call the method", async () => {
    const output = jest.fn();
    const wrapper = shallowMount(TransactionRequestFail, {
      methods: { output },
    });

    const button = wrapper.find(buttonSelector);
    await button.trigger("click");
    expect(output).toBeCalled();
  });
});
