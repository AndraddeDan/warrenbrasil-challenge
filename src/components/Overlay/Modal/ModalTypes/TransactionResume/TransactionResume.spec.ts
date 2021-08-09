import { transaction } from "@/mocks";
import { shallowMount } from "@vue/test-utils";
import TimelineStatus from "@/components/TimelineStatus/TimelineStatus.vue";
import TransactionResume from "./TransactionResume.vue";

describe("TransactionResume.vue", () => {
  const titleSelector = '[data-testid="TransacionResume-title"]';
  const statusSelector = '[data-testid="TransacionResume-status"]';
  const fromSelector = '[data-testid="TransacionResume-from"]';
  const fromAmountSelector = '[data-testid="TransacionResume-fromAmount"]';
  const toSelector = '[data-testid="TransacionResume-to"]';
  const toAmountSelector = '[data-testid="TransacionResume-toAmount"]';

  const canShowAmount = true;

  it("test if component is rendered ", () => {
    const wrapper = shallowMount(TransactionResume, {
      propsData: {
        transaction,
        canShowAmount,
      },
    });
    expect(wrapper.exists()).toBe(true);
  });

  it("renders props.transaction when passed", () => {
    const wrapper = shallowMount(TransactionResume, {
      propsData: {
        transaction,
        canShowAmount,
      },
    });

    const title = wrapper.find(titleSelector);
    const from = wrapper.find(fromSelector);
    const fromAmount = wrapper.find(fromAmountSelector);
    const to = wrapper.find(toSelector);
    const toAmount = wrapper.find(toAmountSelector);

    expect(title.text()).toMatch(transaction.title);
    expect(from.text()).toMatch(transaction.from);
    expect(fromAmount.text()).toMatch(transaction.amount.toString());
    expect(to.text()).toMatch(transaction.to);
    expect(toAmount.text()).toMatch(transaction.amount.toString());
  });

  it("hide amount props only when canShowAmount is false", (done) => {
    const wrapper = shallowMount(TransactionResume, {
      propsData: {
        transaction,
        canShowAmount: false,
      },
    });

    const toAmount = wrapper.find(toAmountSelector);
    const fromAmount = wrapper.find(fromAmountSelector);

    expect(toAmount.classes("Details-To__line--hide")).toBe(true);
    expect(fromAmount.classes("Details-From__line--hide")).toBe(true);

    wrapper.setProps({ canShowAmount: true });

    setTimeout(() => {
      const afterSetToAmount = wrapper.find(toAmountSelector);
      const afterSetFromAmount = wrapper.find(fromAmountSelector);

      expect(afterSetToAmount.classes("Details-To__line--hide")).toBe(false);
      expect(afterSetFromAmount.classes("Details-From__line--hide")).toBe(
        false
      );
      done();
    });
  });

  it("render TimelineStatus as child", () => {
    const wrapper = shallowMount(TransactionResume, {
      propsData: {
        transaction,
        canShowAmount,
      },
    });

    const timeline = wrapper.findComponent(TimelineStatus);
    const timelineByTestId = wrapper.find(statusSelector);

    expect(timeline.exists()).toBe(true);
    expect(timelineByTestId.exists()).toBe(true);
  });
});
